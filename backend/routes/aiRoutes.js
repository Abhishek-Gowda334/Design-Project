const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// @desc    Calculate yield potential using AI
// @route   POST /api/ai/yield
// @access  Public (should be protected in prod)
router.post('/yield', async (req, res) => {
    try {
        const { area, unit, location } = req.body;
        console.log("AI Yield Request:", { area, unit, location });

        if (!area || !unit) {
            console.log("Missing area or unit");
            return res.status(400).json({ message: 'Area and unit are required' });
        }

        const apiKey = process.env.GEMINI_API_KEY;
        console.log("Gemini API Key Status:", apiKey ? "Present" : "Missing");
        if (!apiKey) {
            console.error("GEMINI_API_KEY is missing");
            // Return mock data for testing if key is missing (optional fallback)
            // But better to error so user knows to add key
            return res.status(500).json({
                message: 'AI Service Unavailable: Missing API Key. Please add GEMINI_API_KEY to backend .env'
            });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

        const prompt = `
        Act as an expert agricultural consultant.
        A user has ${area} ${unit} of available space for farming in or near ${location}.
        
        Analyze the potential for this specific area and location (consider climate of ${location} if known).
        Suggest the best crops to grow in this specific space size (e.g. if small, suggest herbs/microgreens; if large, suggest staples).
        
        Provide the response in STRICT JSON format with the following structure:
        {
            "crops": ["Crop 1", "Crop 2", "Crop 3"],
            "estimatedIncome": "Range of income (e.g. ₹15,000 - ₹25,000 / month)",
            "bestMethod": "Recommended farming method (e.g. Hydroponics, Vertical Farming, Open Field)"
        }
        Do not include any markdown formatting like \`\`\`json. Just return the raw JSON string.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Clean up markdown if model adds it despite instructions
        const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();

        try {
            const jsonResponse = JSON.parse(cleanText);
            res.json(jsonResponse);
        } catch (parseError) {
            console.error("Failed to parse AI response:", text);
            res.status(500).json({ message: "AI response processing failed", raw: text });
        }

    } catch (error) {
        console.error("AI Error:", error);
        res.status(500).json({ message: 'Failed to generate recommendations' });
    }
});

module.exports = router;
