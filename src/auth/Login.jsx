import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { Stack } from "expo-router";

export default function Login() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Configurar la barra de estado */}
      <StatusBar barStyle="dark-content" backgroundColor="#f0f4f7" />

      {/* Encabezado personalizado */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Bienvenido a la App</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Iniciar Sesión</Text>

        {/* Campos de texto para usuario y contraseña */}
        <TextInput 
          style={styles.input} 
          placeholder="Usuario" 
          placeholderTextColor="#999" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Contraseña" 
          placeholderTextColor="#999" 
          secureTextEntry 
        />

        {/* Botón de login */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>¿Olvidaste tu contraseña?</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  header: {
    backgroundColor: '#6C63FF',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',  // Centrar el contenido horizontalmente
    paddingTop: 40,  // Ajustar espacio para la barra de estado
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flexGrow: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',  // Centrar el texto del título
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#6C63FF',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    color: '#6200ee',
    textDecorationLine: 'underline',
  },
});
