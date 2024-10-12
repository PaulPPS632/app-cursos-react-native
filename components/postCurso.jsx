// component/postCurso.jsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function PostCurso() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        <Text style={styles.title}>Post Curso</Text>
        <Text style={styles.description}>Descripción del curso...</Text>

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },

});
