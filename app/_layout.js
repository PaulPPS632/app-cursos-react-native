// Envuelve toda la aplicación:

import { View } from "react-native";
import { Stack } from "expo-router";

export default function Layout() {
    return (
        <View style={{ flex: 1, backgroundColor: "gray" }}>
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: "black" },
                    headerTintColor: "white",
                }}
            />
        </View>
    );
}
