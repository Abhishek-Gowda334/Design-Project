"use client";

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Layers, ArrowRight, CircleDollarSign, Calendar } from 'lucide-react';
import Image from 'next/image';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import styles from './page.module.css';

export default function MultiCroppingPage() {
    return (
        <ProtectedRoute>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.headerContent}>
                        <h1 className={styles.title}>Multi-Cropping <span className={styles.highlight}>Mastery</span></h1>
                        <p className={styles.subtitle}>
                            Maximize your income by growing compatible crops together.
                            Transform your field into a multi-layered profit engine.
                        </p>
                        <Button size="lg" className={styles.ctaBtn}>Start Planning</Button>
                    </div>
                </header>

                <section className={styles.grid}>
                    <Card className={styles.mainCard}>
                        <div className={styles.cardHeader}>
                            <Layers size={32} color="#ffd166" />
                            <h2>Why Multi-Crop?</h2>
                        </div>
                        <p>
                            Multi-cropping involves growing two or more crops in the same space during a single growing season.
                            It mimics natural ecosystems and provides insurance against single-crop failure.
                        </p>
                        <div className={styles.benefits}>
                            <div className={styles.benefit}>
                                <CircleDollarSign size={24} />
                                <span>Double Income</span>
                            </div>
                            <div className={styles.benefit}>
                                <Calendar size={24} />
                                <span>Year-round Harvest</span>
                            </div>
                        </div>
                    </Card>

                    {/* Interactive Model Visualization (Mock) */}
                    <div className={styles.modelSection}>
                        <div className={styles.layer}>
                            <span className={styles.layerLabel}>Canopy Layer</span>
                            <span className={styles.cropName}>Mango / Coconut (Trees)</span>
                        </div>
                        <div className={styles.layer}>
                            <span className={styles.layerLabel}>Mid Layer</span>
                            <span className={styles.cropName}>Banana / Papaya</span>
                        </div>
                        <div className={styles.layer}>
                            <span className={styles.layerLabel}>Ground Layer</span>
                            <span className={styles.cropName}>Ginger / Turmeric</span>
                        </div>
                        <div className={styles.layer}>
                            <span className={styles.layerLabel}>Root Layer</span>
                            <span className={styles.cropName}>Sweet Potato</span>
                        </div>
                    </div>

                    <div className={styles.combinations}>
                        <h3>Proven Combinations</h3>
                        <div className={styles.comboGrid}>
                            <Card className={styles.comboCard}>
                                <h4>The "Three Sisters"</h4>
                                <p>Maize + Climbing Beans + Squash</p>
                                <span className={styles.yieldTag}>High Yield</span>
                            </Card>
                            <Card className={styles.comboCard}>
                                <h4>Spice Garden</h4>
                                <p>Coconut + Black Pepper + Turmeric</p>
                                <span className={styles.yieldTag}>High Value</span>
                            </Card>
                            <Card className={styles.comboCard}>
                                <h4>Nitrogen Fixer</h4>
                                <p>Wheat + Chickpea (Intercropping)</p>
                                <span className={styles.yieldTag}>Soil Health</span>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        </ProtectedRoute>
    );
}
