import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import { withNavigation } from "react-navigation";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { db } from "../../firebase";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

const ViewCart = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { cartItems, restaurantName } = useSelector(
    (state) => state.cart.selectedItems
  );

  if (!cartItems.length) return "";

  const prices = cartItems.map((item) => Number(item.price.split("$")[1]));
  const reducedPrices = prices.reduce((a, b) => a + b);

  const totalPrice =
    Platform.OS === "android"
      ? "$" + reducedPrices.toFixed(2)
      : reducedPrices.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });

  const handleOrder = async () => {
    const coll = collection(db, "/orders");
    await addDoc(coll, {
      items: cartItems,
      restaurantName,
      createdAt: serverTimestamp(),
    });
    setModalVisible(false);
    navigation.navigate("OrderCompleted");
  };

  const modalCheckoutContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {cartItems?.map((item) => (
              <OrderItem key={item.title} item={item} />
            ))}
            <View style={styles.subTotalContainer}>
              <Text style={styles.subTotalText}>Sub Total</Text>
              <Text>{totalPrice}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                onPress={handleOrder}
                style={{
                  backgroundColor: "#000",
                  borderRadius: 30,
                  padding: 13,
                  alignItems: "center",
                  width: 300,
                }}
              >
                <Text style={{ color: "#fff", fontSize: 20 }}>Checkout</Text>
                <Text
                  style={{
                    position: "absolute",
                    color: "#fff",
                    right: 20,
                    fontSize: 15,
                    top: 17,
                  }}
                >
                  {reducedPrices ? totalPrice : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        transparent
      >
        {modalCheckoutContent()}
      </Modal>
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
              padding: 15,
              flexDirection: "row",
              justifyContent: "flex-end",
              backgroundColor: "black",
              alignItems: "center",
              width: 300,
              borderRadius: 30,
              position: "relative",
            }}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ color: "#fff", fontSize: 20, marginRight: 20 }}>
              View Cart
            </Text>
            <Text style={{ fontSize: 20, color: "#fff" }}>{totalPrice}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default withNavigation(ViewCart);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modalCheckoutContainer: {
    backgroundColor: "#fff",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
  },
  subTotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  subTotalText: {
    textAlign: "left",
    fontWeight: "600",
    marginBottom: 10,
    fontSize: 15,
  },
});
