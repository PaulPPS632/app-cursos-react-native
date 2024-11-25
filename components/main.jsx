// components/main.jsx
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, ScrollView, StyleSheet, RefreshControl } from "react-native";
import { fetchPosts } from "../PostService";
import Post from "./post";

export function Main({ refreshData }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  
  const loadData = async () => {
    setLoading(true);
    const result = await fetchPosts();
    if (result) {
      setData(result);
    } else {
      setError("Failed to fetch data");
    }
    setLoading(false);
  };

  // Cargar datos al montar el componente
  useEffect(() => {
    loadData();
  }, [refreshData]);

  // Lógica para refrescar al hacer pull-to-refresh
  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  if (loading && !refreshing) {
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
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {data.map((post) => (
          <Post key={post.id} post={post} />
        ))}
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
  scrollViewContent: {
    paddingBottom: 60, 
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
