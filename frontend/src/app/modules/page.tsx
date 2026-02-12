"use client";

import { useEffect, useState } from 'react';
import ModuleCard from '@/components/modules/ModuleCard';
import { Module } from '@/data/modules';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export default function ModulesPage() {
    const [modules, setModules] = useState<Module[]>([]);
    const [loading, setLoading] = useState(true);
    const [completedModules, setCompletedModules] = useState<string[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch modules
                const modulesRes = await fetch('/api/modules');
                const modulesData = await modulesRes.json();
                setModules(modulesData);

                // Fetch user progress if logged in
                const token = localStorage.getItem('token');
                if (token) {
                    try {
                        // We need to use our api helper to attach the token, 
                        // but since this is a server component turned client, 
                        // we can just import api or use fetch with headers.
                        // Let's use the api helper we have in lib/api.ts for consistency
                        // But we can't import it easily inside useEffect without proper import top level
                        // Actually we can just do fetch with bearer token here for simplicity
                        const progressRes = await fetch('http://localhost:5000/api/users/progress', {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });

                        if (progressRes.ok) {
                            const progressData = await progressRes.json();
                            // Filter for completed items
                            const completedIds = progressData
                                .filter((p: any) => p.isCompleted)
                                .map((p: any) => p.moduleId);
                            setCompletedModules(completedIds);
                        }
                    } catch (err) {
                        console.error("Failed to fetch progress", err);
                    }
                }
            } catch (error) {
                console.error("Failed to load data", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
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
                        <ModuleCard
                            key={module.id}
                            module={module}
                            completed={completedModules.includes(module.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
