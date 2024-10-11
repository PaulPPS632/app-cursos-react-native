import React from 'react';
import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { styled } from "nativewind";
import { Link } from "expo-router";

const StyledPressable = styled(Pressable);

export default function Post({ post }) {
  return (
    <View style={styles.container}>
      <Link href={`/${post.first_screen}`} asChild>
        <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-800 rounded-xl p-4">
          <View className="flex-row gap-4 bg-gray-800">
            <Image source={{ uri: post.url_picture }} style={styles.image} />
            <View className="flex-shrink">
              <Text className="text-white font-bold">{post.title}</Text>
              <Text className="text-white mt-2 flex-shrink">{post.description.slice(0, 100)}</Text>
              <Text className="text-white">{post.content}</Text>
              <Text className="text-white">{post.date}</Text>
            </View>
          </View>
        </StyledPressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#333',
    //width: 395, // Ancho
    height: 150, // Altura 
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
