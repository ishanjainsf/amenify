import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import { gql, useMutation, useQuery } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser(
    $email: String
    $firstName: String
    $lastName: String
    $password: String
  ) {
    createUser(
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
    ) {
      success
      token {
        accessToken
        expiresIn
        refreshToken
      }
    }
  }
`;

const Signup = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [unitNum, setUnitNum] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isToggle, setIsToggle] = useState(false);

  // Handle sign up

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  console.log("create user : ", createUser);

  // Handle Sign up
  function handleSignup() {
    /* NOTE : The given API link is not working as expected, hence developing the static pages with the navigation */
    if(email.length != 0 && firstName.length != 0 && lastName.length !== 0 && password.length !== 0){
      if(password.length < 7){
        return Alert.alert("Warning", "Password must be 7 characters or longer.")
      }
      return navigation.navigate("Login")
    }
    else{
      return Alert.alert("Warning!", "Please enter all the required information.")
    }
    // createUser({
    //   variables: {
    //     email: "ishan.engg1523@gmail.com",
    //     firstName: "Ishan",
    //     lastName: "Jain",
    //     password: "ish@nJain11",
    //   },
    // })
    //   .then(({ data }) => {
    //     return Alert.alert(data);
    //   })
    //   .catch((err) => {
    //     return Alert.alert(
    //       "Error",
    //       "Not able to create a user. Please try again later!"
    //     );
    //   });
  }

  // console.log(data, loading, error);

  return (
    <ScrollView style={styles.view}>
      {/* <SafeAreaView> */}
      <Text style={styles.txt}>Create an account</Text>
      <View style={styles.row}>
        <TextInput
          value={firstName}
          onChangeText={setFirstName}
          style={styles.name}
          underlineColorAndroid="transparent"
          placeholder="First Name*"
        />
        <TextInput
          value={lastName}
          onChangeText={setLastName}
          style={styles.name}
          underlineColorAndroid="transparent"
          placeholder="Last Name*"
        />
      </View>
      <TextInput
        value={unitNum}
        onChangeText={setUnitNum}
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Unit Number"
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email*"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Password*"
        secureTextEntry={true}
      />
      <View style={styles.tncWrapper}>
        <Text style={styles.tnc}>
          I agree to the Amenify Terms of Service and Privacy Policy.
        </Text>
        <ToggleSwitch
          isOn={isToggle}
          onColor="#21BCFC"
          offColor="#d3d3d3"
          label=""
          labelStyle={{ color: "black", fontWeight: "900" }}
          size="large"
          onToggle={(isOn) => setIsToggle(isOn)}
        />
      </View>
      <View style={styles.action}>
        <View style={styles.accountExistsWrapper}>
          <Text style={styles.accountExists}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signin}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            isToggle === false
              ? Alert.alert(
                  "Warning!",
                  "Please agree to the terms and conditions"
                )
              : handleSignup()
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
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
    maxHeight: 480,
    marginTop: 45,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  name: {
    height: 40,
    marginTop: 25,
    borderWidth: 1,
    padding: 10,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: "45%",
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
  tncWrapper: {
    marginTop: 45,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tnc: {
    width: "60%",
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
  accountExistsWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  accountExists: {
    fontSize: 10,
    marginBottom: 7.5,
    color: "#A6A6A6",
  },
  signin: {
    color: "#21BCFC",
    textDecorationLine: "underline",
    fontSize: 18,
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

export default Signup;
