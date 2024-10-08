import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Link, Stack } from "expo-router";
import finalImage from '../../assets/2.png';
export function Splash_4() {
    return (
      <View style={styles.container}>
  <Stack.Screen options={{ 
          headerShown: false 
           }} />
          <View style={styles.topSection}>
              <Image source={finalImage} style={styles.image} />
          </View>
          <View style={styles.bottomSection}>
                  <Text style={styles.title}>¡Gracias por llegar al final!</Text>
                  <Text style={styles.description}>
                  "Estamos emocionados de verte crecer en tu viaje de programación. ¡Nos vemos pronto!"
                  </Text>
              </View>
        <Link href={`/cursos`} asChild>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Comenzar</Text>
          </TouchableOpacity>
          </Link>
        
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
