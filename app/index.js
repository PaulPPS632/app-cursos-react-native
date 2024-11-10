// Incio de la aplicacion:
// app/index.js:
import SplashScreen from "../src/Splash/splash";	
import { useEffect, useState } from 'react';
import {  getUserAndToken } from '../service/storageService';
import { useRouter } from 'expo-router';

export default function Index() {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Cambié de false a null
    const router = useRouter();

    useEffect(() => {
        async function checkAuth() {
            const {user, token} = await getUserAndToken();

            if (token) {
                setIsAuthenticated(true);
                console.log("SI authenticado")
                router.push('/splashAuth'); // Ya autenticado
            } else {
                setIsAuthenticated(false);
                console.log("NO authenticado")
                router.push('/SplashScreen'); // No autenticado
            }
            setIsLoading(false);
        }
        checkAuth();
    }, []);

    // Mostrar pantalla de carga solo si aún no se determinó el estado
    if (isLoading === null) return <SplashScreen />;

    // No mostrar nada adicional mientras se realiza la verificación.
    return null;
}

