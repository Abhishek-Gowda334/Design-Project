
export interface ModuleStage {
    stage: number;
    title: string;
    duration: string;
    topics: {
        title: string;
        content: string;
    }[];
}

export const riceSyllabus: ModuleStage[] = [
    {
        stage: 1,
        title: "Planning & Field Selection",
        duration: "1-2 Weeks Before Sowing",
        topics: [
            {
                title: "Season & Varieties (Karnataka)",
                content: "**Season:** Kharif (June-Nov) is the main season. Sowing starts with the onset of Monsoon (June).\n**Suitable Varieties:**\n*   **Coastal/Hilly:** Intan, Abhilash, Jaya.\n*   **Irrigated Maidan:** Mandya Vijaya (135-140 days), Jaya, Rasi, Tanu (KMP-101), BR-2655.\n*   **Drill Sown:** Rasi, Tellahamsa."
            },
            {
                title: "Field Selection",
                content: "Select a field with **clayey or clay-loam soil** that retains water well. Avoid sandy soils for transplanted rice. Ensure the field is leveled and has proper bunds (holus) to hold water."
            }
        ]
    },
    {
        stage: 2,
        title: "Land Preparation",
        duration: "2-3 Weeks",
        topics: [
            {
                title: "Primary Tillage",
                content: "Plough the land immediately after the previous harvest or summer showers (April-May). This helps kill weed seeds and exposes soil-borne pests to the sun."
            },
            {
                title: "Puddling & Leveling",
                content: "1.  **Puddling:** 2 weeks before transplanting, flood the field and plough with a cage wheel/puddler. This destroys soil structure to reduce water percolation.\n2.  **Leveling:** Use a leveling board to ensure uniform water depth. Uneven fields lead to uneven crop growth."
            },
            {
                title: "Green Manuring",
                content: "Apply organic manure (FYM) @ 10 tonnes/ha or incorporate green manure crops like Dhaincha or Sunhemp during puddling."
            }
        ]
    },
    {
        stage: 3,
        title: "Seed Selection & Treatment",
        duration: "2-3 Days",
        topics: [
            {
                title: "Seed Selection",
                content: "**Seed Rate:** 20-25 kg per acre for transplanting.\n**Quality Check:** Dissolve common salt in water. Put seeds in it. Floating seeds are chaffy (discard them); heavy seeds that sink are good for sowing. Wash sinking seeds with fresh water immediately."
            },
            {
                title: "Seed Treatment",
                content: "Soak seeds in water with **Bavistin (Carbendazim)** @ 2g/kg of seed for 24 hours. Drain water and keep seeds in a gunny bag for sprouting (incubation) for 24-48 hours until tiny white sprouts appear."
            }
        ]
    },
    {
        stage: 4,
        title: "Nursery Preparation",
        duration: "20-30 Days",
        topics: [
            {
                title: "Raising Seedlings",
                content: "Prepare raised beds (1m wide) in a wet nursery. Broadcast sprouted seeds evenly. Keep the beds moist but do not flood them initially. Apply a small dose of Urea (1-2 kg) if seedlings look yellow."
            },
            {
                title: "Weed & Pest Check",
                content: "Manually remove weed grasses. If blast disease spots appear (spindle shape), spray Carbendazim. Maintain water level at 2-3 cm once seedlings are 15 days old."
            }
        ]
    },
    {
        stage: 5,
        title: "Transplanting to Main Field",
        duration: "2-3 Days",
        topics: [
            {
                title: "Ideal Timing",
                content: "Transplant when seedlings are **21-25 days old** (4-5 leaf stage). delayed transplanting reduces yield."
            },
            {
                title: "Method",
                content: "**Spacing:** 20x10 cm or 15x10 cm depending on variety duration.\n**Depth:** Plant shallow (2-3 cm deep). Deep planting inhibits tillering.\n**Density:** 2-3 seedlings per hill. Maintain a thin film of water during transplanting."
            }
        ]
    },
    {
        stage: 6,
        title: "Vegetative Growth (Tillering)",
        duration: "30-40 Days",
        topics: [
            {
                title: "Water Management",
                content: "Keep water level at **2-5 cm**. Do not let the field dry out completely, but 'Alternate Wetting and Drying' can be practiced to save water and reduce pests."
            },
            {
                title: "Fertilizer (Top Dressing)",
                content: "Apply 50% of Nitrogen (Urea) at tillering stage (approx. 30 days after transplanting). Ensure no standing water while applying urea, then re-flood after 24 hours."
            },
            {
                title: "Weeding",
                content: "Critical period! Weeds compete for nutrients. Remove weeds manually or use a cono-weeder (which also aerates soil)."
            }
        ]
    },
    {
        stage: 7,
        title: "Reproductive Stage",
        duration: "25-30 Days",
        topics: [
            {
                title: "Panicle Initiation to Flowering",
                content: "The plant stops producing tillers and starts growing the grain head (panicle). This is the **most sensitive stage** to water stress. Keep field flooded (5 cm)."
            },
            {
                title: "Disease Alert",
                content: "**Blast & Sheath Blight:** Watch for lesions. Spray Tricyclazole if blast is severe.\n**Stem Borer:** Watch for 'Dead Hearts'. Apply Cartap if needed."
            }
        ]
    },
    {
        stage: 8,
        title: "Grain Filling & Maturity",
        duration: "20-25 Days",
        topics: [
            {
                title: "Milking to Dough Stage",
                content: "Grains fill with starch. Initially milky, then turning hard (dough). Maintain moisture but stop standing water.\n**Pest Watch:** Gundhi Bug attacks at milking stage (sucks sap, empty grains). Dust Malathion if bugs exceed economic threshold."
            },
            {
                title: "Water Drain",
                content: "**Crucial:** Drain out all water from the field **10-15 days before harvest**. This hastens maturity and hardens the soil for harvesting machines."
            }
        ]
    },
    {
        stage: 9,
        title: "Harvesting",
        duration: "7-10 Days",
        topics: [
            {
                title: "Signs of Maturity",
                content: "Harvest when 80-85% of grains are golden yellow. Stem may still be slightly green. Grain moisture should be 20-24%."
            },
            {
                title: "Procedure",
                content: "Cut the crop close to the ground. Thresh immediately or dry in the field for 1-2 days if using manual threshing. Combine harvesters do both simultaneously."
            }
        ]
    },
    {
        stage: 10,
        title: "Post-Harvest Management",
        duration: "1-2 Weeks",
        topics: [
            {
                title: "Drying",
                content: "Sun dry the grains on a concrete floor or tarpaulin. Stir frequently. Bring moisture content down to **12-13%** for storage. High moisture leads to fungal, discoloration, and pest attack."
            },
            {
                title: "Storage",
                content: "Store in gunny bags (stacked on wooden pallets, not floor) or metal bins. Use Neem leaves or chemical fumigants for long-term storage protection."
            }
        ]
    }
];

