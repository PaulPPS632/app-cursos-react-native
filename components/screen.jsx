import { useEffect, useState } from "react";
import { fetchScreens_ByPostId } from "../PostService";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from "react-native";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CodeHighlighter from "react-native-code-highlighter";

export function Screen({ data }) {
  return (
    <View className="bg-gray-800">
      <ScrollView>
        {data[0].ScreenPosts.map((screenPost) => (
          <View key={screenPost.id} style={styles.screenPost}>
            <Text className="text-white font-bold">{screenPost.title}</Text>
            <Text className="text-white">{screenPost.description}</Text>
            <Text className="text-white">Code ({screenPost.content.language}):</Text>
            <Text className="text-white">{screenPost.date}</Text>
            <View className="my-8 mx-5 p-3 bg-neutral-800 rounded-xl">
              <CodeHighlighter
                hljsStyle={atomOneDarkReasonable}
                containerStyle={styles.codeContainer}
                textStyle={styles.text}
                language={screenPost.content.language}
                style={styles.Container}
              >
                {screenPost.content.code}
              </CodeHighlighter>
            </View>
            <Image
              source={{ uri: screenPost.url_picture }}
              style={styles.image}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  codeContainer: {
    backgroundColor: "#272727",
    width: "100%",
  },
  Container: {},
});
