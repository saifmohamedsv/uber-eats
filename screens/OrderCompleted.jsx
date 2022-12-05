import { StyleSheet, Text, SafeAreaView, Platform, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { useSelector } from "react-redux";
import MenuItems from "../components/RestaurantDetails/MenuItems";
import { useEffect } from "react";
import { query, orderBy, limit, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

const OrderCompleted = () => {
  const { restaurantName, cartItems } = useSelector(
    (state) => state.cart.selectedItems
  );
  const [lastOrder, setLastOrder] = useState(null);

  const prices = cartItems.map((item) => Number(item.price.split("$")[1]));
  const reducedPrices = prices.reduce((a, b) => a + b);

  const totalPrice =
    Platform.OS === "android"
      ? "$" + reducedPrices.toFixed(2)
      : reducedPrices.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });

  const handleData = async () => {
    const ordersRef = collection(db, "/orders");
    const q = query(ordersRef, orderBy("createdAt", "desc"), limit(1));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setLastOrder(doc.data().items);
    });
  };

  useEffect(() => {
    handleData();
  }, []);

  if (!lastOrder) return "";
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ margin: 15, flex: 1, alignItems: "center" }}>
        <LottieView
          style={{
            height: 100,
            width: 200,
            alignSelf: "center",
            marginBottom: 20,
            marginTop: Platform.OS === "android" && 12,
          }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
          Your order from{" "}
          <Text style={{ color: "green" }}>{restaurantName}</Text> have been
          successfully placed for{" "}
          <Text style={{ color: "green" }}>{totalPrice}</Text>...
        </Text>

        <Text style={{ fontSize: 14, fontWeight: "500", color: "green" }}>
          Your order items:
        </Text>

        <ScrollView
          style={{ width: "100%" }}
          showsHorizontalScrollIndicator={false}
        >
          <MenuItems
            name={restaurantName}
            foods={lastOrder}
            hideCheckBox={true}
          />

          <LottieView
            style={{
              height: 250,
              alignSelf: "center",
              marginBottom: 20,
            }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
            loop={true}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({});
