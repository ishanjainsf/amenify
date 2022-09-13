import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Entypo";
import IonIcons from "react-native-vector-icons/Ionicons";
import Homepage from "./Homepage";
import Wrapper from "./Wrapper";
import Calendar from "./Calendar";
import Settings from "./Settings";

const Screen = () => {
  const Tab = createBottomTabNavigator();

  return (
    // <NavigationContainer independent={true}>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Homepage}
        options={{
          title: "",
          // tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={20} color="black" />
          ),
          // tabBarBadge: 3,
        }}
        tabBarShowLabel={false}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" size={20} color="grey" />
          ),
          tabBarBadge: 2,
          tabBarBadgeStyle: { backgroundColor: "#9CD3D0", marginLeft: 8 },
        }}
        tabBarShowLabel={false}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <IonIcons name="md-settings-sharp" size={20} color="grey" />
          ),
        }}
      />
      {/* <Tab.Screen name="Screen" component={Wrapper} /> */}
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default Screen;
