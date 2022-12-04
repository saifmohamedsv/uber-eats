import { StyleSheet, View } from "react-native";
import React from "react";
import RestaurantItem from "./RestaurantItem";

const RestaurantList = ({ restaurants }) => {
  const renderedRestaurants = restaurants.map((restaurant) => (
    <RestaurantItem key={restaurant.id} {...restaurant} />
  ));
  return <View>{renderedRestaurants}</View>;
};

export default RestaurantList;

const styles = StyleSheet.create({});
