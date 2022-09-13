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

const Settings = () => {
  return (
    <View style={styles.home}>
      <AmenifyHeader />
      <View style={styles.homepagecontent}>
        <Text style={styles.content}>Settings</Text>
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

export default Settings;
