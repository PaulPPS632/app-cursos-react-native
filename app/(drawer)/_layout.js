import Drawer from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
    Feather,
    AntDesign,
    MaterialIcons,
    Ionicons,
  } from "@expo/vector-icons";
import { router } from 'expo-router';
  
const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                icon={() => <Ionicons name="person" size={24} color="black" />}
                 label={"Perfil"}
                onPress={() => router.push("/(drawer)/(tabs)/")}
            />
             <DrawerItem
                icon={() => <Feather name="about" size={24} color="black" />}
                 label={"Nosotros"}
                onPress={() => router.push("/about")}
            />
        </DrawerContentScrollView>
    );
};

export default function Layout() {
    return (
        <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{headerShown: false}}>
            <Drawer.Screen name="about" options={{ headerShown: true }} />
        </Drawer>
    )
}