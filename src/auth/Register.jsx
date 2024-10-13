// src/auth/Register.jsx:

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Register() {
  return (
    <View style={styles.container}>
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
