import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Button } from "react-native-elements";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LibraryBookshelfs from "../components/LibraryBookshelfs";
import Toggle from "../components/Toggle"
import { MonoText } from "../components/StyledText";

export default function BookScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <Image source={require('/Users/vfanelle/Downloads/test.jpeg')} /> 
          {/* ./  */}
          <Text style={styles.bookTitle}>Title</Text>
          <Text style={styles.bookTitle}>Author</Text>
          <Text style={styles.bookTitle}>Genre</Text>
          <Text style={styles.bookTitle}>Creator</Text>
          <Text style={styles.bookTitle}>Creation Date</Text>
          <Text style={styles.bookTitle}>SDG</Text>
          {/* <LibraryBookshelfs titlesList={dummyTitles} /> */}
          {/* <Toggle/> */}
        </View>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        {/* <View>
          <Toggle/>
        </View> */}
      </ScrollView>
    </View>
  );
}

BookScreen.navigationOptions = {
  title: "Book Info",
  headerStyle: {
  backgroundColor: "#73C6B6"
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  bookTitle: {
    fontSize: 48,
    paddingBottom: 30,
    alignSelf: "center",
    color: "#6A7E9F"
  },
  contentContainer: {
    paddingTop: 125
  }
});
