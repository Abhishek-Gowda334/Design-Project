import Link from 'next/link';
import { Clock, Layers } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import styles from './UrbanCard.module.css';

interface UrbanModule {
    id: string;
    title: string;
    description: string;
    icon: string;
    image: string;
    steps: string[];
}

interface UrbanCardProps {
    module: UrbanModule;
}

export default function UrbanCard({ module }: UrbanCardProps) {
    const imageSrc = module.image.startsWith('/') ? module.image : '/images/placeholder.png';

    return (
        <Card className={styles.card} hoverEffect>
            <div className={styles.imageWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imageSrc} alt={module.title} className={styles.image} />
                <span className={styles.badge}>Urban Tech</span>
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{module.title}</h3>
                <p className={styles.description}>{module.description}</p>

                <div className={styles.meta}>
                    <div className={styles.metaItem}>
                        <Layers size={16} /> {module.steps.length} Steps
                    </div>
                    <div className={styles.metaItem}>
                        <Clock size={16} /> Self-paced
                    </div>
                </div>

                <Link href={`/urban-farming/${module.id}`} className={styles.action}>
                    <Button variant="outline" size="sm" className={styles.fullBtn}>
                        Explore Technique
                    </Button>
                </Link>
            </div>
        </Card>
    );
}