export const wheatSyllabus: ModuleStage[] = [
    {
        stage: 1,
        title: "Planning & Crop Selection",
        duration: "1-2 Weeks Before Sowing",
        topics: [
            {
                title: "Season & Climate",
                content: "**Season:** Rabi (Winter). Sowing in Oct-Nov. Wheat requires cool nights (20-25°C germination, 14-15°C tillering).\n**Karnataka Varieties (Irrigated):**\n*   **UAS 304:** High yielding bread wheat for Peninsular Zone.\n*   **DDK 1025/1029:** Khapli (Dicoccum) wheat, good for diabetes management.\n*   **MACS 6222:** Rust resistant, high yield (45-50 qtl/ha)."
            },
            {
                title: "Field Selection",
                content: "Choose **loamy or clay loam soil** with good drainage. Wheat is sensitive to waterlogging. pH 6.0-7.5 is ideal."
            }
        ]
    },
    {
        stage: 2,
        title: "Land Preparation",
        duration: "2-3 Weeks",
        topics: [
            {
                title: "Tillage",
                content: "Plough the land with a disc plough to a depth of 15-20 cm. Follow with 2-3 harrowings and planking to break clods and level the field."
            },
            {
                title: "Pre-Sowing Irrigation (Palewa)",
                content: "Apply heavy irritation 4-5 days before sowing. Plough again when soil is at 'Wapsa' (optimal moisture) condition. This ensures uniform germination."
            }
        ]
    },
    {
        stage: 3,
        title: "Seed Selection & Treatment",
        duration: "2-3 Days",
        topics: [
            {
                title: "Seed Rate & Quality",
                content: "**Rate:** 40-50 kg/acre (100-125 kg/ha). Use 25% higher rate for late sowing.\n**Quality:** Use certified seeds with >85% germination rate."
            },
            {
                title: "Treatment",
                content: "Treat seeds with **Carbendazim (Bavistin)** @ 2g/kg or Trichoderma viride @ 4g/kg to prevent Loose Smut and root rots. Termite prone areas: Treat with Chlorpyriphos 20EC @ 4ml/kg."
            }
        ]
    },
    {
        stage: 4,
        title: "Sowing Stage",
        duration: "1 Week (Nov 1 - 15)",
        topics: [
            {
                title: "Method & Spacing",
                content: "**Drilling:** Use a seed-cum-fertilizer drill. Best method.\n**Spacing:** 20-22.5 cm between rows.\n**Depth:** 4-5 cm. Deep sowing delays emergence."
            }
        ]
    },
    {
        stage: 5,
        title: "Germination & Early Growth",
        duration: "10-15 Days",
        topics: [
            {
                title: "Emergence",
                content: "Coleoptile emerges in 5-7 days. Roots start developing. Protect seedlings from birds."
            },
            {
                title: "First Care",
                content: "Monitor for termite attack (patches of drying seedlings). No irrigation usually needed yet if pre-sowing moisture was good."
            }
        ]
    },
    {
        stage: 6,
        title: "Vegetative Growth (CRI & Tillering)",
        duration: "30-40 Days",
        topics: [
            {
                title: "CRI Irrigation (Critical)",
                content: "**Day 21:** Crown Root Initiation. Irrigate NOW. Delay reduces yield drastically."
            },
            {
                title: "Fertilizer & Weeding",
                content: "**Nitrogen:** Apply 1/2 of Urea dose as top dressing just before first irrigation.\n**Weeding:** Spray Clodinafop or Sulfosulfuron for grassy weeds at 30-35 days."
            }
        ]
    },
    {
        stage: 7,
        title: "Reproductive Stage",
        duration: "25-30 Days",
        topics: [
            {
                title: "Flowering",
                content: "Heads (spikes) emerge. Pollination occurs. Avoid water stress now. Irrigate at late jointing (45-50 days) and flowering (80-85 days)."
            },
            {
                title: "Protection",
                content: "Watch for **Rusts** (Yellow/Brown stripes). Spray Propiconazole if noticed. Warm/humid weather favors rust."
            }
        ]
    },
    {
        stage: 8,
        title: "Grain Filling & Maturity",
        duration: "25-30 Days",
        topics: [
            {
                title: "Milking to Dough",
                content: "Grain fills with starch. Irrigate at Milking stage (100 days). Stop irrigation when grains reach 'Hard Dough' stage (yellowing starts)."
            },
            {
                title: "Pest Watch",
                content: "Aphids may attack spikes. If severe, spray Imidacloprid. Birds can also damage ripening ears."
            }
        ]
    },
    {
        stage: 9,
        title: "Harvesting",
        duration: "7-10 Days",
        topics: [
            {
                title: "Signs",
                content: "Grains are hard (cut with teeth = sharp click). Moisture < 20%. Straw is dry and golden."
            },
            {
                title: "Method",
                content: "Manual sickle harvesting or Combine Harvester. Harvest during the cooler part of the day to reduce shattering."
            }
        ]
    },
    {
        stage: 10,
        title: "Post-Harvest Management",
        duration: "1-2 Weeks",
        topics: [
            {
                title: "Threshing & Drying",
                content: "Thresh immediately if manual. Dry grains in sun for 3-4 days to bring moisture to **10-12%**."
            },
            {
                title: "Storage",
                content: "Clean bins. Use new gunny bags. Place 'Pusa Bin' or use EDB ampoules for protection against weevils."
            }
        ]
    }
];

