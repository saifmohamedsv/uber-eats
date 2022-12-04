import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const About = ({
  name,
  image_url,
  price,
  rating,
  review_count,
  categories,
}) => {
  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐️ (${review_count}+)`;
 
  return (
    <View>
      <RestaurantImage image={image_url} />
      <RestaurantTitle text={name} />

      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage = ({ image }) => {
  return (
    <Image source={{ uri: image }} style={{ width: "100%", height: 240 }} />
  );
};

const RestaurantTitle = ({ text }) => {
  return (
    <Text
      style={{
        fontWeight: "600",
        fontSize: 29,
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {text}
    </Text>
  );
};

const RestaurantDescription = ({ description }) => {
  return (
    <Text
      style={{
        fontWeight: "400",
        fontSize: 15,
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {description}
    </Text>
  );
};

export default About;

const styles = StyleSheet.create({});
