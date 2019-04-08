import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import styles from "../common/styles/styles";
import Button from "react-native-button";

export default class Touchable extends Component {
  _onPressButton = () => {
    alert("You pressed the button");
  };
  _onPressIn = () => {
    alert("On press in");
  };
  _onPressOut = () => {
    alert("On press out");
  };
  _onLongPress = () => {
    alert("on long press");
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableHighlight
          underlayColor="red"
          // onShowUnderlay={() => {
          //   alert("onShowUnderlay button !");
          // }}
          onPress={this._onPressButton}
        >
          <View style={{ backgroundColor: "green" }}>
            {/* <Image
              style={{ width: 100, height: 30 }}
              source={require("../common/images/button.png")}
            /> */}
            <Text style={{ color: "white", padding: 20, fontSize: 18 }}>
              TouchableHighlight
            </Text>
          </View>
        </TouchableHighlight>

        {/* only Android */}
        <TouchableNativeFeedback
          onPress={this._onPressButton}
          useForeground={false}
        >
          <View style={{ width: 300, margin: 50, backgroundColor: "blue" }}>
            <Text
              style={{
                margin: 10,
                fontSize: 20,
                color: "white",
                textAlign: "center"
              }}
            >
              TouchableNativeFeedback
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={{ width: 300, margin: 50, backgroundColor: "yellow" }}>
            <Text
              style={{
                margin: 10,
                fontSize: 20,
                color: "black",
                textAlign: "center"
              }}
            >
              TouchableNativeFeedback
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback
          onPress={this._onPressButton}
          onPressIn={this._onPressIn}
          onPressOut={this._onPressOut}
          // disabled={true}
          onLongPress={this._onLongPress}
          useForeground={false}
        >
          <View style={{ width: 300, margin: 50, backgroundColor: "purple" }}>
            <Text
              style={{
                margin: 10,
                fontSize: 20,
                color: "white",
                textAlign: "center"
              }}
            >
              TouchableNativeFeedback
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
