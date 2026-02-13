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
    },
    {
        id: 'groundnut',
        title: 'Groundnut (Peanut)',
        category: 'short-term',
        duration: '4-5 months',
        difficulty: 'Beginner',
        description: 'Learn to grow groundnuts — a protein-rich oilseed crop ideal for semi-arid regions.',
        image: '/images/crop_groundnut.png',
        scientificName: 'Arachis hypogaea',
        soilType: 'Sandy loam',
        waterRequirements: 'Moderate',
        harvestTime: 'Kharif'
    },
    {
        id: 'mustard',
        title: 'Mustard',
        category: 'short-term',
        duration: '4-5 months',
        difficulty: 'Beginner',
        description: 'Cultivate mustard for oil and spice. A vibrant Rabi crop that turns fields golden yellow.',
        image: '/images/crop_mustard.png',
        scientificName: 'Brassica juncea',
        soilType: 'Loamy',
        waterRequirements: 'Low',
        harvestTime: 'Rabi'
    },
    {
        id: 'sunflower',
        title: 'Sunflower',
        category: 'short-term',
        duration: '3-4 months',
        difficulty: 'Beginner',
        description: 'Grow sunflowers for oilseed production and beautiful farm landscapes.',
        image: '/images/crop_sunflower.jpg',
        scientificName: 'Helianthus annuus',
        soilType: 'Well-drained loam',
        waterRequirements: 'Moderate',
        harvestTime: 'Kharif / Rabi'
    },
    {
        id: 'banana',
        title: 'Banana',
        category: 'mid-term',
        duration: '10-12 months',
        difficulty: 'Intermediate',
        description: 'Master banana cultivation — from tissue culture planting to bunch harvesting.',
        image: '/images/crop_banana.png',
        scientificName: 'Musa spp.',
        soilType: 'Rich loamy',
        waterRequirements: 'High',
        harvestTime: 'Year-round'
    },
    {
        id: 'brinjal',
        title: 'Brinjal (Eggplant)',
        category: 'short-term',
        duration: '3-4 months',
        difficulty: 'Beginner',
        description: 'Cultivate brinjal — one of India\'s most popular and versatile vegetables.',
        image: '/images/crop_brinjal.png',
        scientificName: 'Solanum melongena',
        soilType: 'Well-drained loam',
        waterRequirements: 'Moderate',
        harvestTime: 'All season'
    },
    {
        id: 'cucumber',
        title: 'Cucumber',
        category: 'short-term',
        duration: '2-3 months',
        difficulty: 'Beginner',
        description: 'Fast-growing vine crop perfect for kitchen gardens and commercial farming alike.',
        image: '/images/crop_cucumber.png',
        scientificName: 'Cucumis sativus',
        soilType: 'Sandy loam',
        waterRequirements: 'Moderate',
        harvestTime: 'Summer / Kharif'
    },
    {
        id: 'watermelon',
        title: 'Watermelon',
        category: 'short-term',
        duration: '3-4 months',
        difficulty: 'Intermediate',
        description: 'Grow juicy watermelons in sandy riverbed soils. High demand in summer months.',
        image: '/images/crop_watermelon.jpg',
        scientificName: 'Citrullus lanatus',
        soilType: 'Sandy',
        waterRequirements: 'Moderate',
        harvestTime: 'Summer'
    },
    {
        id: 'mango',
        title: 'Mango',
        category: 'long-term',
        duration: '3-6 years (first fruit)',
        difficulty: 'Advanced',
        description: 'The king of fruits. Learn mango orchard management from grafting to export-quality harvesting.',
        image: '/images/crop_mango.jpg',
        scientificName: 'Mangifera indica',
        soilType: 'Deep alluvial',
        waterRequirements: 'Moderate',
        harvestTime: 'Summer'
    },
    {
        id: 'coffee',
        title: 'Coffee',
        category: 'long-term',
        duration: '3-4 years (first harvest)',
        difficulty: 'Advanced',
        description: 'Shade-grown coffee cultivation — from seedling to cup, master the plantation art.',
        image: '/images/crop_coffee.jpg',
        scientificName: 'Coffea arabica',
        soilType: 'Red laterite',
        waterRequirements: 'Moderate',
        harvestTime: 'Nov-Feb'
    },
    {
        id: 'tea',
        title: 'Tea',
        category: 'long-term',
        duration: '3-5 years (first pluck)',
        difficulty: 'Advanced',
        description: 'Learn tea cultivation — from nursery management to processing premium leaf grades.',
        image: '/images/crop_tea.jpg',
        scientificName: 'Camellia sinensis',
        soilType: 'Acidic loam',
        waterRequirements: 'High',
        harvestTime: 'Mar-Nov'
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
    },
    {
        id: 'terrace-kitchen-garden',
        title: 'Terrace Kitchen Garden',
        description: 'Grow fresh herbs and vegetables on your rooftop or balcony all year round.',
        icon: 'home',
        image: '/images/urban_terrace_garden.png',
        steps: [
            'Set up raised beds or grow bags on your terrace.',
            'Choose compact varieties — cherry tomato, chilli, coriander, mint.',
            'Use a compost bin to recycle kitchen waste into fertilizer.',
            'Install drip irrigation for consistent watering.'
        ]
    },
    {
        id: 'aquaponics-system',
        title: 'Aquaponics System',
        description: 'Combine fish farming with plant growing in a self-sustaining ecosystem.',
        icon: 'fish',
        image: '/images/urban_aquaponics.png',
        steps: [
            'Set up a fish tank with tilapia or goldfish.',
            'Connect grow beds above the tank with a water pump.',
            'Fish waste provides nitrogen; plants filter water for fish.',
            'Monitor ammonia, nitrite, and nitrate levels weekly.'
        ]
    },
    {
        id: 'container-fruit-farming',
        title: 'Container Fruit Farming',
        description: 'Grow dwarf fruit trees in pots — perfect for patios and balconies.',
        icon: 'apple',
        image: '/images/urban_container_fruit.png',
        steps: [
            'Select dwarf varieties — lemon, guava, pomegranate, fig.',
            'Use 18-24 inch containers with well-draining soil mix.',
            'Apply balanced NPK fertilizer every 2 weeks during fruiting.',
            'Prune regularly to maintain shape and improve air circulation.'
        ]
    },
    {
        id: 'microgreens-indoor',
        title: 'Microgreens & Sprouts',
        description: 'Harvest nutrient-dense greens in just 7-14 days from your kitchen counter.',
        icon: 'sprout',
        image: '/images/urban_microgreens.png',
        steps: [
            'Spread seeds densely on a shallow tray with moist coco peat.',
            'Cover for 2-3 days (blackout phase) for germination.',
            'Uncover and expose to indirect sunlight; mist daily.',
            'Harvest at 2-3 inches — use sunflower, radish, pea, or mustard seeds.'
        ]
    },
    {
        id: 'vertical-tower-garden',
        title: 'Vertical Tower Garden',
        description: 'Stack plants vertically using PVC towers to grow 50+ plants in 4 sq ft.',
        icon: 'tower',
        image: '/images/urban_vertical_tower.png',
        steps: [
            'Build or buy a vertical tower with 20-30 planting pockets.',
            'Fill with lightweight grow media (perlite + coco coir).',
            'Plant herbs, lettuce, strawberries, or small peppers.',
            'Use a timer-based drip system to water from the top down.'
        ]
    },
    {
        id: 'rooftop-beekeeping',
        title: 'Rooftop Bee Keeping',
        description: 'Support pollination and harvest fresh honey from urban beehives.',
        icon: 'bee',
        image: '/images/urban_rooftop_beekeeping.png',
        steps: [
            'Place hive boxes on a shaded, elevated area of your rooftop.',
            'Source a bee colony (Apis cerana or Apis mellifera) from a local apiary.',
            'Inspect hives every 10 days for queen health and pests.',
            'Harvest honey frames when 80% capped; extract using a centrifuge.'
        ]
    }
];
