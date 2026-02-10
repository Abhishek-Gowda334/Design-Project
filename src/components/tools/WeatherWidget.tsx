import { CloudSun, CloudRain, Droplets, Wind } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import styles from './WeatherWidget.module.css';

export default function WeatherWidget() {
    return (
        <Card className={styles.container}>
            <div className={styles.header}>
                <div className={styles.location}>
                    <h3>Bangalore, IN</h3>
                    <span className={styles.date}>Today, Feb 06</span>
                </div>
                <div className={styles.mainIcon}>
                    <CloudSun size={48} color="#ffd166" />
                </div>
            </div>

            <div className={styles.tempSection}>
                <span className={styles.temp}>24°</span>
                <span className={styles.condition}>Partly Cloudy</span>
            </div>

            <div className={styles.stats}>
                <div className={styles.stat}>
                    <Droplets size={16} />
                    <span>65% Humidity</span>
                </div>
                <div className={styles.stat}>
                    <Wind size={16} />
                    <span>12 km/h Wind</span>
                </div>
                <div className={styles.stat}>
                    <CloudRain size={16} />
                    <span>20% Rain</span>
                </div>
            </div>

            <div className={styles.advice}>
                <strong>Farming Tip:</strong> Good day for foliar spray.
            </div>
        </Card>
    );
}
