export interface Module {
    id: string;
    title: string;
    category: 'short-term' | 'mid-term' | 'long-term';
    duration: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    description: string;
    image: string;
    scientificName?: string;
    soilType?: string;
    waterRequirements?: string;
    harvestTime?: string;
}

export const cropModules: Module[] = [
    // CEREALS & GRAINS
    {
        id: 'rice',
        title: 'Rice Cultivation',
        category: 'mid-term',
        duration: '105-150 Days',
        difficulty: 'Advanced',
        description: 'Master the art of paddy farming. Requires wetland conditions and precise water management.',
        image: '/images/crop_rice_harvest.png',
        scientificName: 'Oryza sativa',
        soilType: 'Clay or Clay Loam',
        waterRequirements: 'High (Submerged)',
        harvestTime: 'When 80% grains turn golden'
    },
    {
        id: 'wheat',
        title: 'Wheat Farming',
        category: 'mid-term',
        duration: '100-120 Days',
        difficulty: 'Intermediate',
        description: 'A staple winter crop. Learn about temperature sensitivity and harvesting perfection.',
        image: '/images/crop_wheat.jpg',
        scientificName: 'Triticum aestivum',
        soilType: 'Loam or Clay Loam',
        waterRequirements: 'Moderate',
        harvestTime: 'Spring / Early Summer'
    },
    {
        id: 'maize',
        title: 'Maize (Corn)',
        category: 'mid-term',
        duration: '60-100 Days',
        difficulty: 'Beginner',
        description: 'Versatile crop for food and fodder. fast growing and high yield potential.',
        image: '/images/crop_maize.jpg',
        scientificName: 'Zea mays',
        soilType: 'Well-drained Loam',
        waterRequirements: 'Moderate',
        harvestTime: 'Late Summer'
    },

    // PULSES & LEGUMES
    {
        id: 'soya',
        title: 'Soybean',
        category: 'short-term',
        duration: '85-110 Days',
        difficulty: 'Intermediate',
        description: 'Protein-rich legume that improves soil health via nitrogen fixation.',
        image: '/images/crop_soya_1770352786703.png',
        scientificName: 'Glycine max',
        soilType: 'Loose, well-drained loam',
        waterRequirements: 'Moderate',
        harvestTime: 'Autumn'
    },
    {
        id: 'chickpea',
        title: 'Chickpea (Gram)',
        category: 'mid-term',
        duration: '90-110 Days',
        difficulty: 'Beginner',
        description: 'Drought-tolerant pulse crop ideal for dry seasons.',
        image: '/images/crop_chickpea.png',
        scientificName: 'Cicer arietinum',
        soilType: 'Sandy Loam',
        waterRequirements: 'Low',
        harvestTime: 'Late Winter'
    },

    // CASH CROPS
    {
        id: 'cotton',
        title: 'Cotton',
        category: 'long-term',
        duration: '150-180 Days',
        difficulty: 'Advanced',
        description: 'The white gold. Requires careful pest management (bollworm) and dry harvesting weather.',
        image: '/images/crop_cotton.png',
        scientificName: 'Gossypium',
        soilType: 'Black Soil (Regur)',
        waterRequirements: 'Moderate',
        harvestTime: 'Late Autumn'
    },
    {
        id: 'sugarcane',
        title: 'Sugarcane',
        category: 'long-term',
        duration: '10-18 Months',
        difficulty: 'Intermediate',
        description: 'Long duration commercial crop. High water and nutrient input required.',
        image: '/images/crop_sugarcane_harvest.png',
        scientificName: 'Saccharum officinarum',
        soilType: 'Deep rich loamy soil',
        waterRequirements: 'Very High',
        harvestTime: 'Winter'
    },

    // VEGETABLES & TUBERS
    {
        id: 'potato',
        title: 'Potato',
        category: 'short-term',
        duration: '90-110 Days',
        difficulty: 'Beginner',
        description: 'World\'s favorite tuber. Needs loose soil for tuber expansion.',
        image: '/images/crop_potato.png',
        scientificName: 'Solanum tuberosum',
        soilType: 'Loose Sandy Loam',
        waterRequirements: 'Moderate',
        harvestTime: 'Cycle dependent'
    },
    {
        id: 'onion',
        title: 'Onion',
        category: 'mid-term',
        duration: '100-140 Days',
        difficulty: 'Intermediate',
        description: 'High value crop but sensitive to storage conditions and moisture.',
        image: '/images/crop_onion.jpg',
        scientificName: 'Allium cepa',
        soilType: 'Sandy Loam',
        waterRequirements: 'Frequent',
        harvestTime: 'Late Spring'
    },
    {
        id: 'tomato',
        title: 'Tomato',
        category: 'mid-term',
        duration: '60-80 Days',
        difficulty: 'Intermediate',
        description: 'Grow juicy, flavorful tomatoes. Covers staking, pruning, and pest management.',
        image: '/images/crop_tomato.png',
        scientificName: 'Solanum lycopersicum',
        soilType: 'Loam',
        waterRequirements: 'Regular',
        harvestTime: 'Continuous'
    },

    // SPICES
    {
        id: 'turmeric',
        title: 'Turmeric',
        category: 'long-term',
        duration: '7-9 Months',
        difficulty: 'Beginner',
        description: 'Hardy spice crop with medicinal value. Low maintenance but long gestation.',
        image: '/images/crop_turmeric.png',
        scientificName: 'Curcuma longa',
        soilType: 'Red Loamy Soil',
        waterRequirements: 'Moderate',
        harvestTime: 'Winter'
    },
    {
        id: 'ginger',
        title: 'Ginger',
        category: 'long-term',
        duration: '8-10 Months',
        difficulty: 'Intermediate',
        description: 'Shade-loving spice crop. Great for intercropping in orchards.',
        image: '/images/crop_ginger.png',
        scientificName: 'Zingiber officinale',
        soilType: 'Sandy Loamy',
        waterRequirements: 'High Humidity',
        harvestTime: 'Winter'
    },
    {
        id: 'chilli',
        title: 'Chilli Pepper',
        category: 'short-term',
        duration: '90-120 Days',
        difficulty: 'Intermediate',
        description: 'Spicy cash crop. Prone to leaf curl virus, requires vigilance.',
        image: '/images/crop_chilli.png',
        scientificName: 'Capsicum annuum',
        soilType: 'Black or Loamy',
        waterRequirements: 'Moderate',
        harvestTime: 'Summer/Autumn'
    },
    {
        id: 'garlic',
        title: 'Garlic',
        category: 'long-term',
        duration: '4-5 Months',
        difficulty: 'Beginner',
        description: 'Plant cloves in fall for a summer harvest. Very low maintenance.',
        image: '/images/crop_garlic.jpg',
        scientificName: 'Allium sativum',
        soilType: 'Well drained',
        waterRequirements: 'Low',
        harvestTime: 'Summer'
    },
    {
        id: 'lettuce',
        title: 'Lettuce & Greens',
        category: 'short-term',
        duration: '30-45 Days',
        difficulty: 'Beginner',
        description: 'Perfect for quick harvests. Learn to grow crisp lettuce, spinach, and kale.',
        image: '/images/crop_lettuce.jpg',
        scientificName: 'Lactuca sativa',
        soilType: 'Humus rich',
        waterRequirements: 'Regular',
        harvestTime: 'All season'
    }];

