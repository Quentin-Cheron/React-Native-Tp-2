import { FlatList, ScrollView, StyleSheet, Button } from "react-native";
import { Text, View } from "react-native";
import { Image } from "expo-image";

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
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              contentFit="contain"
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <Text style={styles.productFavoris}>{item.favoris} favoris</Text>
              <Button color="#06c167" title="Ajouter au panier" />
            </View>
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
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginVertical: 5,
  },
  address: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginBottom: 15,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  titleProduit: {
    margin: 20,
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  product: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  productInfo: {
    marginTop: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  productPrice: {
    fontSize: 16,
    color: "#06c167",
    marginVertical: 5,
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  productFavoris: {
    fontSize: 14,
    color: "#999",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});
