import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Homepage from "../screens/Homepage";

const Footer = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer style={styles.footer}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Homepage} />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  footer: {
    positon: "absolute",
    bottom: 0,
  },
});

export default Footer;
