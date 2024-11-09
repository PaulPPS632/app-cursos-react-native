// src/Splash/splashAuth.jsx
import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router'; // Para hacer la navegación
import homeImage from '../../assets/logogif.webp';
import { Stack } from "expo-router";

export default function SplashAutch() {
  const router = useRouter();

  // Espera 3 segundos y luego redirige a la pantalla de cursos
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/cursos'); // Redirige a la pantalla de cursos
    }, 3000); // 3 segundos

    // Limpia el temporizador cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="light-content" backgroundColor="#000" translucent={true} />
      
      <View style={styles.topSection}>
        <Image source={homeImage} style={styles.image} />
      </View>
      
      <View style={styles.bottomSection}>
        <Text style={styles.title}>Bienvenido a tu CODELEDGE</Text>
        <Text style={styles.subtitle}>Desbloquea Tu Potencial</Text>

        <Text style={styles.description}>
          "Empieza tu viaje en el mundo de la programación. Aprende a tu propio ritmo y con los mejores recursos diseñados para ti."
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF', // Fondo claro para la parte superior
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Fondo blanco para la parte superior
  },
  bottomSection: {
    flex: 1.8,
    backgroundColor: '#6C63FF', // Fondo de color morado para la parte inferior
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 455,
    height: 285,
    marginBottom: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
});
