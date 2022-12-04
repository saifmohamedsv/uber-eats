import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import React, { useState } from "react";

export default function ({activeTab, setActiveTab}) {

  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 24 : 0,
      }}
    >
      <HeaderButton
        title={"Delivery"}
        onPress={setActiveTab}
        activeTab={activeTab}
      />
      <HeaderButton
        title={"Pickup"}
        onPress={setActiveTab}
        activeTab={activeTab}
      />
    </View>
  );
}

const HeaderButton = ({ title, onPress, activeTab }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(title)}
      style={{
        backgroundColor: activeTab === title ? "black" : "white",
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 30,
      }}
    >
      <Text
        style={{
          color: activeTab === title ? "white" : "black",
          fontSize: 20,
          fontWeight: "900",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
