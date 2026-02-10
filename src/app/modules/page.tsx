"use client";

import { useEffect, useState } from 'react';
import ModuleCard from '@/components/modules/ModuleCard';
import { Module } from '@/data/modules';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export default function ModulesPage() {
    const [modules, setModules] = useState<Module[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchModules() {
            try {
                const res = await fetch('/api/modules');
                const data = await res.json();
                setModules(data);
            } catch (error) {
                console.error("Failed to load modules", error);
            } finally {
                setLoading(false);
            }
        }
        fetchModules();
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Learning Modules</h1>
                <p className={styles.subtitle}>Select a crop type to begin your journey.</p>
            </header>

            {loading ? (
                <div className={styles.loading}>
                    <div className={styles.spinner}></div>
                    <p>Loading Course Data...</p>
                </div>
            ) : (
                <div className={styles.grid}>
                    {modules.map((module) => (
                        <ModuleCard key={module.id} module={module} />
                    ))}
                </div>
            )}
        </div>
    );
}
