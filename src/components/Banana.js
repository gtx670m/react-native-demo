import React, { Component } from "react";
import { AppRegistry, Image } from "react-native";

export default class Bananas extends Component {
  render() {
    let pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    return (
      // <Image
      //   source={{
      //     uri:
      //       "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
      //   }}
      //   style={{ width: 193, height: 110 }}
      // />
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}