export const urbanModules = [
    {
        id: 'hydroponics-101',
        title: 'Hydroponics Mastery',
        description: 'Soil-less farming for apartments. Save 90% water.',
        icon: 'water',
        image: '/images/tech_hydroponics_1770352803412.png',
        steps: [
            'Setup NFT (Nutrient Film Technique) channels.',
            'Mix hydroponic nutrient solution A & B.',
            'Maintain pH levels between 5.5 and 6.5.',
            'Monitor EC (Electrical Conductivity) daily.'
        ]
    },
    {
        id: 'aeroponics-pro',
        title: 'Aeroponics Professional',
        description: 'Mist-based nutrition for rapid growth and maximum oxygen.',
        icon: 'wind',
        image: '/images/tech_aeroponics_1770352820128.png',
        steps: [
            'Install high-pressure misting nozzles.',
            'Set timer for 5 sec mist / 5 min pause intervals.',
            'Ensure roots hang freely in dark chamber.',
            'Keep strict sterility to prevent root rot.'
        ]
    },
    {
        id: 'vertical-mushrooms',
        title: 'Vertical Mushroom Farming',
        description: 'High-yield fungi cultivation in dark, small spaces.',
        icon: 'mushroom',
        image: '/images/crop_mushroom.png',
        steps: [
            'Prepare substrate (straw/sawdust) and sterilize.',
            'Inoculate with mushroom spawn.',
            'Maintain high humidity (85-95%) and low light.',
            'Harvest flushes every few weeks.'
        ]
    }
];
