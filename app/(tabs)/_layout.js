import { Tabs, Stack } from "expo-router";
import { HomeIcon, InfoIcon, AgregarIcon, UserIcon } from "../../utils/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Desactivar encabezado aquí
        tabBarStyle: { backgroundColor: "#000" },
        tabBarActiveTintColor: "#1DA1F2",
      }}
    >
      <Tabs.Screen
        name="cursos"
        options={{
          title: "Cursos",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="postCurso"
        options={{
          title: "Agregar Curso",
          tabBarIcon: ({ color }) => <AgregarIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Nosotros",
          tabBarIcon: ({ color }) => <InfoIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
