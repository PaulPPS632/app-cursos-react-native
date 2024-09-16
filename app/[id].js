import { Link, Stack, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import {fetchScreen, fetchScreens_ByPostId } from "../PostService.js";
import { useEffect, useState } from "react";
import { Screen } from "../components/screen.jsx";
export default function Detail(){
    const {id} = useLocalSearchParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const getData = async () => {
        const result = await fetchScreen(id);
        if (result) {
          setData(result); // Suponiendo que la respuesta es un array con un solo objeto
        } else {
          setError("Failed to fetch data");
        }
        setLoading(false);
        console.log(result);
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
      <View className="flex-1 justify-center items-center bg-gray-800">
        <Stack.Screen options={{ 
          title: data.title, 
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#111827" },
           }} />
        <Screen data={data}/>
      </View>  
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  