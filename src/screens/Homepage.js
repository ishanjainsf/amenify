import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AmenifyHeader from "../components/AmenifyHeader";
import Login from "./Login";

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.home}>
      <AmenifyHeader />
      <View style={styles.homepagecontent}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.content}>HOME SCREEN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    position: "relative",
    width: "100%",
    height: "100%",
  },
  homepagecontent: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  content: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 40,
  },
});

export default Homepage;