export const garlicSyllabus: ModuleStage[] = [
    {
        stage: 1,
        title: "Clove Selection",
        duration: "1 Week Before Planting",
        topics: [
            {
                title: "Variety Consideration",
                content: "For Karnataka/Maharashtra region, choose varieties like **Bhima Purple** (high yield), **Yamuna Safed-3 (G282)**, or **Gadag Local**. Avoid bulbs from cold regions if growing in warmer zones."
            },
            {
                title: "Selection Criteria",
                content: "Select healthy, large bulbs with >25 cloves. Separate cloves just before planting (do not peel). **Discard small/diseased cloves.** Use only outer, plump cloves for best yield."
            }
        ]
    },
    {
        stage: 2,
        title: "Land Preparation",
        duration: "2 Weeks",
        topics: [
            {
                title: "Soil Requirement",
                content: "Garlic loves **well-drained, loose organic soil**. Avoid heavy clays (causes misshapen bulbs). pH 6.0-7.5."
            },
            {
                title: "Preparation",
                content: "Deep ploughing followed by harrowing. Incorporate 10-15 tons of FYM/acre. Prepare flat beds or ridges/furrows (ridges are better for drainage)."
            }
        ]
    },
    {
        stage: 3,
        title: "Planting",
        duration: "1 Week (Oct-Nov)",
        topics: [
            {
                title: "Sowing Time",
                content: "**Rabi (Oct-Nov)** is best in India. Can also be grown in Kharif (June-July) in hills."
            },
            {
                title: "Method",
                content: "**Dibbling:** Plant cloves upright (tip up). Depth: 3-5 cm.\n**Spacing:** 15cm x 10cm.\n**Seed Rate:** 200-250 kg cloves/acre."
            }
        ]
    },
    {
        stage: 4,
        title: "Vegetative Growth",
        duration: "45-60 Days",
        topics: [
            {
                title: "Irrigation & Weeding",
                content: "Irrigate every 10-12 days. **Critical:** Keep field weed-free initially as garlic competes poorly. Use Pendimethalin (pre-emergence) if labor is scarce."
            },
            {
                title: "Fertilization",
                content: "Apply Nitrogen (Urea) in splits: 30 days and 45 days after planting. Sulphur is useful for pungency."
            }
        ]
    },
    {
        stage: 5,
        title: "Bulb Development",
        duration: "30-40 Days",
        topics: [
            {
                title: "Bulbing Initiation",
                content: "Occurs when days are longer and temp rises slightly. Roots cease growth. **Do not disturb roots** by deep hoeing now."
            }
        ]
    },
    {
        stage: 6,
        title: "Maturity",
        duration: "10-15 Days",
        topics: [
            {
                title: "Signs",
                content: "Leaves start turning yellow/brown from the top. The neck (stem above bulb) softens and bends. About 50% leaves should be brown."
            },
            {
                title: "Stop Irrigation",
                content: "Stop watering **2 weeks before harvest** to allow bulbs to firm up and skin to cure."
            }
        ]
    },
    {
        stage: 7,
        title: "Harvesting & Curing",
        duration: "1-2 Weeks",
        topics: [
            {
                title: "Harvest",
                content: "Pull out bulbs manually or use a digger. Do not bruise them."
            },
            {
                title: "Curing (Crucial)",
                content: "Dry bulbs in shade (with leaves attached) for 7-10 days. This seals the neck and increases shelf life. Cut tops 1 inch above bulb after curing."
            }
        ]
    }
];

