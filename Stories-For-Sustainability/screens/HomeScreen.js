import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Button } from "react-native-elements";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LibraryBookshelfs from "../components/LibraryBookshelfs";
import Toggle from "../components/Toggle"
import { MonoText } from "../components/StyledText";

const dummyTitles = [
  "A Social History of the Nitrogen Cycle and the Challenge of Sustainability",
  "Human Evolution for a Sustainable Future",
  "The Humane Gardener",
  "Kiss the Ground",
  "Evie and the Animals",
  "Cultural Sustainability",
  "Zero Waste Books",
  "The Green Giant",
  "We are the Weather",
  "The Upcycle",
  "Sustainability"
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
          {/* <Toggle/> */}
        </View>
        <View>
          <Toggle/>
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
