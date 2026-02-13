"use client";

import { useEffect, useState } from 'react';
import ModuleCard from '@/components/modules/ModuleCard';
import { Module } from '@/data/modules';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import styles from './page.module.css';

type FilterType = 'all' | 'short-term' | 'mid-term' | 'long-term';

export default function ModulesPage() {
    const [modules, setModules] = useState<Module[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<FilterType>('all');

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

    const filteredModules = filter === 'all'
        ? modules
        : modules.filter(m => m.category === filter);

    return (
        <ProtectedRoute>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Learning Modules</h1>
                    <p className={styles.subtitle}>Select a crop type to begin your journey.</p>
                </header>

                <div className={styles.filterBar}>
                    {([
                        { key: 'all', label: 'All' },
                        { key: 'short-term', label: 'Short Term' },
                        { key: 'mid-term', label: 'Mid Term' },
                        { key: 'long-term', label: 'Long Term' },
                    ] as { key: FilterType; label: string }[]).map(({ key, label }) => (
                        <button
                            key={key}
                            className={`${styles.filterBtn} ${filter === key ? styles.filterBtnActive : ''}`}
                            onClick={() => setFilter(key)}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className={styles.loading}>
                        <div className={styles.spinner}></div>
                        <p>Loading Course Data...</p>
                    </div>
                ) : filteredModules.length === 0 ? (
                    <div className={styles.empty}>
                        <p>No modules found for this category.</p>
                    </div>
                ) : (
                    <div className={styles.grid}>
                        {filteredModules.map((module) => (
                            <ModuleCard key={module.id} module={module} />
                        ))}
                    </div>
                )}
            </div>
        </ProtectedRoute>
    );
}
