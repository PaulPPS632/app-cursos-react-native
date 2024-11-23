import React from 'react';
import { Text, ScrollView, View, StyleSheet, Image } from 'react-native';
import homeImage from '../assets/logogif.webp';

export default function AboutInfo() {
  return (
    <View style={styles.mainContainer}>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Sobre el Proyecto</Text>
        
        <Image 
          source={homeImage} // URL de tu imagen
          style={styles.image}
        />

        <Text style={styles.sectionTitle}>Quiénes somos</Text>
        <Text style={styles.text}>
          Somos un equipo apasionado de la programación, compuesto por:
          {'\n'}
          {'\n• Paul Yeffert Perez Sanjinez'}
          {'\n• Ameli Ruth Diaz Chavez'}
          {'\n• Gianmarco Junior Toribio Alayo'}
          {'\n• Angelo Emanuel Aguilar Senador'}
          {'\n• Williams Josed Valle Dextre'}
        </Text>

        <Text style={styles.sectionTitle}>Nuestra misión</Text>
        <Text style={styles.text}>
          Facilitar el aprendizaje de programación a través de una plataforma accesible y efectiva, donde los usuarios puedan mejorar sus habilidades técnicas.
        </Text>

        <Text style={styles.sectionTitle}>Nuestros valores</Text>
        <Text style={styles.text}>
          - Accesibilidad
          {'\n- Innovación'}
          {'\n- Comunidad'}
          {'\n- Educación continua'}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 0,
    backgroundColor: '#333',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-start', // Alinear el contenido al inicio
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffcc00', // Color que resalta
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'left', // Alinear títulos a la izquierda
    width: '100%', // Para asegurar que el texto ocupe todo el ancho
  },
  text: {
    color: 'white',
    opacity: 0.9,
    marginBottom: 16,
    textAlign: 'justify', // Justificar el texto
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});
