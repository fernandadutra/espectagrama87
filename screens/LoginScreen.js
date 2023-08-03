import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class LoginScreen extends Component {
  signIn = async (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.replace("Dashboard");
      })
      .catch((error) => {
        Alert.alerts(error.message);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Tela de login</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      color:"purple",
    },
  });
