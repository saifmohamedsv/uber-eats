import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import MenuItem from "./MenuItem";
import { Divider } from "react-native-elements";

const MenuItems = ({ name, foods, hideCheckBox }) => {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View>
        {foods.map((food) => (
          <View key={food.title}>
            <MenuItem food={food} name={name} hideCheckBox={hideCheckBox} />
            <Divider
              width={0.5}
              orientation={"vertical"}
              style={{ marginHorizontal: 20 }}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MenuItems;

const styles = StyleSheet.create({});
