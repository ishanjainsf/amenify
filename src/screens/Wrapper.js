import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import Login from "./Login";
import Signup from "./Signup";

const Wrapper = () => {
  return (
    <View style={styles.loginWrapperStyle}>
      <ImageBackground
        source={require("../../assets/bg-img.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <ScrollView style={styles.formLogin}>
          <Login />
          {/* <Signup /> */}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  loginWrapperStyle: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  image: {
    // flex: 1,
    justifyContent: "center",
    height: "100%",
  },
  textStyle: {
    color: "red",
  },
  formLogin: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 5,
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default Wrapper;
