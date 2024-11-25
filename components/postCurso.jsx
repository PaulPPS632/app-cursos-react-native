// components/postCurso.jsx
import React, { useState, useEffect, useContext   } from 'react';
import { View, Button, StyleSheet, ScrollView, TextInput, ActivityIndicator, Text, Image, TouchableOpacity } from "react-native";
import Markdown from 'react-native-markdown-display';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native'; 
import { fetchTipoPosts } from '../service/tipoPostService';
import { createPost } from "../PostService";

export default function PostCurso() {
  const [title, setTitle] = useState('');
  const [nivel, setNivel] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  //const [markdownContent, setMarkdownContent] = useState('');
  const [tipoPosts, setTipoPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation(); // Usa useNavigation

  useEffect(() => {
    const cargarTipos = async () => {
      const tipos = await fetchTipoPosts();
      setTipoPosts(tipos);

      // Inicializar `nivel` con el primer tipo si existen tipos disponibles
      if (tipos.length > 0) {
        setNivel(tipos[0].id);
      }

      setLoading(false);
    };

    cargarTipos();
  }, []);

  const handleSelectImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (permissionResult.granted === false) {
      alert("Se necesita permiso para acceder a la galería.");
      return;
    }
  
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
  
    if (!result.canceled) {
      console.log("Imagen seleccionada:", result.assets[0]);
      setImage(result.assets[0]);
    }
    
  };

  const handlePublish = async () => {
    if (title && nivel && description) {
        const result = await createPost(title, nivel, description, image);
        if (result) {
            alert("Post creado exitosamente!");
            navigation.navigate('postLeccion', { postId: result.id, onRefresh: () => setDataUpdated(true) });
        } else {
            alert("Error al crear el post");
        }
    } else {
        alert("Por favor completa todos los campos");
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6A1B9A" />
        <Text>Cargando tipos de post...</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      
      <ScrollView contentContainerStyle={styles.content}>
        
        <Text style={styles.titlePortada}>Portada del Curso</Text>

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
          {tipoPosts.map((tipo) => (
            <Picker.Item key={tipo.id} label={tipo.descripcion} value={tipo.id} />
          ))}
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

        <TouchableOpacity style={styles.imageButton} onPress={handleSelectImage}>
          <Text style={styles.imageButtonText}>Seleccionar Imagen</Text>
        </TouchableOpacity>

        {image && <Image source={{ uri: image.uri }} style={styles.imagePreview} />}

        <Button title="Publicar" onPress={handlePublish} color="#6A1B9A" />
        
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
  content: {
    flexGrow: 1,
    padding: 20,
  },
  
  titlePortada: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'left',
    marginBottom: 20, // Añade un espacio debajo del título
  },
  title: {
    fontSize: 20,
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
  
  imageButton: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  imageButtonText: {
    color: "#000",
    textAlign: "center",
    alignItems: 'center',
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginBottom: 15,
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
