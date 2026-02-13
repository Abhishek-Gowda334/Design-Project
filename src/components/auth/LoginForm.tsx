"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogIn, Mail, Lock, Eye, EyeOff, Leaf } from 'lucide-react';
import styles from './LoginForm.module.css';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        setIsLoading(true);
        // Simulate login delay
        setTimeout(() => {
            login();
            setIsLoading(false);
            router.push('/dashboard');
        }, 1500);
    };

    return (
        <div className={styles.container}>
            <div className={styles.logoSection}>
                <div className={styles.logoIcon}>
                    <Leaf size={32} />
                </div>
                <h2 className={styles.title}>Welcome Back</h2>
                <p className={styles.subtitle}>Sign in to continue your farming journey</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                {error && <div className={styles.errorMessage}>{error}</div>}

                <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <div className={styles.inputWrapper}>
                        <Mail size={18} className={styles.inputIcon} />
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.input}
                            autoComplete="email"
                        />
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <div className={styles.labelRow}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <a href="#" className={styles.forgotLink}>Forgot password?</a>
                    </div>
                    <div className={styles.inputWrapper}>
                        <Lock size={18} className={styles.inputIcon} />
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.input}
                            autoComplete="current-password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className={styles.togglePassword}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                <Button
                    type="submit"
                    size="lg"
                    isLoading={isLoading}
                    className={styles.loginButton}
                >
                    <LogIn size={18} />
                    Sign In
                </Button>
            </form>

            <div className={styles.footer}>
                <p className={styles.signupText}>
                    Don&apos;t have an account? <a href="#" className={styles.signupLink}>Sign up</a>
                </p>
            </div>
        </div>
    );
}
