/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./src/common/styles/styles";
import Bananas from "./src/components/Banana";
import LotsOfGreetings from "./src/components/Greeting";
import FlexboxComponent from "./src/components/FlexboxComponent";
import TextInputComponent from "./src/components/TextInputComponent";
import TextComponent from "./src/components/TextComponent";
import TouchesGestures from "./src/components/TouchesGestures";
import Touchable from "./src/components/Touchable";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    setInterval(
      () =>
        this.setState(previousState => ({ isActive: !previousState.isActive })),
      1000
    );
  }

  render() {
    const { isActive } = this.state;
    return (
      // <View>
      //   <View
      //     style={{
      //       width: 200,
      //       height: 100,
      //       backgroundColor: "red"
      //     }}
      //   />
      //   <View style={styles.rectangle} />
      //   {/* Header */}
      //   <View
      //     style={[
      //       styles.header,
      //       // styles.backgroundRed,
      //       { borderColor: "blue" },
      //       isActive ? styles.backgroundRed : styles.backgroundGreen
      //     ]}
      //   />
      //   <View style={styles.flexContainer}>
      //     <View style={[styles.smallBox, { backgroundColor: "red" }]} />
      //     <View style={[styles.smallBox, { backgroundColor: "green" }]} />
      //     <View style={[styles.smallBox, { backgroundColor: "blue" }]} />
      //   </View>
      // </View>

      // <Bananas />
      // <LotsOfGreetings />
      // <FlexboxComponent />
      // <TextComponent />
      // <TextInputComponent />
      // <TouchesGestures />
      <Touchable />
    );
  }
}
