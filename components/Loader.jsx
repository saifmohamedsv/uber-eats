import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <AnimatedLottieView
        style={{
          height: 200,
        }}
        source={require("../assets/animations/scanner.json")}
        autoPlay
        speed={1}
        loop={true}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
