import React, { Component } from "react";
import { Text, StyleSheet, View, useColorScheme, Button } from "react-native";

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
