import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OrderItem = ({ item }) => {
  const { title, price } = item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#999",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "600" }}>{title}</Text>
      <Text style={{ fontSize: 16, opacity: 0.7 }}>{price}</Text>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});