export const lettuceSyllabus: ModuleStage[] = [
    {
        stage: 1,
        title: "Land Preparation",
        duration: "1 Week",
        topics: [
            {
                title: "Soil & Location",
                content: "Lettuce needs **fertile, humus-rich soil**. It likes cool weather. In Karnataka, best grown in winter or under shade nets. pH 6.0-7.0."
            },
            {
                title: "Bed Prep",
                content: "Add plenty of compost/vermicompost. Prepare raised beds to ensure good drainage."
            }
        ]
    },
    {
        stage: 2,
        title: "Direct Sowing",
        duration: "1-2 Days",
        topics: [
            {
                title: "Sowing",
                content: "Seeds are tiny. Mix with sand for even distribution. Sow in lines or broadcast. **Depth:** Very shallow (0.5 cm) - they need light to germinate."
            },
            {
                title: "Spacing",
                content: "Thin plants later to 20-30 cm apart (Head types) or 10-15 cm (Leaf types)."
            }
        ]
    },
    {
        stage: 3,
        title: "Germination",
        duration: "4-7 Days",
        topics: [
            {
                title: "Care",
                content: "Keep soil consistently moist but not soggy. Germination occurs in 4-10 days depending on temp (ideal 15-20°C)."
            }
        ]
    },
    {
        stage: 4,
        title: "Leaf Development",
        duration: "20-30 Days",
        topics: [
            {
                title: "Watering",
                content: "**Frequent & Shallow watering.** Lettuce has shallow roots. Stress causes bitter leaves."
            },
            {
                title: "Feeding",
                content: "Apply liquid organic fertilizer (Seaweed extract/Panchagavya) every 10 days for lush green growth."
            }
        ]
    },
    {
        stage: 5,
        title: "Harvesting",
        duration: "Ongoing",
        topics: [
            {
                title: "Methods",
                content: "**Leaf Lettuce:** 'Cut and Come Again' - harvest outer leaves, let center grow.\n**Head Lettuce:** Cut the whole head at base when solid."
            },
            {
                title: "Timing",
                content: "Harvest in **early morning** for maximum crispness."
            }
        ]
    }
];

// ... (previous syllabi)

