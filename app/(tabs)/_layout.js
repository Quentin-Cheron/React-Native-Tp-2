import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function AuthLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: () => <Ionicons name="home" size={24} color="#045a4b" />,
          tabBarActiveBackgroundColor: "#06c167",
          tabBarActiveTintColor: "#fff",
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Auth",
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color="#045a4b" />
          ),
          tabBarActiveBackgroundColor: "#06c167",
          tabBarActiveTintColor: "#fff",
        }}
      />
      <Tabs.Screen
        name="checkout"
        options={{
          title: "Panier",
          tabBarIcon: () => <Ionicons name="cart" size={24} color="#045a4b" />,
          tabBarActiveBackgroundColor: "#06c167",
          tabBarActiveTintColor: "#fff",
        }}
      />
    </Tabs>
  );
}
