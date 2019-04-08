import React, { Component } from "react";
import { Image } from "react-native";

export default class FlexboxComponent extends Component {
  render() {
    return (
      <View
        style={[styles.flexbox, { flexDirection: "column", height: "100%" }]}
      >
        <View
          style={[
            styles.defaultBorder,
            { flexGrow: 2, flexDirection: "row" },
            styles.flexbox
          ]}
        >
          <View
            style={[styles.flexbox, { flexGrow: 1, flexDirection: "column" }]}
          >
            <View style={[styles.defaultBorder, { flexGrow: 1 }]} />
            <View style={[styles.defaultBorder, { flexGrow: 3 }]} />
          </View>
          <View
            style={[
              styles.defaultBorder,
              { flexGrow: 3 },
              styles.backgroundRed
            ]}
          />
        </View>

        <View
          style={[styles.defaultBorder, { flexGrow: 1, flexDirection: "row" }]}
        >
          <View
            style={[
              styles.defaultBorder,
              styles.backgroundBlue,
              { flexGrow: 1 }
            ]}
          />
          <View style={[styles.defaultBorder, { flexGrow: 2 }]} />
          <View
            style={[
              styles.defaultBorder,
              { flexGrow: 1, flexDirection: "column" }
            ]}
          >
            <View style={[styles.defaultBorder, { flexGrow: 1 }]} />
            <View
              style={[
                styles.defaultBorder,
                styles.backgroundYellow,
                { flexGrow: 1 }
              ]}
            />
          </View>
        </View>
      </View>
    );
  }
}
