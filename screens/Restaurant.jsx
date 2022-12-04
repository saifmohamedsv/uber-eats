import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/RestaurantDetails/About";
import MenuItems from "../components/RestaurantDetails/MenuItems";
import ViewCart from "../components/RestaurantDetails/ViewCart";

const Restaurant = ({ navigation: { getParam } }) => {
  const data = getParam("restaurantData");

  return (
    <View style={{ flex: 1 }}>
      <About {...data} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems {...data} />
      <ViewCart />
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({});
