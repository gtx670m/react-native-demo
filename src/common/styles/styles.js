import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    borderWidth: 4,
    // borderColor: "gray",
    marginTop: 4
  },
  rectangle: {
    width: 200,
    height: 100,
    backgroundColor: "blue"
  },
  backgroundRed: {
    backgroundColor: "red"
  },
  backgroundGreen: {
    backgroundColor: "green"
  },
  backgroundBlue: {
    backgroundColor: "blue"
  },
  backgroundWhite: {
    backgroundColor: "white"
  },
  backgroundYellow: {
    backgroundColor: "yellow"
  },
  defaultBorder: {
    borderWidth: 1,
    borderColor: "black"
  },
  smallBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "black"
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row-reverse"
  },
  flexbox: {
    display: "flex"
  },
  textContainer: {
    fontWeight: "bold",
    color: "red",
    fontSize: 16
  },
  textWrapper: {
    color: "blue"
  },
  textChildren: {
    color: "pink"
  },
  textInput: {
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    margin: 20,
    height: 40,
    padding: 10
  },
  multilineTextInput: {
    height: 100,
    margin: 20,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    fontSize: 25,
    color: "white",
    backgroundColor: "green",
    padding: 15,
    borderRadius: 20
  }
});
