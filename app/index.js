// Incio de la aplicacion:
// app/index.js:
import SplashScreen from "../src/Splash/splash";	
import { useEffect, useState } from 'react';
import { getUserAndToken } from '../service/storageService';
import { useRouter } from 'expo-router';

export default function Index() {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function checkAuth() {
            const { user, token } = await getUserAndToken();
            if (token) {
                setIsAuthenticated(true);
                router.push('/splashAuth'); // Ya autenticado.
            } else {
                router.push('/SplashScreen'); // no autenticado.
            }
            setIsLoading(false);
        }
        checkAuth();
    }, []);

    if (isLoading) return <SplashScreen />;

    return null;
}

