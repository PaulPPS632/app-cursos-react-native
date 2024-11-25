// components/post.jsx
import React from 'react';
import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { styled } from "nativewind";
import { Link } from "expo-router";

const StyledPressable = styled(Pressable);

export default function Post({ post }) {
  return (
    <View style={styles.container}>
      <Link href={`/${post.first_screen}`} asChild>
        <StyledPressable style={styles.pressable} className="bg-gray-800">
          <View style={styles.innerContainer}>
            <Image source={{ uri: post.url_picture }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{post.title}</Text>
              <Text style={styles.description}>{post.description.slice(0, 100)}</Text>
              <Text style={styles.content}>{post.content}</Text>
              <Text style={styles.date}>{post.date}</Text>
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
    height: 150,
  },
  pressable: {
    borderColor: 'black',
    borderWidth: 2,
    borderLeftWidth: 2, 
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#2D3748', // color azul oscuro.
    padding: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    flexShrink: 1,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    marginTop: 5,
  },
  content: {
    color: 'white',
  },
  date: {
    color: 'white',
  },
});




// backgroundColor: '#333',