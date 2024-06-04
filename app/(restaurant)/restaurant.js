import { FlatList, StyleSheet } from "react-native";
import { Text, View, Button } from "react-native";
import { Image } from "react-native-elements";

export default function RestaurantScreen() {
  const restaurant = {
    title: "Nom du restaurant",
    address: "Adresse du restaurant",
    description: "Description du restaurant",
    Fee: "10€",
    time: "30min",
    products: [
      {
        name: "Produit 1",
        price: "10€",
        description: "Description du produit 1",
        favoris: "1300",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Produit 2",
        price: "15€",
        favoris: "1500",
        description: "Description du produit 2",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Produit 3",
        price: "20€",
        favoris: "2000",
        description: "Description du produit 3",
        image: "https://via.placeholder.com/150",
      },
    ],
  };

  return (
    <View>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>{restaurant.title}</Text>
        <Text style={styles.description}>{restaurant.address}</Text>
        <Text style={styles.address}>{restaurant.description}</Text>
      </View>
      <View>
        <Text>{restaurant.Fee}</Text>
        <Text>{restaurant.time}</Text>
      </View>
      <Text>Produits:</Text>
      <FlatList
        data={restaurant.products}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.description}</Text>
            <Text>{item.favoris}</Text>
            <Image source={{ uri: item.image }} />
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
  },
  address: {
    textAlign: "center",
  },
});
