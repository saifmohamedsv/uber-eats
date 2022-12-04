import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { withNavigation } from "react-navigation";

// Main Component
const RestaurantItem = withNavigation((props) => {
  const {
    name,
    rating,
    image_url,
    navigation: { navigate },
  } = props;

  return (
    <TouchableOpacity
      onPress={() => {
        navigate("Restaurant", { restaurantData: { ...props } });
      }}
      activeOpacity={1}
      style={{ marginBottom: 30 }}
    >
      <View style={{ marginTop: 10, backgroundColor: "#fff", padding: 15 }}>
        <RestaurantImage image={image_url} />
        <RestaurantInfo name={name} rating={rating} />
      </View>
    </TouchableOpacity>
  );
});

// Sub component - Restaurant Image
const RestaurantImage = ({ image }) => {
  return (
    <>
      <Image
        style={{ width: "100%", height: 180, borderRadius: 6 }}
        source={{
          uri: image,
        }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons
          name={"heart-outline"}
          size={25}
          color="white"
        />
      </TouchableOpacity>
    </>
  );
};

// Sub component - Restaurant Info
const RestaurantInfo = ({ name, rating, reviews }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>{name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>25 - 30 • min</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Text>{rating}</Text>
      </View>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({});
