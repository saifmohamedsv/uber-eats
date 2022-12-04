import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const images = [
  { image: require("../../assets/images/shopping-bag.png"), text: "Pick-up" },
  { image: require("../../assets/images/bread.png"), text: "Bakery Items" },
  { image: require("../../assets/images/deals.png"), text: "Deals" },
  { image: require("../../assets/images/coffee.png"), text: "Coffee & Tea" },
  { image: require("../../assets/images/soft-drink.png"), text: "Soft Drinks" },
  { image: require("../../assets/images/fast-food.png"), text: "Fast Foods" },
  { image: require("../../assets/images/desserts.png"), text: "Desserts" },
];

const Categories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        paddingVertical: 10,
        paddingLeft: 20,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images?.map((img) => (
          <View
            key={img.text}
            style={{ alignItems: "center", marginRight: 30 }}
          >
            <Image
              style={{ width: 50, height: 40, resizeMode: "contain" }}
              source={img.image}
            />
            <Text style={{ fontWeight: "900", fontSize: 13 }}>{img.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
