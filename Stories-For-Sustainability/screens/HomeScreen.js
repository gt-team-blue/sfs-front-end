import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Button } from "react-native-elements";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LibraryBookshelfs from "../components/LibraryBookshelfs";
import { MonoText } from "../components/StyledText";

const dummyTitles = [
  "Title1",
  "Title2",
  "Title3",
  "Title4",
  "Title5",
  "Title6",
  "Title7",
  "Title8",
  "Title9",
  "Title10",
  "Title11"
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <Text style={styles.libraryTitle}>Library</Text>
          <LibraryBookshelfs titlesList={dummyTitles} />
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
  libraryTitle: {
    fontSize: 48,
    paddingBottom: 30,
    alignSelf: "center",
    color: "#6A7E9F"
  },
  contentContainer: {
    paddingTop: 125
  }
});
