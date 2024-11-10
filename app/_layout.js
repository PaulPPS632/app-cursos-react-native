// app/_layout.js
import { Pressable, View, SafeAreaView, StatusBar } from "react-native";
import { Link, Stack } from "expo-router";
import { UserIcon } from "../utils/Icons";

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "gray" }}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={{ flex: 1, paddingTop: 0 }}>

        <Stack
          screenOptions={{
            headerTransparent: false, 
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
            headerTitle: "Home entrada", // Título fijo
            headerBackVisible: false,
            headerRight: () => (
              <Link href="/perfil" asChild>
                <Pressable>
                  <UserIcon />
                </Pressable>
              </Link>
            ),
          }}
        />

      </View>
    </SafeAreaView>
  );
}
