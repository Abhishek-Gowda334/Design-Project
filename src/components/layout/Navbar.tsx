"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Sprout, LogOut } from 'lucide-react';
import { Button } from '../ui/Button';
import styles from './Navbar.module.css';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
    const { isLoggedIn, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Sprout size={28} color="var(--color-primary-light)" />
                    <span>Agri<span className={styles.logoHighlight}>Learn</span></span>
                </Link>

                {isLoggedIn && (
                    <div className={styles.links}>
                        <Link href="/modules" className={styles.link}>Learning Modules</Link>
                        <Link href="/urban-farming" className={styles.link}>Urban Farming</Link>
                        <Link href="/multi-cropping" className={styles.link}>Multi-Cropping</Link>
                        <Link href="/tools" className={styles.link}>Tools</Link>
                        <Link href="/community" className={styles.link}>Expert Session</Link>
                    </div>
                )}

                <div className={styles.actions}>
                    {isLoggedIn ? (
                        <Button variant="primary" size="sm" onClick={handleLogout}>
                            <LogOut size={16} style={{ marginRight: '0.35rem' }} />
                            Logout
                        </Button>
                    ) : (
                        <Link href="/login">
                            <Button variant="primary" size="sm">
                                Login / Join
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
