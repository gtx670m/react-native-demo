import React, { Component } from "react";
import { Text, View, TextInput, Keyboard } from "react-native";
import styles from "../common/styles/styles";

export default class TextComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "please type your email",
      password: "please type your password",
      description: "please type your description",
      keyboardState: ""
    };
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        this.setState(() => {
          return {
            keyboardState: "Keyboard is shown"
          };
        });
      }
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        this.setState(() => {
          return {
            keyboardState: "Keyboard hide"
          };
        });
      }
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidShowListener.remove();
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          keyboardType="email-address"
          placeholder="Enter your email"
          placeholderTextColor="red"
          onChangeText={text => {
            this.setState(previousState => {
              return {
                email: text
              };
            });
          }}
          autoFocus={true}
        />
        <Text style={{ marginLeft: 20 }}>{this.state.email}</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="default"
          placeholder="Enter your password"
          placeholderTextColor="red"
          secureTextEntry={true}
          onChangeText={text => {
            this.setState(previousState => {
              return {
                password: text
              };
            });
          }}
          // autoFocus={true}
        />
        <Text style={{ marginLeft: 20 }}>{this.state.password}</Text>
        <TextInput
          style={styles.multilineTextInput}
          multiline={true}
          borderBottomColor="green"
          borderBottomWidth={3}
          borderRightColor="green"
          borderRightWidth={3}
          borderLeftColor="green"
          borderLeftWidth={3}
          onChangeText={text => {
            this.setState(previousState => {
              return {
                description: text
              };
            });
          }}
          // editable={false}
          // autoFocus={true}
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
        />
        <Text style={{ marginLeft: 20 }}>{this.state.description}</Text>
        <Text style={{ marginLeft: 20 }}>{this.state.keyboardState}</Text>
      </View>
    );
  }
}
