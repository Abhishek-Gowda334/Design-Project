import CropCalculator from '@/components/tools/CropCalculator';
import PricePrediction from '@/components/tools/PricePrediction';
import WeatherWidget from '@/components/tools/WeatherWidget';
import styles from './page.module.css';

export default function ToolsPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Smart Farming Tools</h1>
                <p>Plan your farm, predict your income.</p>
            </header>

            <div className={styles.grid}>
                <CropCalculator />
                <WeatherWidget />
                <PricePrediction />
            </div>
        </div>
    );
}
