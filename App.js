import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./components/main";
import { PostProvider } from './context/PostContext';
import { useState } from "react";

import { RefreshProvider } from './service/context/PostContext';

export default function App() {
  return (
    <RefreshProvider>
      <RefreshProvider>
        <SafeAreaProvider>
          <View style={styles.container}>
            <StatusBar style="light" backgroundColor="transparent" translucent={true} />
            <Main />
          </View>
        </SafeAreaProvider>
      </RefreshProvider>
    </RefreshProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});
