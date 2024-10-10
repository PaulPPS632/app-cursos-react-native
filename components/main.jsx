// main.jsx

import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { fetchPosts } from "../PostService";
import Post from "./post";
import { Link } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

export function Main() {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchPosts();
      if (result) {
        setData(result);
      } else {
        setError("Failed to fetch data");
      }
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View style={styles.container}>
        <Text>No data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {data.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView>

      {/* Botones de navegación, fuera del mapa */}
      <View style={styles.navigationButtons}>
        <Link href="/cursos" asChild>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="book" size={24} color="white" />
            <Text style={styles.buttonText}>Cursos</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/postCurso" asChild>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="filetext1" size={24} color="white" />
            <Text style={styles.buttonText}>Post Curso</Text>
          </TouchableOpacity>
        </Link>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#333',
  },
  scrollViewContent: {
    paddingBottom: 60, // Añade padding adicional en la parte inferior si es necesario
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#444',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 16,
  },
});

