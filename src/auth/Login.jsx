// src/auth/Login.jsx:

// src/auth/Login.jsx:

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Stack } from "expo-router";

export default function Login() {
  return (
    <View style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <ScrollView contentContainerStyle={styles.content}>
            <Text>Login</Text>
            <Text>gooo...</Text>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingBottom: 60, 
  },
  content: {
    flexGrow: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
