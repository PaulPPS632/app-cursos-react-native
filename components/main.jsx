// components/main.jsx

import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import { fetchPosts } from "../PostService";
import Post from "./post";
import NavigationButtons from "../utils/navigation/NavigationButtons";

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

      <NavigationButtons />

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 0,
    backgroundColor: '#333',
  },
  scrollViewContent: {
    paddingBottom: 60, // Añade padding adicional en la parte inferior si es necesario
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    marginTop: 20,
    marginBottom: 1,
    backgroundColor: '#222',
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
