import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Image } from "expo-image";

import { useFonts } from "expo-font";

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { fetchRestaurants } from "../../services/restaurant.service";

export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState([]);

  const navigation = useNavigation();

  const handleSelect = (id) => {
    navigation.navigate("restaurant", { id });
  };

  useEffect(() => {
    fetchRestaurants().then((data) => {
      setRestaurants(data);
    });
  }, []);

  const [fontsLoaded] = useFonts({
    "OpenSans-Bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Regular": require("../../assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={(e) => handleSelect(item.id)}
          >
            <Image
              source={{ uri: item.restaurant_image }}
              style={styles.image}
            />
            <View style={styles.header}>
              <Text style={styles.name}>{item.restaurant_name}</Text>
              <View style={styles.noteContenair}>
                <Text style={styles.note}> {item.restaurant_favoris}</Text>
                <Ionicons name="star" size={10} />
              </View>
            </View>
            <Text style={styles.delivrery}>
              Frais de livraison de {item.restaurant_fees} €
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: "100%",
    height: 200,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "OpenSans-Regular",
  },
  delivrery: {
    fontSize: 14,
  },
  note: {
    paddingRight: 3,
  },
  noteContenair: {
    flexDirection: "row",
    alignItems: "center",
  },
});