export const maizeSyllabus: ModuleStage[] = [
    { stage: 1, title: "Planning & Hybrid Selection", duration: "2 Weeks Before Sowing", topics: [{ title: "Season", content: "**Kharif (June-July)** is main. Rabi (Oct-Nov) possible in irrigated areas." }, { title: "Varieties (Karnataka)", content: "Choose hybrids like **DKC 9089** (fast maturity), **DK 777**, or **Arjun**. For fodder, use African Tall." }] },
    { stage: 2, title: "Land Preparation", duration: "1-2 Weeks", topics: [{ title: "Tillage", content: "Plough 2-3 times to fine tilth. Apply 10 tons FYM/ha. Maize is sensitive to waterlogging, so good drainage is key." }] },
    { stage: 3, title: "Direct Sowing", duration: "2-3 Days", topics: [{ title: "Method", content: "Dibble seeds on ridges or use planter. Spacing: 60x20 cm. Seed Rate: 8-10 kg/acre." }] },
    { stage: 4, title: "Emergence", duration: "7-10 Days", topics: [{ title: "Germination", content: "Seeds sprout in 5-7 days. Fill gaps (gap filling) within 1 week if count is low." }] },
    { stage: 5, title: "Vegetative Growth", duration: "30-40 Days", topics: [{ title: "Knee High Stage", content: "Apply Top Dressing of Urea at knee-high stage (30 DAS). Do earthing up (soil mounting) to support roots." }] },
    { stage: 6, title: "Tasseling & Silking", duration: "10-15 Days", topics: [{ title: "Critical Stage", content: "Male flower (Tassel) and female (Silk) appear. Moisture stress now causes huge yield loss. Irrigate immediately." }] },
    { stage: 7, title: "Grain Development", duration: "25-30 Days", topics: [{ title: "Filling", content: "Kernels fill with starch. Protect from **Fall Armyworm** (major pest) using Emamectin Benzoate if needed." }] },
    { stage: 8, title: "Harvesting", duration: "Harvest", topics: [{ title: "Signs", content: "Harvest when husk turns yellow and grains are hard. Moisture ~20-25%." }] }
];

export const soybeanSyllabus: ModuleStage[] = [
    { stage: 1, title: "Planning & Soil Preparation", duration: "2 Weeks", topics: [{ title: "Deep Ploughing", content: "Deep plough once in 3 years. Soybeans love Vertisols (Black Soil). In Karnataka, **JS 335** and **DSb 21** are popular varieties." }] },
    { stage: 2, title: "Sowing", duration: "June-July", topics: [{ title: "Seed Treatment", content: "Treat with Rhizobium culture (nitrogen fixing). Rate: 25-30 kg/acre. Spacing: 30x10 cm." }] },
    { stage: 3, title: "Germination", duration: "7-10 Days", topics: [{ title: "Cotyledons", content: "Emergence happens quickly. Protect from birds. Ensure soil moisture." }] },
    { stage: 4, title: "Vegetative Growth", duration: "30-35 Days", topics: [{ title: "Weeding", content: "Critical weed-free period is first 35 days. Hand weed or use Imazethapyr." }] },
    { stage: 5, title: "Flowering", duration: "10-15 Days", topics: [{ title: "Bloom", content: "Pink/Purple flowers appear. Flower drop is common if stressed. Irrigate if dry spell occurs." }] },
    { stage: 6, title: "Pod Formation", duration: "20-25 Days", topics: [{ title: "Pod Setting", content: "Pods develop from flowers. Watch for **Pod Borer**. Spray Chlorpyriphos if damage exceeds ETL." }] },
    { stage: 7, title: "Maturity & Harvest", duration: "Harvest", topics: [{ title: "Yellowing", content: "Leaves turn yellow and drop. Pods turn brown/black. Harvest when seed moisture is 15%. Do not delay or pods will shatter." }] }
];

export const chickpeaSyllabus: ModuleStage[] = [
    { stage: 1, title: "Planning (Rabi)", duration: "Sep-Oct", topics: [{ title: "Varieties", content: "**JG-11**, **JAKI-9218** (Desi), **MNK-1** (Kabuli). Chickpea needs cool climate." }] },
    { stage: 2, title: "Land Preparation", duration: "1 Week", topics: [{ title: "Seedbed", content: "Rough seedbed is fine. Good aeration is needed." }] },
    { stage: 3, title: "Sowing", duration: "Oct-Nov", topics: [{ title: "Depth", content: "Sow deep (10cm) to use residual moisture. Rate: 25-30 kg/acre." }] },
    { stage: 4, title: "Vegetative Growth", duration: "30-40 Days", topics: [{ title: "Nipping", content: "Pluck apical buds at 30 days to encourage branching using hands or sheep grazing." }] },
    { stage: 5, title: "Flowering", duration: "15-20 Days", topics: [{ title: "Pod Borer", content: "**Helicoverpa** is the main enemy. Use Pheromone traps. Spray Quinalphos." }] },
    { stage: 6, title: "Pod Development", duration: "25-30 Days", topics: [{ title: "Filling", content: "Pods fill with grains. Avoid overhead irrigation during flowering." }] },
    { stage: 7, title: "Harvest", duration: "Feb-March", topics: [{ title: "Drying", content: "Harvest when plants dry and turn brown. Thresh by beating with sticks." }] }
];

