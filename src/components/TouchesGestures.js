import React, { Component } from "react";
import { View, Alert } from "react-native";
import styles from "../common/styles/styles";
import Button from "react-native-button";

export default class TouchesGestures extends Component {
  _onPressButton() {
    Alert.alert("You pressed the button !");
  }
  render() {
    return (
      <View style={styles.container}>
        <Button 
          style={styles.button} 
          onPress={() => this._onPressButton()}>
          This is a button
        </Button>
      </View>
    );
  }
}
