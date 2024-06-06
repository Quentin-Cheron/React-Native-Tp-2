import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { fetchUser } from "../../services/user.service";

import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

export default function AuthLayout() {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    supabase.auth.getSession().then((session) => {
      setSession(session.data.session.user.id);
    });
  }, []);

  useEffect(() => {
    if (session) {
      fetchUser(session).then((data) => {
        setUser(data[0]);
      });
    }
  }, [session]);

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
        name="restaurant"
        options={{
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#fff"
              style={{ marginLeft: 10 }}
              onPress={() => navigation.goBack()} // Vous pouvez définir ici la navigation pour revenir en arrière
            />
          ),
          tabBarButton: () => false,
          tabBarIcon: () => (
            <Ionicons name="checkmark" size={24} color="#045a4b" />
          ),
          headerStyle: { backgroundColor: "#06c167" },
          headerTintColor: "#fff",
        }}
      />
      <Tabs.Screen
        name="(payment)/checkout"
        options={{
          title: "Panier",
          tabBarIcon: () => <Ionicons name="cart" size={24} color="#045a4b" />,
          tabBarActiveBackgroundColor: "#06c167",
          tabBarActiveTintColor: "#fff",
        }}
      />
      <Tabs.Screen
        name="(auth)/index"
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
        name="(payment)/paymentConfirmation"
        options={{
          title: "Confirmation",
          tabBarButton: () => false,
          tabBarIcon: () => (
            <Ionicons name="checkmark" size={24} color="#045a4b" />
          ),
          tabBarActiveBackgroundColor: "#06c167",
          tabBarActiveTintColor: "#fff",
        }}
      />

      <Tabs.Screen
        name="(admin)/add"
        options={{
          title: "Admin",
          ...(user && user.role === 0 ? { tabBarButton: () => true } : {}),
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color="#045a4b" />
          ),
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#06c167"
              style={{ marginLeft: 10 }}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "(admin)/add" }],
                })
              }
            />
          ),
          tabBarActiveBackgroundColor: "#06c167",
          tabBarActiveTintColor: "#fff",
        }}
      />
    </Tabs>
  );
}
