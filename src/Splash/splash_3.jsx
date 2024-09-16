import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import thirdImage from '../../assets/1.png';
import { Link, Stack } from "expo-router";

export function Splash_3({ navigation }) {
    return (
      <View style={styles.container}>
  <Stack.Screen options={{ 
          headerShown: false 
           }} />
        <View style={styles.topSection}>
          <Image source={thirdImage} style={styles.image} />
        </View>
  
        <View style={styles.bottomSection}>
          <Text style={styles.title}>Construye Tu Futuro</Text>
          <Text style={styles.description}>
            "Desde lo básico hasta lo avanzado, sigue tu propio camino y lleva tus habilidades al siguiente nivel con Codeledge."
          </Text>
          <Link href={`/home_4`} asChild>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Comenzar</Text>
          </TouchableOpacity>
          </Link>

          
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
      color: '#FFFFFF', // Texto blanco para contraste
      marginBottom: 10,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 24,
      fontWeight: '600',
      color: '#FFFFFF', // Texto blanco
      marginBottom: 20,
      textAlign: 'center',
    },
    description: {
      fontSize: 18,
      color: '#FFFFFF', // 
      textAlign: 'center',
      marginBottom: 30,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: '#FFFFFF', // Botón blanco
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 10,
    },
    buttonText: {
      color: '#6C63FF', // Texto morado
      fontSize: 18,
      fontWeight: '600',
    },
  });
