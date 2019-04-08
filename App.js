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
    setInterval(() => (
      this.setState(previousState => (
        { isActive: !previousState.isActive }
      ))
    ), 1000);
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
      //   <Bananas />
      //   <LotsOfGreetings />
      //   <View style={styles.flexContainer}>
      //     <View style={[styles.smallBox, { backgroundColor: "red" }]} />
      //     <View style={[styles.smallBox, { backgroundColor: "green" }]} />
      //     <View style={[styles.smallBox, { backgroundColor: "blue" }]} />
      //   </View>
      // </View>

      // <View style={[
      //   styles.flexbox,
      //   {flexDirection: "column", height:"100%"}
      // ]}>
      //   <View style={[
      //     styles.defaultBorder, { flexGrow: 2 , flexDirection: "row"}, styles.flexbox
      //     ]}>
      //     <View style={[
      //       styles.flexbox,
      //       { flexGrow: 1, flexDirection: "column"}
      //       ]}>
      //       <View style={[styles.defaultBorder, { flexGrow: 1}]}/>
      //       <View style={[styles.defaultBorder, { flexGrow: 3}]}/>
      //     </View>
      //     <View style={[styles.defaultBorder, {flexGrow: 3}, styles.backgroundRed]}/>
      //   </View>

      //   <View style={[styles.defaultBorder, { flexGrow: 1, flexDirection: "row" }]}>
      //     <View style={[styles.defaultBorder, styles.backgroundBlue, { flexGrow: 1}]}/>
      //     <View style={[styles.defaultBorder, { flexGrow: 2}]}/>
      //     <View style={[styles.defaultBorder, { flexGrow: 1, flexDirection: "column"}]}>
      //       <View style={[styles.defaultBorder, { flexGrow: 1}]}/>
      //       <View style={[styles.defaultBorder, styles.backgroundYellow, { flexGrow: 1}]}/>
      //     </View>
      //   </View>
      // </View>

      <View>
        <Text style={styles.textContainer}>
          <Text style={styles.textWrapper}>
            Tiêu Đề:
            <Text style={styles.textChildren}>
              Khóa học lập trình react native {this.state.isActive}
            </Text>
          </Text>
        </Text>
      </View>
    );
  }
}
