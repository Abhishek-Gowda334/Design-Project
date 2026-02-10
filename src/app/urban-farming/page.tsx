import { urbanModules } from '@/data/modules';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Droplets, Wind, CloudFog, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import styles from './page.module.css';

export default function UrbanFarmingPage() {
    return (
        <div className={styles.container}>
            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.glitchTitle} data-text="Urban Farming">Urban Farming</h1>
                    <p className={styles.tagline}>Maximize Yield in Minimal Space</p>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>95%</span>
                            <span className={styles.statLabel}>Less Water</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>3x</span>
                            <span className={styles.statLabel}>Faster Growth</span>
                        </div>
                    </div>
                </div>
            </header>

            <section className={styles.grid}>
                {urbanModules.map((module) => (
                    <Card key={module.id} className={styles.techCard} hoverEffect>
                        <div className={styles.imageContainer}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={module.image} alt={module.title} className={styles.techImage} />
                            <div className={styles.iconOverlay}>
                                {module.icon === 'water' && <Droplets size={24} />}
                                {module.icon === 'wind' && <Wind size={24} />}
                                {module.icon === 'mushroom' && <CloudFog size={24} />}
                            </div>
                        </div>

                        <div className={styles.cardContent}>
                            <h3>{module.title}</h3>
                            <p>{module.description}</p>

                            <div className={styles.steps}>
                                <h4>Key Steps:</h4>
                                <ul>
                                    {module.steps?.slice(0, 3).map((step, i) => (
                                        <li key={i}> <CheckCircle size={12} className={styles.check} /> {step}</li>
                                    ))}
                                </ul>
                            </div>

                            <Button variant="outline" className={styles.techBtn}>Explore Tech</Button>
                        </div>
                    </Card>
                ))}
            </section>
        </div>
    );
}
