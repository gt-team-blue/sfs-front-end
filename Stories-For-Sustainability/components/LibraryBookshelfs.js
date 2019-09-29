import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

export default LibraryBookshelfs = ({ storiesList }) => {
  let bookshelfs = [];
  let titlesCounter = 0;

  if (storiesList.length == 0) return bookshelfs;

  for (let i = 0; i < Math.ceil(storiesList.length / 3 - 1); i++) {
    bookshelfs.push(
      <View>
        <View style={styles.books}>
          <LibraryBook title={storiesList[titlesCounter++].title} />
          <LibraryBook title={storiesList[titlesCounter++].title} />
          <LibraryBook title={storiesList[titlesCounter++].title} />
        </View>
        <LibraryShelf />
      </View>
    );
  }
  if (storiesList.length % 3 === 0) {
    bookshelfs.push(
      <View>
        <View style={styles.books}>
          <LibraryBook title={storiesList[titlesCounter++].title} />
          <LibraryBook title={storiesList[titlesCounter++].title} />
          <LibraryBook title={storiesList[titlesCounter++].title} />
        </View>
        <LibraryShelf />
      </View>
    );
  } else if (storiesList.length % 3 === 1) {
    bookshelfs.push(
      <View>
        <View style={styles.books}>
          <LibraryBook title={storiesList[titlesCounter++].title} />
        </View>
        <LibraryShelf />
      </View>
    );
  } else if (storiesList.length % 3 === 2) {
    bookshelfs.push(
      <View>
        <View style={styles.books}>
          <LibraryBook title={storiesList[titlesCounter++].title} />
          <LibraryBook title={storiesList[titlesCounter++].title} />
        </View>
        <LibraryShelf />
      </View>
    );
  }
  return <View>{bookshelfs}</View>;
};

export const LibraryBook = ({ title }) => {
  return (
    <TouchableOpacity style={styles.book}>
      <Text style={styles.bookTitle}>{title}</Text>
    </TouchableOpacity>
  );
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
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15
  },
  shelf: {
    alignSelf: "center",
    height: 6,
    width: 299,
    backgroundColor: "#FFD394",
    borderRadius: 3
  },
  bookTitle: {
    paddingTop: 22,
    alignSelf: "center",
    color: "#6A7E9F",
    fontSize: 13
  },
  books: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center"
  },
  bookshelf: {
    alignSelf: "center"
  }
});
