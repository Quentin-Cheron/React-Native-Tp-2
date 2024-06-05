import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function PaymentConfirmation() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Your payment has been processed successfully!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  message: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#06c167",
    textAlign: "center",
  },
});
