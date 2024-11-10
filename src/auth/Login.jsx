import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { Stack, useRouter } from "expo-router";
import { getEntidadById, login } from '../../service/AuthService';
import { saveUserAndToken } from '../../service/storageService';
import {  signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential  } from "firebase/auth";
import { FIREBASE_AUTH } from '../../firebaseConfig';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();  // Usar el hook useRouter


  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email,password);
      
      const localId = response._tokenResponse.localId;
      const entidad = getEntidadById(localId)

      await saveUserAndToken({
        ususario: entidad,
        token: localId
      });
      if(response._tokenResponse.registered){
        router.push('/cursos');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }

  // const signInWithGoogle = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const { idToken } = await GoogleSignin.signIn();
  //     const googleCredential = GoogleAuthProvider.credential(idToken);
  //     const response = await signInWithCredential(FIREBASE_AUTH, googleCredential);
      
  //     const localId = response.user.uid;
  //     console.log(localId)
  //     // const entidad = await getEntidadById(localId);
  //     // console.log({
  //     //   usuario: entidad,

  //     // })
  //     // await saveUserAndToken({
  //     //   usuario: entidad,
  //     //   token: localId
  //     // });

  //     router.push('/cursos');
  //   } catch (error) {
  //     Alert.alert('Error', error.message);
  //   }
  // }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      <View style={styles.header}>
        <Text style={styles.headerText}>Bienvenido a Codeledge</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Iniciar Sesión</Text>

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

        <TouchableOpacity style={styles.button} onPress={signIn}>
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
