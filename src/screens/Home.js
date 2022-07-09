import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  useColorScheme,
  Button,
  TouchableOpacity,
} from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: this.props.colors.text }}>Home!</Text>
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
