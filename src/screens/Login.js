import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handling log in
  function handleLogin() {
    if (email.length !== 0 && password.length !== 0) {
      return navigation.navigate("Screens");
    } else {
      return Alert.alert(
        "Alert!",
        "Please enter email and password before proceeding!"
      );
    }
  }

  return (
    <ScrollView style={styles.view}>
      {/* <SafeAreaView> */}
      <Text style={styles.txt}>Sign In</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email"
      />
      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Password"
        secureTextEntry={true}
      />
      <View style={styles.action}>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signup}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLogin()} style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
      {/* </SafeAreaView> */}
    </ScrollView>
  );
};

// Create the style here
const styles = StyleSheet.create({
  view: {
    margin: 12,
    marginBottom: 25,
    marginTop: 45,
  },
  txt: {
    marginTop: 10,
    fontSize: 25,
  },
  input: {
    height: 40,
    marginTop: 25,
    borderWidth: 1,
    padding: 10,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  action: {
    marginTop: 45,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signup: {
    color: "#21BCFC",
    textDecorationLine: "underline",
    marginTop: "auto",
    marginBottom: "auto",
  },
  button: {
    height: 50,
    width: 125,
    borderRadius: 45,
    backgroundColor: "#21BCFC",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  buttonText: {
    color: "white",
  },
});

export default Login;
