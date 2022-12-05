import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const MenuItem = ({ food, name }) => {
  const cartItems = useSelector((state) => state.cart.selectedItems.cartItems);
  const dispatch = useDispatch();

  const currentFood = cartItems?.find((item) => item.title === food.title);

  const selectItem = (item, checkBoxValue) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, restaurantName: name, checkBoxValue },
    });
  };

  return (
    <View style={styles.menuItem}>
      <BouncyCheckbox
        iconStyle={{ borderRadius: 0, borderColor: "gray" }}
        isChecked={currentFood?.checkBoxValue}
        fillColor="green"
        onPress={(state) => {
          selectItem(food, state);
        }}
      />
      <FoodInfo {...food} />
      <FoodImage image={food.image} />
    </View>
  );
};

const FoodInfo = ({ title, description, price }) => (
  <View style={{ width: 240 }}>
    <View style={{ justifyContent: "space-evenly" }}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </View>
  </View>
);

const FoodImage = ({ image }) => (
  <View>
    <Image
      source={{ uri: image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);

export default MenuItem;

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    margin: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitle: {
    fontWeight: "600",
    fontSize: 19,
  },
});
