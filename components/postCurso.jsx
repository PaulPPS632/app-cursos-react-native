// component/postCurso.jsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PostCurso() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post Curso</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
