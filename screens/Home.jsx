import { Divider } from "react-native-elements";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/Home/HeaderTabs";
import SearchBar from "../components/Home/SearchBar";
import Categories from "../components/Home/Categories";
import RestaurantList from "../components/Home/RestaurantList";
import BottomTabs from "../components/Home/BottomTabs";
import axios from "axios";

const YELP_API_KEY =
  "Zn-5wv_Y7p8ls2XWd-bOrFfLtA-7aas0ddsylRcUfjF8-5wBK5U7OUf_KB5T8DaW_JuymdNa5EP2_9J8rklrfSaQjf41c1cjFn-bH-uFS8LiHSZ8iCG2YFxVZtJTY3Yx";

const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("New york");
  const [deliveryState, setDeliveryState] = useState("Delivery");

  const onSubmit = (term) => {
    setSearchTerm(term);
  };

  const getRestaurantsFromYelp = async () => {
    const {
      data: { businesses },
    } = await axios.get(
      `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${searchTerm}`,
      {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      }
    );

    setRestaurants(
      businesses.filter((bus) =>
        bus.transactions.includes(deliveryState.toLocaleLowerCase())
      )
    );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [searchTerm, deliveryState]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={deliveryState} setActiveTab={setDeliveryState} />
        <SearchBar onSubmit={onSubmit} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantList restaurants={restaurants} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
