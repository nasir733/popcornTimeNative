import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screens/Detail";
import Tabs from "./Tabs";

const Stacks = createStackNavigator();
const Stack = () => {
  return (
    <Stacks.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
          borderBottomColor: "black",
          shadowColor: "black",
        },
        headerTintColor: "white",
        headerBackTitleVisible: false,
      }}
    >
      <Stacks.Screen component={Tabs} name="Tabs" />
      <Stacks.Screen
        component={Detail}
        name="Detail"
        // options={{
        //   headerStyle: {
        //     backgroundColor: "pink",
        //   },
        // }}
      />
    </Stacks.Navigator>
  );
};

export default Stack;

const styles = StyleSheet.create({});
