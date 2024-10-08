import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./components/main";

export default function App(){
  return (
    <SafeAreaProvider>
      <View style={styles.container} className="bg-gray-800">
        <StatusBar style="black" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:12
  },
});
