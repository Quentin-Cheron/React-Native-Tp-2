import React, { useState } from "react";
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

const restaurants = [
  {
    name: "Restaurant 1",
    id: "1",
    image:
      "https://www.ridesharingforum.com/uploads/default/original/2X/5/5aac259337e048fdca663a0418f40d1366bc4cda.jpg",
    delivrery: "Frais de livraison offerts",
    note: "4.5",
  },
  {
    name: "Restaurant 2",
    id: "2",
    image:
      "https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/Moshi-Moshi-resize.jpg?itok=1sbN41IN",
    delivrery: "Frais de livraison de 2€",
    note: "4.8",
  },
  {
    name: "Restaurant 3",
    id: "3",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/a4b44877b513cef87c20e4db5d901ed9/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
    delivrery: "Frais de livraison de 5€",
    note: "4.2",
  },
];

export default function HomeScreen() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const navigation = useNavigation();

  const handleSelect = () => {
    navigation.navigate("(restaurant)/restaurant");
  };

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
          <TouchableOpacity style={styles.item} onPress={handleSelect}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.header}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.note}</Text>
            </View>
            <Text style={styles.delivrery}>{item.delivrery}</Text>
          </TouchableOpacity>
        )}
      />
      {selectedRestaurant && <Text>Selected: {selectedRestaurant.name}</Text>}
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
});
