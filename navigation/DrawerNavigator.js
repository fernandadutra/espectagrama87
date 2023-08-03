import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import { SafeAreaView, View, StyleSheet, Image, Text, FlatList } from "react-native";

const Drawer=createDrawerNavigator();
const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Tela Inicial" component={TabNavigator}/>
            <Drawer.Screen name="Perfil" component={Profile}/>
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}></SafeAreaView>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image source={require("../assets/logo.png")} style={styles.iconImage}></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Espectagrama</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <FlatList keyExtractor={this.keyExtractor} data={posts} renderItem={this.renderItem}></FlatList>
                </View>
            </View>
        </Drawer.Navigator>
        );
};
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

  export default DrawerNavigator;