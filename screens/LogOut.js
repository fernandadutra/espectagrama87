import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class LogOut extends Component {
  componentDidMount() {
    firebase.auth().signOut();
  }

  fetchUser = () => {
    let theme;
    firebase.database
      .ref("/users/" + firebase.auth().currentUser.uid)
      .on("value", (snapshot) => {
        theme = snapshot.val().current_theme;
        this.setState({ light_theme: theme === "light" });
      });
  };
    render() {
      return (
        <View style={styles.container}>
          <Text>Tela de log out</Text>
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