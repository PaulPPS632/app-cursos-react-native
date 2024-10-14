import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { Stack, useRouter } from "expo-router";
import { createEntidad } from '../../service/AuthService';

export default function Register() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();  // Usar el hook useRouter

  const handleRegister = async () => {
    try {
      const response = await createEntidad(nombre, apellido, email, password);

      if (!response) {
        Alert.alert('Error', 'No se pudo obtener una respuesta del servidor');
        return;
      }

      console.log('Datos de respuesta:', response);

      Alert.alert('Éxito', 'Registro exitoso');

      // Redirigir a la pantalla de inicio de sesión
      router.push('/login');
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      Alert.alert('Error', 'Ocurrió un error al intentar registrarse');
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <StatusBar barStyle="dark-content" backgroundColor="#f0f4f7" />

      <View style={styles.header}>
        <Text style={styles.headerText}>Bienvenido a Codeledge</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Registrarse</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Nombre" 
          value={nombre}
          onChangeText={setNombre}
          placeholderTextColor="#999" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Apellido" 
          value={apellido}
          onChangeText={setApellido}
          placeholderTextColor="#999" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#999" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Contraseña" 
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#999" 
          secureTextEntry 
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={styles.footerText}>¿Ya tienes una cuenta? Iniciar Sesión</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    paddingTop: 40,
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
    textAlign: 'center',
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
