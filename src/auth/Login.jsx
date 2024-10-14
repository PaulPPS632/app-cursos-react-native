import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { Stack, useRouter } from "expo-router";
import { login } from '../../service/AuthService';
import { getUserAndToken, saveUserAndToken } from '../../service/storageService';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const router = useRouter();  // Usar el hook useRouter

  const handleLogin = async () => {
    try {
      const response = await login(email, password);

      if (!response) {
        Alert.alert('Error', 'No se pudo obtener una respuesta del servidor');
        return;
      }

      const authToken = response.token;
      const user = response.usuario;
      console.log('Token de autenticación:', authToken);
      console.log('Datos de respuesta:', response);

      // Guardar usuario y token en AsyncStorage
      await saveUserAndToken(response);

      console.log('Usuario y token guardados correctamente', await getUserAndToken());

      setToken(authToken);

      Alert.alert('Éxito', 'Inicio de sesión exitoso');

      // Redirigir a la pantalla de "cursos"
      router.push('/cursos');
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      Alert.alert('Error', 'Ocurrió un error al intentar iniciar sesión');
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
        <Text style={styles.title}>Iniciar Sesión</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Usuario" 
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

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text style={styles.footerText}>¿Registrarse?</Text>
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