export const cottonSyllabus: ModuleStage[] = [
    { stage: 1, title: "Planning & Hybrid Selection", duration: "May", topics: [{ title: "Hybrids", content: "Bt Cotton is dominant. Hybrids like **DCH-32** (inter-specific) are famous in Karnataka." }] },
    { stage: 2, title: "Land Preparation", duration: "2 Weeks", topics: [{ title: "Black Soil", content: "Grows best in Deep Black Cotton Soils. Plough deep to break hard pans." }] },
    { stage: 3, title: "Sowing", duration: "June-July", topics: [{ title: "Dibbling", content: "Dibble seeds at 90x60 cm or 120x60 cm. Pre-monsoon dry sowing is practiced in some areas." }] },
    { stage: 4, title: "Vegetative Growth", duration: "40-50 Days", topics: [{ title: "Gap Filling", content: "Fill gaps within 10 days. Thinning: Keep only 1 healthy plant per hill at 20 days." }] },
    { stage: 5, title: "Square Formation", duration: "20-25 Days", topics: [{ title: "Squares", content: "Flower buds (Squares) appear. Sucking pests (Jassids, Thrips) attack now. Spray Imidacloprid." }] },
    { stage: 6, title: "Flowering", duration: "20-30 Days", topics: [{ title: "Bloom", content: "Creamy white flowers turn pink next day. High nutrient demand." }] },
    { stage: 7, title: "Boll Development", duration: "40-50 Days", topics: [{ title: "Bollworm", content: "Bt cotton controls Bollworm, but monitor **Pink Bollworm**. Pheromone traps are essential." }] },
    { stage: 8, title: "Multiple Harvests", duration: "Nov-Feb", topics: [{ title: "Picking", content: "Pick fully burst bolls in morning. Keep seed cotton free from dry leaves. 3-4 pickings usually done." }] }
];

export const sugarcaneSyllabus: ModuleStage[] = [
    { stage: 1, title: "Planning & Selection", duration: "Jan-Feb", topics: [{ title: "Varieties", content: "**Co 86032** (Wonder cane), **CoC 671**, **SNK 814**. High sugar recovery varieties." }] },
    { stage: 2, title: "Land Preparation", duration: "3 Weeks", topics: [{ title: "Deep Digging", content: "Plough 45cm deep. Make ridges and furrows at 4-5 feet distance." }] },
    { stage: 3, title: "Sett Planting", duration: "Planting", topics: [{ title: "Setts", content: "Use 2-3 bud setts. Treat with Carbendazim. Place in furrows and cover lightly." }] },
    { stage: 4, title: "Germination", duration: "30-40 Days", topics: [{ title: "Sprouting", content: "Buds sprout. Irrigate lightly. Fill gaps with pre-germinated setts." }] },
    { stage: 5, title: "Tillering", duration: "3-4 Months", topics: [{ title: "Formative", content: "Max tillers form now. Apply heavy Nitrogen dose. Partial earthing up." }] },
    { stage: 6, title: "Grand Growth", duration: "3-4 Months", topics: [{ title: "Elongation", content: "Canes grow tall. **Detrashing** (remove dry leaves) is MUST. Propping (tying canes together) prevents lodging." }] },
    { stage: 7, title: "Maturity", duration: "10-12 Months", topics: [{ title: "Ripening", content: "Growth stops, sucrose accumulation starts. Withhold water 15 days before harvest." }] },
    { stage: 8, title: "Harvesting", duration: "Harvest", topics: [{ title: "Cutting", content: "Cut at ground level (sugar is highest at base). Transport to mill within 24 hours." }] }
];

// ... (previous field crops)

