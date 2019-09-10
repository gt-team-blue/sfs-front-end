import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Button } from "react-native-elements";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LibraryBookshelf from "../components/LibraryBookshelf";
import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <Text style={styles.libraryTitle}>Library</Text>
          <LibraryBookshelf />
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  buttonStyle: {
    height: 87,
    width: 64,
    backgroundColor: "#D8D8D8",
    borderRadius: 8,
    marginLeft: 25,
    alignSelf: "center"
  },
  libraryTitle: {
    fontSize: 48,
    alignSelf: "center",
    color: "red"
  },
  contentContainer: {
    paddingTop: 30
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  rectangle: {
    height: 6,
    width: 299,
    backgroundColor: "#FFD394",
    borderRadius: 3
  }
});
