import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Movies = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Button
        title="GO to the detail "
        onPress={() => navigation.navigate("Detail")}
      ></Button>
      <Text>Hello iam from the movies</Text>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({});