export const potatoSyllabus: ModuleStage[] = [
    { stage: 1, title: "Seed Tuber Selection", duration: "2 Weeks", topics: [{ title: "Varieties", content: "**Kufri Jyoti** (Hills), **Kufri Pukhraj**. Select disease-free tubers ~40-50g size." }] },
    { stage: 2, title: "Land Preparation", duration: "2 Weeks", topics: [{ title: "Soil", content: "Deep loose soil is best. Apply FYM. Make ridges spaced 60cm." }] },
    { stage: 3, title: "Planting", duration: "Rabi/Kharif", topics: [{ title: "Method", content: "Plant tubers 5cm deep on ridges. 20cm plant-to-plant." }] },
    { stage: 4, title: "Sprouting", duration: "10-15 Days", topics: [{ title: "Emergence", content: "Shoots emerge. Apply pre-emergence herbicide Metribuzin." }] },
    { stage: 5, title: "Vegetative Growth", duration: "30-40 Days", topics: [{ title: "Earthing Up", content: "Cover tubers with soil to prevent greening (solanine). Apply fertilizer." }] },
    { stage: 6, title: "Tuber Initiation", duration: "40-50 Days", topics: [{ title: "Critical Water", content: "Tubers start forming at stolon tips. Moisture stress now reduces yield." }] },
    { stage: 7, title: "Bulking", duration: "50-80 Days", topics: [{ title: "Expansion", content: "Tubers grow rapidly. Late Blight disease is a risk; spray Mancozeb." }] },
    { stage: 8, title: "Harvest", duration: "90-120 Days", topics: [{ title: "Dehaulming", content: "Cut haulms (stems) 10 days before harvest to harden skin. Dig tubers carefully." }] }
];

export const onionSyllabus: ModuleStage[] = [
    { stage: 1, title: "Nursery Preparation", duration: "30-40 Days", topics: [{ title: "Seedlings", content: "Raise seedlings in raised beds. Variety: **Arka Kalyan**, **Bhima Super**. Seed rate: 3-4 kg/acre." }] },
    { stage: 2, title: "Transplanting", duration: "Day 0", topics: [{ title: "Spacing", content: "Transplant 6-week old seedlings. Spacing: 15x10 cm. Dip roots in Carbendazim." }] },
    { stage: 3, title: "Vegetative Growth", duration: "30-50 Days", topics: [{ title: "Weeding", content: "Onion has poor root system. Weed competition is fatal. Apply Oxyfluorfen EC." }] },
    { stage: 4, title: "Bulb Initiation", duration: "50-60 Days", topics: [{ title: "Trigger", content: "Bulbing starts. Do not apply Nitrogen after this stage (causes thick neck)." }] },
    { stage: 5, title: "Bulb Enlargement", duration: "60-90 Days", topics: [{ title: "Watering", content: "Regular irrigation essential for size. Thrips cause 'silvery patches' - control them." }] },
    { stage: 6, title: "Maturity", duration: "100-110 Days", topics: [{ title: "Neck Fall", content: "Stop irrigation when 50% plants show 'Neck Fall' (tops collapse)." }] },
    { stage: 7, title: "Harvesting", duration: "Harvest", topics: [{ title: "Curing", content: "Pull bulbs. Cure in field for 3-4 days (cover bulbs with leaves to prevent sunscald)." }] }
];

export const tomatoSyllabus: ModuleStage[] = [
    { stage: 1, title: "Nursery Raising", duration: "25 Days", topics: [{ title: "Hybrids", content: "**Arka Rakshak** (Tri-disease resistant), **Arka Samrat**. Raise pro-tray seedlings." }] },
    { stage: 2, title: "Transplanting", duration: "Day 0", topics: [{ title: "Mainfield", content: "Transplant in evening. Spacing: 90x60 cm. Stake plants (support) for indeterminate types." }] },
    { stage: 3, title: "Vegetative Growth", duration: "30 Days", topics: [{ title: "Pruning", content: "Remove side shoots (suckers) for single stem training in hybrids." }] },
    { stage: 4, title: "Flowering", duration: "30-45 Days", topics: [{ title: "Pollination", content: "yellow flowers appear. High temp (>35C) causes flower drop." }] },
    { stage: 5, title: "Fruit Setting", duration: "45-60 Days", topics: [{ title: "Berry", content: "Green fruits form. Blossom End Rot (calcium deficiency) is common - spray Calcium Chloride." }] },
    { stage: 6, title: "Fruit Development", duration: "60+ Days", topics: [{ title: "Ripening", content: "Fruits turn from Green -> Breaker -> Red. Fruit Borer is major pest." }] },
    { stage: 7, title: "Multiple Harvests", duration: "60-120 Days", topics: [{ title: "Picking", content: "Harvest at 'Breaker' stage for distant market, 'Red' for local." }] }
];

