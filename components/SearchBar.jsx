import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons, AntDesign } from "react-native-vector-icons";

const SearchBar = () => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <Ionicons
            name={"location-sharp"}
            size={24}
            style={{ marginLeft: 10 }}
          />
        )}
        renderRightButton={() => (
          <View
            style={{
              padding: 9,
              backgroundColor: "#fff",
              borderRadius: 30,
              marginRight: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AntDesign
              name={"clockcircle"}
              size={16}
              style={{ marginRight: 12 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
