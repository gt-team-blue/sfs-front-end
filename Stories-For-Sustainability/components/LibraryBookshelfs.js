import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

export default LibraryBookshelfs = ({ storiesList }) => {
  let bookshelfs = [];
  let titlesCounter = 0;

  function addBookRow(amount) {
    var books = [];
    for(let i = 0; i < amount; i++) {
      books.push(<LibraryBook key={storiesList[titlesCounter]._id} story={storiesList[titlesCounter]} />);
      titlesCounter++;
    }
    return books;
  }

  var i;
  for (i = 0; i < Math.floor(storiesList.length / 3); i++) {
    bookshelfs.push(
      <View key={i}>
        <View style={styles.books}>
          {addBookRow(3)}
        </View>
        <LibraryShelf />
      </View>
    );
  }

  if (storiesList.length % 3 > 0) {
    bookshelfs.push(
      <View key={i+1}>
        <View style={styles.books}>
          {addBookRow(storiesList.length % 3)}
        </View>
        <LibraryShelf />
      </View>
    );
  }
  return <View>{bookshelfs}</View>;
};

export const LibraryBook = ({ story }) => {
  function onStoryPressed() {
    
  }
  return (
    <TouchableOpacity onPress={onStoryPressed} style={styles.book}>
      <Text style={styles.bookTitle}>{story.title}</Text>
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
