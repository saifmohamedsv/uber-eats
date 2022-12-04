import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "react-native-vector-icons";

const icons = [
  { text: "Home", icon: "home" },
  { text: "Browse", icon: "search" },
  { text: "Grocery", icon: "shopping-bag" },
  { text: "Orders", icon: "receipt" },
  { text: "Account", icon: "user" },
];

const BottomTabs = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 30,
        margin: 10,
        justifyContent: "space-between",
      }}
    >
      {icons.map(({ text, icon }) => (
        <IconButton key={text} icon={icon} text={text} />
      ))}
    </View>
  );
};

const IconButton = ({ icon, text }) => {
  return (
    <TouchableOpacity style={{ alignItems: "center" }}>
      <FontAwesome5
        name={icon}
        size={25}
        style={{ marginBottom: 3 }}
        color={"gray"}
      />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
export default BottomTabs;

const styles = StyleSheet.create({});
