import { FlatList, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-elements";

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
        image:
          "https://www.ridesharingforum.com/uploads/default/original/2X/5/5aac259337e048fdca663a0418f40d1366bc4cda.jpg",
      },
      {
        name: "Produit 2",
        price: "15€",
        favoris: "1500",
        description: "Description du produit 2",
        image:
          "https://www.ridesharingforum.com/uploads/default/original/2X/5/5aac259337e048fdca663a0418f40d1366bc4cda.jpg",
      },
      {
        name: "Produit 3",
        price: "20€",
        favoris: "2000",
        description: "Description du produit 3",
        image:
          "https://www.ridesharingforum.com/uploads/default/original/2X/5/5aac259337e048fdca663a0418f40d1366bc4cda.jpg",
      },
    ],
  };

  return (
    <>
      <ScrollView>
        <View>
          <View style={styles.containerHeader}>
            <Text style={styles.title}>{restaurant.title}</Text>
            <Text style={styles.description}>{restaurant.address}</Text>
            <Text style={styles.address}>{restaurant.description}</Text>
          </View>
          <View style={styles.info}>
            <Text>Frais: {restaurant.Fee}</Text>
            <Text>Temps: {restaurant.time}</Text>
          </View>
          <Text style={styles.titleProduit}>Produits:</Text>
        </View>
      </ScrollView>
      <FlatList
        data={restaurant.products}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.description}</Text>
            <Text>{item.favoris}</Text>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              contentFit="contain"
            />
            <Button title="Ajouter au panier" style={styles.button} />
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
    </>
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
  product: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    marginHorizontal: 20,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 20,
  },
  titleProduit: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
  },
  button: {
    margin: 10,
  },
});
