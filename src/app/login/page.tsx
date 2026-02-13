import LoginForm from '@/components/auth/LoginForm';
import { Card } from '@/components/ui/Card';
import styles from './page.module.css';

export default function LoginPage() {
    return (
        <div className={styles.container}>
            <Card className={styles.loginCard}>
                <LoginForm />
            </Card>
        </div>
    );
}
