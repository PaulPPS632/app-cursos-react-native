// components/postLeccion.jsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, Text } from 'react-native';
import { useRoute, useNavigation  } from '@react-navigation/native';
import { createLeccion } from "../service/postLeccionService";

import Markdown from 'react-native-markdown-display';
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CodeHighlighter from "react-native-code-highlighter";

export default function PostLeccion() {
    const route = useRoute();
    const { postId } = route.params; // Obtienes el ID del post (curso)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    const navigation = useNavigation(); // Hook para manejar navegación
    
    const handlePublishLeccion = async () => {
        if (title && description && content) {
            const result = await createLeccion(postId, title, description, content);
            if (result) {
                alert("Lección creada exitosamente!");
                navigation.navigate('cursos'); // Redirigir a Cursos
            } else {
                alert("Error al crear la lección");
            }
        } else {
            alert("Por favor completa todos los campos");
        }
    };

    return (
        <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.titlePortada}>Lección del Curso</Text>
                
                {/* Campo para el título */}
                <TextInput
                    style={styles.input}
                    placeholder="Título de la lección"
                    value={title}
                    onChangeText={setTitle}
                    placeholderTextColor="#ccc"
                />

                {/* Campo para la descripción */}
                <TextInput
                    style={styles.input}
                    placeholder="Descripción"
                    value={description}
                    onChangeText={setDescription}
                    placeholderTextColor="#ccc"
                />

                {/* Campo para el contenido (Markdown) */}
                <TextInput
                    style={styles.textArea}
                    placeholder="Escribe el contenido en formato Markdown"
                    value={content}
                    onChangeText={setContent}
                    multiline
                    placeholderTextColor="#ccc"
                />

                {/* Vista previa del Markdown */}
                <Text style={styles.previewTitle}>Vista Previa:</Text>
                <View style={styles.markdownPreview}>
                    <Markdown 
                        style={{ text: { color: "#e8e8e8" } }}>
                        {content}
                    </Markdown>
                </View>

                {/* Botón para publicar */}
                <Button title="Crear Lección" onPress={handlePublishLeccion} color="#6A1B9A" />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
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
        marginBottom: 20,
    },
    input: {
        fontSize: 16,
        backgroundColor: '#444',
        color: '#FFF',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    textArea: {
        fontSize: 16,
        backgroundColor: '#444',
        color: '#FFF',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        height: 150,
        textAlignVertical: 'top',
    },
    previewTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 10,
    },
    markdownPreview: {
        backgroundColor: '#222',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
});

// const markdownStyles = {
//     body: {
//         color: '#FFF',
//         fontSize: 16,
//     },
//     heading1: {
//         color: '#FFD700',
//         fontSize: 24,
//     },
//     heading2: {
//         color: '#FF8C00',
//         fontSize: 20,
//     },
//     link: {
//         color: '#87CEEB',
//     },
//     code_inline: {
//         backgroundColor: '#555',
//         color: '#FFF',
//         borderRadius: 4,
//         paddingHorizontal: 4,
//         fontFamily: 'monospace',
//     },
// };
