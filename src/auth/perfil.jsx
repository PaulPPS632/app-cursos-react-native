import React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
//import homeImage from '../assets/logogif.webp';

export default function Perfil() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Perfil</Text>

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
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-start', // Alinear el contenido al inicio
    padding: 20,
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
