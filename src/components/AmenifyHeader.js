import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AmenifyHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.username}>Hello, Username</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.logout}>logout</Text>
      </TouchableOpacity>
    </View>
  );
};

// Style section of the headers component
const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: "#C4D7E5",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 87.5,
    paddingTop: 65,
    paddingLeft: 10,
    paddingRight: 15,
  },
  logout: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default AmenifyHeader;