export const turmericSyllabus: ModuleStage[] = [
    { stage: 1, title: "Rhizome Selection", duration: "April-May", topics: [{ title: "Seed", content: "Use mother rhizomes. Varieties: **Pratibha**, **IISR Alleppey Supreme**." }] },
    { stage: 2, title: "Land Preparation", duration: "May", topics: [{ title: "Beds", content: "Prepare raised beds. Apply huge organic manure (25 tons/ha)." }] },
    { stage: 3, title: "Planting", duration: "May-June", topics: [{ title: "Sowing", content: "Plant rhizomes 5cm deep. Mulch immediately with green leaves (15 tons/ha total)." }] },
    { stage: 4, title: "Sprouting", duration: "20-30 Days", topics: [{ title: "Emergence", content: "Sprouts emerge. Pre-monsoon showers help." }] },
    { stage: 5, title: "Vegetative Growth", duration: "3-5 Months", topics: [{ title: "Care", content: "Apply second mulching at 45 days after weeding and fertilizing." }] },
    { stage: 6, title: "Rhizome Dev", duration: "5-7 Months", topics: [{ title: "Bulking", content: "Rhizomes expand horizontally. Loose soil is critical." }] },
    { stage: 7, title: "Maturity", duration: "8-9 Months", topics: [{ title: "Yellowing", content: "Leaves dry up completely. Crop ready." }] },
    { stage: 8, title: "Harvest & Process", duration: "Jan-March", topics: [{ title: "Boiling", content: "Dig rhizomes. Boil in water for 45 mins (curing) then dry for 10-15 days." }] }
];

export const gingerSyllabus: ModuleStage[] = [
    { stage: 1, title: "Rhizome Selection", duration: "April", topics: [{ title: "Variety", content: "**IISR Varada**, **Mahima**. Select plump, disease-free rhizomes (20-25g bits)." }] },
    { stage: 2, title: "Land Preparation", duration: "May", topics: [{ title: "Solarization", content: "Solarize soil (cover with plastic) to kill Rhizome Rot fungus (Pythium)." }] },
    { stage: 3, title: "Planting", duration: "May", topics: [{ title: "Ridges", content: "Plant on raised beds. Avoid water logging at all costs. Mulch immediately." }] },
    { stage: 4, title: "Sprouting", duration: "20-25 Days", topics: [{ title: "Care", content: "Remove weeds carefully. Do not disturb seed rhizome." }] },
    { stage: 5, title: "Vegetative Growth", duration: "2-4 Months", topics: [{ title: "Soft Rot", content: "Watch for yellowing leaves (Soft Rot). Drench Copper Oxychloride." }] },
    { stage: 6, title: "Rhizome Bulking", duration: "5-8 Months", topics: [{ title: "Filling", content: "Rhizomes grow. Apply N and K fertilizers." }] },
    { stage: 7, title: "Harvesting", duration: "8-9 Months", topics: [{ title: "Dry Ginger", content: "Harvest when leaves dry fully for Dry Ginger. For vegetable ginger, harvest at 6 months." }] }
];

export const chilliSyllabus: ModuleStage[] = [
    { stage: 1, title: "Nursery Raising", duration: "35-40 Days", topics: [{ title: "Varieties", content: "**Byadgi** (Color), **Guntur** (Pungency), **Arka Lohit**. Prevent damping off in nursery." }] },
    { stage: 2, title: "Transplanting", duration: "Day 0", topics: [{ title: "Planting", content: "Transplant 40-day seedlings. Spacing: 75x45 cm. Dip in Imidacloprid." }] },
    { stage: 3, title: "Vegetative Growth", duration: "30-40 Days", topics: [{ title: "Leaf Curl", content: "Control Thrips and Mites using sticky traps and Neem oil to prevent Leaf Curl Virus." }] },
    { stage: 4, title: "Flowering", duration: "40-50 Days", topics: [{ title: "Bloom", content: "White flowers. Apply Planofix to reduce flower drop." }] },
    { stage: 5, title: "Fruit Development", duration: "50-70 Days", topics: [{ title: "Green to Red", content: "Fruits lengthen and turn red. Fruit Borer attack possible." }] },
    { stage: 6, title: "Multiple Pickings", duration: "75+ Days", topics: [{ title: "Harvest", content: "Pick Green Chilli at 75 days. Red Chilli: Allow to dry on plant partially." }] }
];

export const getModuleSyllabus = (id: string): ModuleStage[] => {
    const map: Record<string, ModuleStage[]> = {
        rice: riceSyllabus,
        wheat: wheatSyllabus,
        garlic: garlicSyllabus,
        lettuce: lettuceSyllabus,
        maize: maizeSyllabus,
        soya: soybeanSyllabus,
        chickpea: chickpeaSyllabus,
        cotton: cottonSyllabus,
        sugarcane: sugarcaneSyllabus,
        potato: potatoSyllabus,
        onion: onionSyllabus,
        tomato: tomatoSyllabus,
        turmeric: turmericSyllabus,
        ginger: gingerSyllabus,
        chilli: chilliSyllabus
    };
    return map[id] || [];
};

export const getModuleContent = (id: string, stage: number) => {
    const syllabus = getModuleSyllabus(id);
    return syllabus.find(s => s.stage === stage) || null;
};
