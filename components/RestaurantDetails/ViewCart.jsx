import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { withNavigation } from "react-navigation";
import { useSelector } from "react-redux";

const ViewCart = () => {
  const cartData = useSelector((state) => state.cart.selectedItems.cartItems);

  if (!cartData.length) return "";

  const prices = cartData.map((item) => item.price.split("$")[1]);
  const totalPrice = prices.reduce((a, b) => parseInt(a) + parseInt(b));

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        bottom: 24,
        position: "absolute",
        zIndex: 999,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            padding: 12,
            backgroundColor: "black",
            alignItems: "center",
            width: 300,
            borderRadius: 30,
            position: "relative",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>
            View Cart - {totalPrice}$
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default withNavigation(ViewCart);

const styles = StyleSheet.create({});
