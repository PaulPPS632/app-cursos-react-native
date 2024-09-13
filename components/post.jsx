import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { styled } from "nativewind";
import { Link } from "expo-router";
const StyledPressable = styled(Pressable);
export default function Post({ post }) {
  return (
    <Link href={`/${post.id}`} asChild>
      <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-900/10 rounded-xl p-4  ">
        <View style={styles.container_cart_post} className="flex-row gap-4">
          <Image source={{ uri: post.url_picture }} style={styles.image} />
          <View className="flex-shrink">
            <Text className="text-white font-bold">{post.title}</Text>
            <Text className="text-white mt-2 flex-shrink">{post.description.slice(0,100)}</Text>
            <Text className="text-white">{post.content}</Text>
            <Text className="text-white">{post.date}</Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}
const styles = StyleSheet.create({
  image:{
    width:100,
    height:100
  }
});
