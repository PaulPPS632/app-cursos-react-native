import React, { useState } from 'react';
import { View, Button, StyleSheet, ScrollView, TextInput } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Picker } from '@react-native-picker/picker';

export default function PostCurso() {
  const [title, setTitle] = useState('');
  const [nivel, setNivel] = useState('');
  const [description, setDescription] = useState('');
  const [markdownContent, setMarkdownContent] = useState('');

  const handlePublish = () => {
    if (title && nivel && description && markdownContent) {
      alert('Publicación realizada: ' + title);
    } else {
      alert('Por favor completa todos los campos');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TextInput
          style={styles.title}
          placeholder="Nombre del título"
          value={title}
          placeholderTextColor="#ccc"
          onChangeText={setTitle}
        />

        <Picker
          selectedValue={nivel}
          style={styles.picker}
          onValueChange={(itemValue) => setNivel(itemValue)}
        >
          <Picker.Item label="Principiante" value="principiante" />
          <Picker.Item label="Intermedio" value="intermedio" />
          <Picker.Item label="Avanzado" value="avanzado" />
        </Picker>

        <TextInput
          style={styles.description}
          placeholder="Descripción"
          multiline
          numberOfLines={4}
          value={description}
          placeholderTextColor="#ccc"
          onChangeText={setDescription}
        />

        <TextInput
          style={styles.contenido}
          placeholder="Contenido (Markdown)"
          multiline
          numberOfLines={10}
          value={markdownContent}
          placeholderTextColor="#ccc"
          onChangeText={setMarkdownContent}
        />
        <Markdown style={styles.markdownContainer}>{markdownContent}</Markdown>

        <Button title="Publicar" onPress={handlePublish} color="#6A1B9A" />
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#333',
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
    color: '#FFF',
    marginBottom: 15,
    width: '100%',
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#FFF',
    backgroundColor: '#444',
    marginBottom: 15,
    borderRadius: 5,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 5,
  },
  contenido: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 25,
    width: '100%',
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 5,
  },
  markdownContainer: {
    marginVertical: 30,
    padding: 10,
    backgroundColor: '#444',
    borderRadius: 5,
    color: '#FFF',
    width: '100%',
  }
});
