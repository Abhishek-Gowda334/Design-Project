"use client";

import { cropModules } from '@/data/modules';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { notFound, useParams } from 'next/navigation';
import { Clock, BarChart, BookOpen, CheckCircle, Sprout, CloudRain, Calendar, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import styles from './page.module.css';

// Crop-specific syllabus content
const syllabusData: Record<string, { week: string; title: string; topics: string[] }[]> = {
    rice: [
        { week: 'Week 1', title: 'Land Preparation', topics: ['Puddling & levelling', 'Water channel setup', 'Nursery bed preparation'] },
        { week: 'Week 2', title: 'Seed Selection & Sowing', topics: ['Variety selection (IR-64, Basmati)', 'Seed treatment', 'Transplanting techniques'] },
        { week: 'Week 3', title: 'Water & Nutrient Management', topics: ['Flooding schedule', 'NPK fertilizer dosing', 'Organic manure application'] },
        { week: 'Week 4', title: 'Pest & Disease Control', topics: ['Stem borer management', 'Blast disease identification', 'Integrated pest management (IPM)'] },
        { week: 'Week 5', title: 'Weed Management', topics: ['Pre-emergence herbicides', 'Manual weeding', 'Cono-weeder usage'] },
        { week: 'Week 6', title: 'Harvesting & Post-Harvest', topics: ['Maturity signs (80% golden grain)', 'Combine harvester vs manual', 'Drying, milling & storage'] },
    ],
    wheat: [
        { week: 'Week 1', title: 'Soil Preparation', topics: ['Deep ploughing', 'Soil testing & pH adjustment', 'Levelling for uniform irrigation'] },
        { week: 'Week 2', title: 'Seed & Sowing', topics: ['Variety selection (HD-2967, PBW-343)', 'Seed drill techniques', 'Optimal sowing depth & spacing'] },
        { week: 'Week 3', title: 'Irrigation & Nutrition', topics: ['Critical irrigation stages', 'Urea top-dressing schedule', 'Micronutrient spray (Zinc, Iron)'] },
        { week: 'Week 4', title: 'Disease Management', topics: ['Rust disease identification', 'Karnal bunt prevention', 'Fungicide application timing'] },
        { week: 'Week 5', title: 'Weed Control', topics: ['Phalaris minor control', 'Herbicide selection', 'Manual vs chemical weeding'] },
        { week: 'Week 6', title: 'Harvesting & Storage', topics: ['Moisture content testing', 'Combine operation', 'Grain storage best practices'] },
    ],
    maize: [
        { week: 'Week 1', title: 'Field Preparation', topics: ['Soil aeration & tilling', 'Ridge and furrow method', 'FYM application'] },
        { week: 'Week 2', title: 'Planting', topics: ['Hybrid seed selection', 'Spacing (60cm × 20cm)', 'Seed treatment with fungicide'] },
        { week: 'Week 3', title: 'Growth Management', topics: ['Thinning & gap filling', 'Earthing up', 'Nitrogen side-dressing'] },
        { week: 'Week 4', title: 'Pest Control', topics: ['Fall armyworm management', 'Stem borer traps', 'Biological control agents'] },
        { week: 'Week 5', title: 'Harvesting', topics: ['Cob maturity indicators', 'Manual vs mechanical harvest', 'Drying & shelling'] },
    ],
    soya: [
        { week: 'Week 1', title: 'Pre-Sowing', topics: ['Inoculation with Rhizobium', 'Seed treatment', 'Land preparation'] },
        { week: 'Week 2', title: 'Sowing & Spacing', topics: ['Row spacing (45cm)', 'Depth of sowing', 'Intercropping options'] },
        { week: 'Week 3', title: 'Crop Management', topics: ['Weed control', 'Irrigation scheduling', 'Pest scouting'] },
        { week: 'Week 4', title: 'Harvest & Processing', topics: ['Pod maturity signs', 'Threshing methods', 'Oil extraction basics'] },
    ],
    chickpea: [
        { week: 'Week 1', title: 'Land & Seed Prep', topics: ['Dry-land preparation', 'Rhizobium inoculation', 'Variety selection (Desi vs Kabuli)'] },
        { week: 'Week 2', title: 'Sowing', topics: ['Optimal sowing time', 'Spacing & depth', 'Starter fertilizer'] },
        { week: 'Week 3', title: 'Crop Care', topics: ['Minimal irrigation strategy', 'Wilt disease management', 'Pod borer control'] },
        { week: 'Week 4', title: 'Harvesting', topics: ['Plant drying indicators', 'Uprooting & threshing', 'Storage (dal processing)'] },
    ],
    cotton: [
        { week: 'Week 1', title: 'Field Preparation', topics: ['Deep black soil preparation', 'Ridges & furrows', 'Pre-sowing irrigation'] },
        { week: 'Week 2', title: 'Sowing & Varieties', topics: ['Bt Cotton vs non-Bt', 'Spacing (90cm × 60cm)', 'Refuge crop planting'] },
        { week: 'Week 3', title: 'Nutrition Management', topics: ['NPK scheduling', 'Foliar spray (Boron, Zinc)', 'Organic alternatives'] },
        { week: 'Week 4', title: 'Pest Management', topics: ['Bollworm lifecycle', 'Sucking pest control', 'Pheromone trap setup'] },
        { week: 'Week 5', title: 'Flowering & Boll Development', topics: ['Square & boll stages', 'Growth regulator sprays', 'Water stress management'] },
        { week: 'Week 6', title: 'Picking & Grading', topics: ['Hand-picking techniques', 'Moisture content for grading', 'Market pricing factors'] },
    ],
    sugarcane: [
        { week: 'Week 1', title: 'Land Preparation', topics: ['Deep ploughing (2-3 times)', 'Trench method', 'FYM & press mud application'] },
        { week: 'Week 2', title: 'Sett Planting', topics: ['Sett selection & treatment', 'Planting methods (flat vs trench)', 'Spacing guidelines'] },
        { week: 'Week 3', title: 'Tillering Phase', topics: ['Earthing up', 'Irrigation scheduling', 'Weed management'] },
        { week: 'Week 4', title: 'Grand Growth Phase', topics: ['Nitrogen top-dressing', 'Trash mulching', 'Internode elongation monitoring'] },
        { week: 'Week 5', title: 'Maturity & Ripening', topics: ['Sucrose accumulation signs', 'Withholding irrigation', 'Chemical ripeners'] },
        { week: 'Week 6', title: 'Harvesting', topics: ['Manual vs mechanical harvest', 'Ratoon management', 'Transport to sugar mill'] },
    ],
    potato: [
        { week: 'Week 1', title: 'Soil & Seed Prep', topics: ['Loose soil preparation', 'Seed tuber selection', 'Chitting (pre-sprouting)'] },
        { week: 'Week 2', title: 'Planting', topics: ['Planting depth & spacing', 'Ridge planting method', 'Initial irrigation'] },
        { week: 'Week 3', title: 'Growth Management', topics: ['Earthing up (hilling)', 'Fertilizer schedule', 'Late blight prevention'] },
        { week: 'Week 4', title: 'Harvesting & Storage', topics: ['Haulm cutting', 'Curing process', 'Cold storage techniques'] },
    ],
    onion: [
        { week: 'Week 1', title: 'Nursery Raising', topics: ['Seed bed preparation', 'Seedling care', 'Transplanting readiness'] },
        { week: 'Week 2', title: 'Transplanting', topics: ['Field layout', 'Spacing (15cm × 10cm)', 'Starter dose fertilizer'] },
        { week: 'Week 3', title: 'Bulb Development', topics: ['Irrigation management', 'Thrips & purple blotch control', 'Neck fall monitoring'] },
        { week: 'Week 4', title: 'Harvest & Curing', topics: ['Neck softening signs', 'Curing in shade', 'Ventilated storage'] },
    ],
    tomato: [
        { week: 'Week 1', title: 'Nursery & Transplanting', topics: ['Seedling raising', 'Hardening off', 'Transplant spacing'] },
        { week: 'Week 2', title: 'Staking & Training', topics: ['Staking methods', 'Pruning side shoots', 'Trellising for indeterminate types'] },
        { week: 'Week 3', title: 'Fruiting Management', topics: ['Calcium spray for blossom-end rot', 'Hormonal sprays', 'Fruit fly traps'] },
        { week: 'Week 4', title: 'Harvesting', topics: ['Color break stage picking', 'Ripening & grading', 'Post-harvest handling'] },
    ],
    turmeric: [
        { week: 'Week 1', title: 'Rhizome Selection', topics: ['Mother vs finger rhizomes', 'Treatment with fungicide', 'Pit planting method'] },
        { week: 'Week 2', title: 'Growing Phase', topics: ['Mulching importance', 'Shade requirements', 'Organic manuring'] },
        { week: 'Week 3', title: 'Crop Care', topics: ['Rhizome rot prevention', 'Earthing up', 'Leaf spot treatment'] },
        { week: 'Week 4', title: 'Harvest & Processing', topics: ['9-month maturity signs', 'Boiling & drying process', 'Polishing & grading'] },
    ],
    ginger: [
        { week: 'Week 1', title: 'Seed Rhizome Prep', topics: ['Rhizome selection', 'Treatment & curing', 'Raised bed preparation'] },
        { week: 'Week 2', title: 'Planting & Mulching', topics: ['Spacing (25cm × 25cm)', 'Green leaf mulching', 'Shade management'] },
        { week: 'Week 3', title: 'Growth Phase', topics: ['Rhizome development', 'Earthing up schedule', 'Soft rot prevention'] },
        { week: 'Week 4', title: 'Harvesting', topics: ['8-10 month maturity', 'Careful digging', 'Washing & drying for market'] },
    ],
    chilli: [
        { week: 'Week 1', title: 'Nursery & Transplant', topics: ['Seed treatment', 'Transplanting at 45-day stage', 'Field layout'] },
        { week: 'Week 2', title: 'Vegetative Growth', topics: ['Staking tall varieties', 'NPK application', 'Aphid & mite control'] },
        { week: 'Week 3', title: 'Flowering & Fruiting', topics: ['Fruit set enhancement', 'Leaf curl virus management', 'Color development'] },
        { week: 'Week 4', title: 'Harvesting', topics: ['Green vs red harvest', 'Drying methods (sun/machine)', 'Oleoresin extraction basics'] },
    ],
    garlic: [
        { week: 'Week 1', title: 'Clove Selection & Planting', topics: ['Clove separation', 'Planting depth (3-5cm)', 'Spacing & bed preparation'] },
        { week: 'Week 2', title: 'Growth Management', topics: ['Irrigation scheduling', 'Weed control', 'Top-dressing urea'] },
        { week: 'Week 3', title: 'Bulb Formation', topics: ['Reducing irrigation', 'Purple blotch control', 'Maturity signs'] },
        { week: 'Week 4', title: 'Harvest & Curing', topics: ['Neck drying check', 'Curing for 7-10 days', 'Braiding & storage'] },
    ],
    lettuce: [
        { week: 'Week 1', title: 'Sowing & Setup', topics: ['Direct sowing vs transplant', 'Container & raised bed options', 'Soil mix preparation'] },
        { week: 'Week 2', title: 'Growing Phase', topics: ['Thinning seedlings', 'Liquid fertilizer schedule', 'Shade cloth in hot weather'] },
        { week: 'Week 3', title: 'Harvesting', topics: ['Cut-and-come-again method', 'Head lettuce maturity', 'Hydroponic lettuce tips'] },
    ],
    groundnut: [
        { week: 'Week 1', title: 'Land & Seed Prep', topics: ['Sandy loam selection', 'Seed treatment with Rhizobium', 'Ridge and furrow method', 'Optimal sowing depth'] },
        { week: 'Week 2', title: 'Vegetative Growth', topics: ['Earthing up at flowering', 'Gypsum application for calcium', 'Weed management', 'Light irrigation scheduling'] },
        { week: 'Week 3', title: 'Pegging & Pod Development', topics: ['Peg penetration into soil', 'Micronutrient sprays (boron, zinc)', 'Monitoring for leaf spot', 'Avoiding waterlogging'] },
        { week: 'Week 4', title: 'Harvesting & Storage', topics: ['Maturity testing (shell hardness)', 'Uprooting and drying', 'Grading and storage tips', 'Aflatoxin prevention'] },
    ],
    mustard: [
        { week: 'Week 1', title: 'Sowing & Setup', topics: ['Field preparation for Rabi season', 'Row spacing (30-45 cm)', 'Seed rate optimization', 'Pre-emergence herbicide'] },
        { week: 'Week 2', title: 'Growth & Nutrition', topics: ['First irrigation at 25-30 DAS', 'Nitrogen top-dressing', 'Thinning for proper spacing', 'Aphid monitoring'] },
        { week: 'Week 3', title: 'Flowering & Protection', topics: ['Bee pollination importance', 'Spray schedule for painted bug', 'White rust prevention', 'Second irrigation at flowering'] },
        { week: 'Week 4', title: 'Harvest & Oil Extraction', topics: ['Siliqua maturity (yellow-brown)', 'Threshing and winnowing', 'Sun drying to 8% moisture', 'Oil extraction basics'] },
    ],
    sunflower: [
        { week: 'Week 1', title: 'Planting', topics: ['Hybrid vs open-pollinated varieties', 'Spacing (60×30 cm)', 'Seed depth and germination', 'Base fertilizer application'] },
        { week: 'Week 2', title: 'Vegetative Stage', topics: ['Thinning to one plant per hill', 'Earthing up for wind resistance', 'Irrigation at star-bud stage', 'Weed control'] },
        { week: 'Week 3', title: 'Flowering & Pollination', topics: ['Head turning (heliotropism)', 'Bee colony placement', 'Boron spray for seed set', 'Bird protection nets'] },
        { week: 'Week 4', title: 'Seed Harvest', topics: ['Back of head turns brown', 'Cutting and drying heads', 'Seed extraction methods', 'Oil content testing'] },
    ],
    banana: [
        { week: 'Week 1', title: 'Planting Setup', topics: ['Tissue culture vs sucker selection', 'Pit preparation (45×45×45 cm)', 'Variety selection (Cavendish, Robusta)', 'Spacing (1.8×1.8m)'] },
        { week: 'Week 2', title: 'Vegetative Growth', topics: ['Drip irrigation setup', 'Fertigation schedule (NPK)', 'Desuckering technique', 'Mulching with banana leaves'] },
        { week: 'Week 3', title: 'Flowering & Fruit Dev', topics: ['Bunch emergence care', 'Male bud removal', 'Propping to prevent lodging', 'Sigatoka leaf spot management'] },
        { week: 'Week 4', title: 'Harvest & Marketing', topics: ['Bunch maturity indicators', 'Dehandling and grading', 'Ripening chamber setup', 'Cold chain logistics'] },
    ],
    brinjal: [
        { week: 'Week 1', title: 'Nursery & Transplant', topics: ['Seedling raising in pro-trays', 'Transplanting at 4-5 leaf stage', 'Spacing (60×45 cm)', 'Stake support for tall varieties'] },
        { week: 'Week 2', title: 'Growth & Care', topics: ['Pinching for bushy growth', 'Drip irrigation benefits', 'Mulching with straw', 'Integrated nutrient management'] },
        { week: 'Week 3', title: 'Pest Management', topics: ['Fruit and shoot borer control', 'Pheromone traps', 'Neem-based sprays', 'Resistant variety selection'] },
        { week: 'Week 4', title: 'Harvesting', topics: ['Harvest at glossy stage', 'Picking frequency (every 3-4 days)', 'Grading by size', 'Market preparation'] },
    ],
    cucumber: [
        { week: 'Week 1', title: 'Sowing', topics: ['Direct seeding vs transplant', 'Raised bed preparation', 'Trellis setup for climbing', 'Seed spacing (1×0.5 m)'] },
        { week: 'Week 2', title: 'Vine Training', topics: ['Training vines on trellis', 'Lateral pruning', 'Drip + mulch combination', 'Foliar calcium spray'] },
        { week: 'Week 3', title: 'Fruiting', topics: ['Hand pollination in polyhouse', 'Picking at tender stage', 'Preventing bitter fruits', 'Downy mildew control'] },
    ],
    watermelon: [
        { week: 'Week 1', title: 'Field Prep & Sowing', topics: ['Sandy riverbed soil selection', 'Pit method sowing', 'Black plastic mulch', 'Seedless vs seeded varieties'] },
        { week: 'Week 2', title: 'Vine Growth', topics: ['Vine training in one direction', 'Bee hive placement for pollination', 'Drip irrigation management', 'Fruit thinning (2-3 per plant)'] },
        { week: 'Week 3', title: 'Fruit Development', topics: ['Belly spot yellowing check', 'Thump test for ripeness', 'Tendril drying indicator', 'Harvest and transport care'] },
    ],
    mango: [
        { week: 'Week 1', title: 'Orchard Establishment', topics: ['Grafted sapling selection', 'Planting distance (10×10 m)', 'Pit preparation with FYM', 'Variety selection (Alphonso, Kesar, Totapuri)'] },
        { week: 'Week 2', title: 'Tree Management', topics: ['Pruning and canopy shaping', 'Intercropping in young orchards', 'Annual fertilizer schedule', 'Basin irrigation method'] },
        { week: 'Week 3', title: 'Flowering & Fruiting', topics: ['Paclobutrazol for flower induction', 'Mango hopper and midge control', 'Fruit drop prevention (NAA spray)', 'Bagging fruits for quality'] },
        { week: 'Week 4', title: 'Harvest & Post-Harvest', topics: ['Ethylene-based ripening', 'Grading for export (size, color)', 'Hot water treatment for shelf life', 'Value addition (pulp, pickle, dried)'] },
    ],
    coffee: [
        { week: 'Week 1', title: 'Plantation Setup', topics: ['Shade tree planting (Silver Oak)', 'Arabica vs Robusta selection', 'Nursery bed preparation', 'Seedling transplanting technique'] },
        { week: 'Week 2', title: 'Plant Care', topics: ['Centering and desuckering', 'Organic mulch 10-15 cm thick', 'Bordeaux mixture spraying', 'Fertilizer split application'] },
        { week: 'Week 3', title: 'Berry Development', topics: ['Blossom showers importance', 'White stem borer management', 'Berry borer integrated control', 'Leaf rust prevention'] },
        { week: 'Week 4', title: 'Harvest & Processing', topics: ['Selective red cherry picking', 'Wet processing (washed coffee)', 'Dry processing (natural)', 'Cupping and grading basics'] },
    ],
    tea: [
        { week: 'Week 1', title: 'Nursery & Planting', topics: ['Clonal vs seedling varieties', 'Nursery management 12-18 months', 'Planting in contour rows', 'Shade tree establishment'] },
        { week: 'Week 2', title: 'Bush Management', topics: ['Centering at 30 cm height', 'Tipping for frame formation', 'Plucking table maintenance', 'Green manuring between rows'] },
        { week: 'Week 3', title: 'Plucking & Pest Control', topics: ['Two leaves and a bud standard', 'Plucking rounds (7-10 days)', 'Red spider mite control', 'Blister blight management'] },
        { week: 'Week 4', title: 'Processing', topics: ['Withering (moisture reduction)', 'Rolling (cell rupture for oxidation)', 'Fermentation timing', 'Drying and grading (TGFOP, BOP, Dust)'] },
    ],
};

// Default syllabus for any crop not specifically listed
const defaultSyllabus = [
    { week: 'Week 1', title: 'Soil Preparation & Seeds', topics: ['Soil testing', 'Seed selection', 'Land preparation'] },
    { week: 'Week 2', title: 'Watering & Nutrition', topics: ['Irrigation methods', 'Fertilizer application', 'Soil health monitoring'] },
    { week: 'Week 3', title: 'Pest Management', topics: ['Common pests identification', 'Organic pest control', 'Disease prevention'] },
    { week: 'Week 4', title: 'Harvesting Techniques', topics: ['Maturity indicators', 'Harvesting methods', 'Post-harvest handling'] },
];

export default function ModuleDetail() {
    const params = useParams();
    const id = params.id as string;
    const module = cropModules.find(m => m.id === id);
    const [enrolled, setEnrolled] = useState(false);
    const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

    if (!module) return notFound();

    const syllabus = syllabusData[module.id] || defaultSyllabus;
    const lessonCount = syllabus.reduce((acc, s) => acc + s.topics.length, 0);
    const completedCount = completedTopics.size;
    const progressPercent = lessonCount > 0 ? Math.round((completedCount / lessonCount) * 100) : 0;

    const toggleTopic = (topicKey: string) => {
        setCompletedTopics(prev => {
            const next = new Set(prev);
            if (next.has(topicKey)) {
                next.delete(topicKey);
            } else {
                next.add(topicKey);
            }
            return next;
        });
    };

    const handleUnenroll = () => {
        setEnrolled(false);
        setCompletedTopics(new Set());
    };

    return (
        <div className={styles.container}>
            {/* Hero Header with Background Image */}
            <header className={styles.header} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${module.image})` }}>
                <div className={styles.headerContent}>
                    <span className={styles.badge}>{module.category}</span>
                    <h1 className={styles.title}>{module.title}</h1>
                    <p className={styles.sciName}><em>{module.scientificName}</em></p>
                    <p className={styles.description}>{module.description}</p>

                    <div className={styles.meta}>
                        <div className={styles.metaItem}><Clock size={18} /> {module.duration}</div>
                        <div className={styles.metaItem}><BarChart size={18} /> {module.difficulty}</div>
                    </div>
                </div>
            </header>

            {/* Quick Stats Row */}
            <div className={styles.statsRow}>
                <div className={styles.statItem}>
                    <Sprout size={24} className={styles.statIcon} />
                    <span>Soil: {module.soilType || 'Standard'}</span>
                </div>
                <div className={styles.statItem}>
                    <CloudRain size={24} className={styles.statIcon} />
                    <span>Water: {module.waterRequirements || 'Moderate'}</span>
                </div>
                <div className={styles.statItem}>
                    <Calendar size={24} className={styles.statIcon} />
                    <span>Harvest: {module.harvestTime || 'Seasonal'}</span>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.mainColumn}>
                    <Card className={styles.section}>
                        <h2>Course Overview</h2>
                        <p>
                            In this comprehensive guide to {module.title}, you will learn the fundamentals of
                            sustainable cultivation. From soil preparation to harvesting, every step is covered
                            to ensure a successful yield.
                        </p>
                    </Card>

                    <Card className={styles.section}>
                        <h2><GraduationCap size={22} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />Syllabus</h2>
                        <ul className={styles.syllabus}>
                            {syllabus.map((item, idx) => {
                                const weekTopicKeys = item.topics.map((_, ti) => `${idx}-${ti}`);
                                const weekCompleted = weekTopicKeys.every(k => completedTopics.has(k));
                                return (
                                    <li key={idx} className={`${styles.syllabusItem} ${enrolled && weekCompleted ? styles.syllabusItemDone : ''}`}>
                                        <div className={styles.syllabusHeader}>
                                            <CheckCircle size={18} className={`${styles.check} ${enrolled && weekCompleted ? styles.checkDone : ''}`} />
                                            <div>
                                                <span className={styles.syllabusWeek}>{item.week}</span>
                                                <span className={styles.syllabusTitle}>{item.title}</span>
                                            </div>
                                        </div>
                                        <ul className={styles.topicList}>
                                            {item.topics.map((topic, ti) => {
                                                const topicKey = `${idx}-${ti}`;
                                                const isChecked = completedTopics.has(topicKey);
                                                return (
                                                    <li key={ti} className={enrolled && isChecked ? styles.topicDone : ''}>
                                                        {enrolled && (
                                                            <input
                                                                type="checkbox"
                                                                checked={isChecked}
                                                                onChange={() => toggleTopic(topicKey)}
                                                                className={styles.topicCheckbox}
                                                            />
                                                        )}
                                                        <span className={enrolled && isChecked ? styles.topicTextDone : ''}>{topic}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </li>
                                );
                            })}
                        </ul>
                    </Card>
                </div>

                <div className={styles.sidebar}>
                    <Card className={styles.enrollCard}>
                        {enrolled ? (
                            <>
                                <div className={styles.enrolledBadge}>✓ Enrolled</div>
                                <h3>You&apos;re in!</h3>
                                <div className={styles.progressBar}>
                                    <div className={styles.progressFill} style={{ width: `${progressPercent}%` }}></div>
                                </div>
                                <p className={styles.progressText}>{completedCount} / {lessonCount} topics completed ({progressPercent}%)</p>
                                <Button className={styles.fullBtn} size="lg" variant="outline" onClick={handleUnenroll}>
                                    Unenroll
                                </Button>
                            </>
                        ) : (
                            <>
                                <h3>Ready to start?</h3>
                                <p>Track your progress and get certified.</p>
                                <Button className={styles.fullBtn} size="lg" onClick={() => setEnrolled(true)}>
                                    Enroll Now
                                </Button>
                            </>
                        )}
                        <div className={styles.enrollMeta}>
                            <BookOpen size={16} /> {syllabus.length} Weeks • {lessonCount} Topics
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
