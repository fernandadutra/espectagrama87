import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class RegisterScreen extends Component {
  registeruser = async (
    firstname,
    lastname,
    email,
    password,
    confirmpassword
  ) => {
    if (password == confirmpassword) {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          Alert.alert("Usuário registrado!");
        })
        .catch((error) => {
          Alert.alert(error.message);
        });
    } else {
      Alert.alert("A senha não são iguais!");
    }
  };
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
        <Text>Tela de registro</Text>
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
