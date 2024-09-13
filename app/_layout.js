import { Text, View } from "react-native";
import { Stack } from "expo-router";
export default function Layout(){
    return (
        <View className="flex-1">
            <Stack
            screenOptions={{
                headerStyle:{backgroundColor: "black"},
                headerTintColor: "white"
                
            }}/>
        </View>
    );
}