"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    login: () => { },
    logout: () => { },
});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('agrilearn_auth');
        setIsLoggedIn(stored === 'true');
        setIsLoaded(true);
    }, []);

    const login = () => {
        localStorage.setItem('agrilearn_auth', 'true');
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem('agrilearn_auth');
        setIsLoggedIn(false);
    };

    // Don't render children until we've checked localStorage
    if (!isLoaded) return null;

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
