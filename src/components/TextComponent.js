import React, { Component } from "react";
import { Text, View } from "react-native";

export default class TextComponent extends Component {
  render() {
    return (
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
