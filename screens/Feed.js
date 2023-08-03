import React, { Component } from "react";
import { Text, View, StyleSheet, Image, SafeAreaView, FlatList } from "react-native";
import Postcard from "../screens/PostCard";

export default class Feed extends Component {
  renderItem = ({ item: story }) => {
    return <Postcard post={post} navigation={this.props.navigation} />;
  };

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
           <SafeAreaView style={styles.droidSafeArea}></SafeAreaView>
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image source={require("../assets/logo.png")} style={styles.iconImage}></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Espectagrama!</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <FlatList keyExtractor={this.keyExtractor} data={posts} renderItem={this.renderItem}></FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"red",},

    droidSafeArea:{
      marginTop:Plataform.OS==="android"?StatusBar.currentHeight:RFValue(35),
    },

    appTitle:{
      flex:0.07,
      flexDirection:"row"
    },

    appIcon:{
      flex:0.2,
      justifyContent:"center",
      alignItems:"center"
    },

    iconImage:{
      width:"100%",
      height:"100%",
      resizeMode:"contain"
    },

    appTitleTextContainer:{
      flex:0.8,
      justifyContent:"center"
    },

    appTitleText:{
      color:"white",
      fontSize:RFValue(28)
    },

    cardContainer:{
      flex:0.85
    }
});