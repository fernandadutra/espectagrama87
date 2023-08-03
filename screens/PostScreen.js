import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class PostScreen extends Component {
  constructor() {
    super();
    this.state = {
      light_theme: false,
    };
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
    
      if (!this.props.route.params) {
        this.props.navigation.navigate("Home");
      } else if (this.state.fontsLoaded) {
        SplashScreen.hideAsync();
        return (
          <View
            style={
              this.state.light_theme ? styles.containerLight : styles.container
            }
          >
            <SafeAreaView style={styles.droidSafeArea} />
            <View style={styles.appTitle}>
              <View style={styles.appIcon}>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.iconImage}
                ></Image>
              </View>
              <View style={styles.appTitleTextContainer}>
                <Text
                  style={
                    this.state.light_theme
                      ? styles.appTitleTextLight
                      : styles.appTitleText
                  }
                >
                  Espectagrama App
                </Text>
              </View>
            </View>
            <View style={styles.storyContainer}>
              <ScrollView
                style={
                  this.state.light_theme
                    ? styles.storyCardLight
                    : styles.storyCard
                }
              >
                <Image
                  source={require("../assets/story_image_1.png")}
                  style={styles.image}
                ></Image>
                <View style={styles.dataContainer}>
                  <View style={styles.titleTextContainer}>
                    <Text
                      style={
                        this.state.light_theme
                          ? styles.storyTitleTextLight
                          : styles.storyTitleText
                      }
                    >
                      {this.props.route.params.author}
                    </Text>
                    <Text
                      style={
                        this.state.light_theme
                          ? styles.storyAuthorTextLight
                          : styles.storyAuthorText
                      }
                    >
                      {this.props.route.params.caption}
                    </Text>
                  </View>
                </View>
                <View style={styles.actionContainer}>
                  <View style={styles.likeButton}>
                    <Ionicons
                      name={"heart"}
                      size={RFValue(30)}
                      color={this.state.light_theme ? "black" : "white"}
                    />
  
                    <Text
                      style={
                        this.state.light_theme
                          ? styles.likeTextLight
                          : styles.likeText
                      }
                    >
                      12k
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        )
  }
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c",
  },
  containerLight: {
    flex: 1,
    backgroundColor: "white",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
  },
  appTitleTextLight: {
    color: "black",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
  },
  screenContainer: {
    flex: 0.85,
  },
  profileImageContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: RFValue(140),
    height: RFValue(140),
    borderRadius: RFValue(70),
  },

  nameText: {
    color: "white",
    fontSize: RFValue(40),
    fontFamily: "Bubblegum-Sans",
    marginTop: RFValue(10),
  },
  nameTextLight: {
    color: "black",
    fontSize: RFValue(40),
    fontFamily: "Bubblegum-Sans",
    marginTop: RFValue(10),
  },
  themeContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: RFValue(20),
  },
  themeText: {
    color: "white",
    fontSize: RFValue(30),
    fontFamily: "Bubblegum-Sans",
    marginRight: RFValue(15),
  },
  themeTextLight: {
    color: "black",
    fontSize: RFValue(30),
    fontFamily: "Bubblegum-Sans",
    marginRight: RFValue(15),
  },
});