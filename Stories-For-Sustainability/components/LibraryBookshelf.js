import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default LibraryBookshelf = () => {
  return (
    <View>
      <LibraryButton />
      <LibraryButton />
      <LibraryButton />
      <LibraryShelf />
    </View>
  );
};

export const LibraryButton = () => {
  return <View style={styles.book} />;
};

export const LibraryShelf = () => {
  return <View style={styles.shelf} />;
};

const styles = StyleSheet.create({
  book: {
    height: 87,
    width: 64,
    backgroundColor: "#D8D8D8",
    borderRadius: 8,
    marginLeft: 25,
    alignSelf: "center"
  },
  shelf: {
    alignSelf: "center",
    height: 6,
    width: 299,
    backgroundColor: "#FFD394",
    borderRadius: 3
  }
});
