import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, View, Text, Image } from "react-native";
import { Textfit } from 'react-textfit';

export default LibraryBookshelfs = ({ titlesList }) => {
  let bookshelfs = [];
  let titlesCounter = 0;

  // for (let i = 0; i < Math.ceil(titlesList.length / 3 - 1); i++) {
  //   bookshelfs.push(
  //     <View>
  //       <View style={styles.books}>
  //         {/* <LibraryBook title={titlesList[titlesCounter++]} />
  //         <LibraryBook title={titlesList[titlesCounter++]} />
  //         <LibraryBook title={titlesList[titlesCounter++]} /> */}
  //         <Image
  //         style={{width: 64, height: 87, padding: 20}}
  //         source={{uri: 'https://images.squarespace-cdn.com/content/v1/554e7d75e4b09fe6f89a5e0f/1554235064296-T7RNZKUBZA4H9AMN8GG4/ke17ZwdGBToddI8pDm48kNoQXmF2Qa1YBek5qK0FjyBZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEZKXicrRuDv7JbZ9NsMc3vdOvRPCWbke_IJkR4plMETwiClsxSxtrZJWuVCy_h5Ks/12+best+sustainability+books+to+inspire+change' }}/>
  //         <Image
  //         style={{width: 64, height: 87}}
  //         source={{uri: 'https://covers.oreillystatic.com/images/0636920043904/lrg.jpg' }}/>
  //         <Image
  //         style={{width: 64, height: 87}}
  //         source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/51eRyFm9kxL.jpg' }}/>

  //       </View>
  //       <LibraryShelf />
  //     </View>
  //   );
  // }
  // if (titlesList.length % 3 === 0) {
  //   bookshelfs.push(
  //     <View>
  //       <View style={styles.books}>
  //         {/* <LibraryBook title={titlesList[titlesCounter++]} />
  //         <LibraryBook title={titlesList[titlesCounter++]} />
  //         <LibraryBook title={titlesList[titlesCounter++]} /> */}
  //         <Image
  //         style={{width: 64, height: 87}}
  //         source={{uri: 'https://images.gr-assets.com/books/1360236352l/16066814.jpg' }}/>
  //         <Image
  //         style={{width: 64, height: 87}}
  //         source={{uri: 'https://images.gr-assets.com/books/1417605547l/5571.jpg' }}/>
  //         <Image
  //         style={{width: 64, height: 87}}
  //         source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/412brLaUVUL._SX352_BO1,204,203,200_.jpg' }}/>
  //       </View>
  //       <LibraryShelf />
  //     </View>
  //   );
  // } else if (titlesList.length % 3 === 1) {
  //   bookshelfs.push(
  //     <View>
  //       <View style={styles.books}>
  //         {/* <LibraryBook title={titlesList[titlesCounter++]} /> */}
  //         <Image
  //         style={{width: 64, height: 87}}
  //         source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1396229534l/21492074.jpg' }}/>
  //       </View>
  //       <LibraryShelf />
  //     </View>
  //   );
  // } else if (titlesList.length % 3 === 2) {
  //   bookshelfs.push(
  //     <View>
  //       <View style={styles.books}>
  //         {/* <LibraryBook title={titlesList[titlesCounter++]} />
  //         <LibraryBook title={titlesList[titlesCounter++]} /> */}
  //         <Image
  //         style={{width: 64, height: 87}}
  //         source={{uri: 'https://www.bagsofbooklists.com/assets/sites/3/GreenGiant-371x371.jpg' }}/>
  //         <Image
  //         style={{width: 64, height: 87}}
  //         source={{uri: 'https://www.newpages.com/images/books/book-reviews/2018-07-03/sustainability-love-story-nicole-walker.jpg' }}/>
  //       </View>
  //       <LibraryShelf />
  //     </View>
  //   );
  bookshelfs.push(
    <View>
      <View style={styles.books}>
        <Image
        style={{width: 64, height: 87}}
        source={{uri: 'https://images.squarespace-cdn.com/content/v1/554e7d75e4b09fe6f89a5e0f/1554235064296-T7RNZKUBZA4H9AMN8GG4/ke17ZwdGBToddI8pDm48kNoQXmF2Qa1YBek5qK0FjyBZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEZKXicrRuDv7JbZ9NsMc3vdOvRPCWbke_IJkR4plMETwiClsxSxtrZJWuVCy_h5Ks/12+best+sustainability+books+to+inspire+change' }}/>
        <Image
        style={{width: 64, height: 87}}
        source={{uri: 'https://covers.oreillystatic.com/images/0636920043904/lrg.jpg' }}/>
        <Image
        style={{width: 64, height: 87}}
        source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/51eRyFm9kxL.jpg' }}/>

      </View>
      <LibraryShelf />
    </View>
  );
  bookshelfs.push(
        <View>
          <View style={styles.books}>
            <Image
            style={{width: 64, height: 87}}
            source={{uri: 'https://images.gr-assets.com/books/1360236352l/16066814.jpg' }}/>
            <Image
            style={{width: 64, height: 87}}
            source={{uri: 'https://images.gr-assets.com/books/1417605547l/5571.jpg' }}/>
            <Image
            style={{width: 64, height: 87}}
            source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/412brLaUVUL._SX352_BO1,204,203,200_.jpg' }}/>
          </View>
          <LibraryShelf />
        </View>
      );
  bookshelfs.push(
        <View>
          <View style={styles.books}>
            <Image
            style={{width: 64, height: 87}}
            source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1396229534l/21492074.jpg' }}/>
            <Image
            style={{width: 64, height: 87}}
            source={{uri: 'http://www.newsociety.com/var/newsociety/storage/images/books/s/the-sustainability-champion-s-guidebook/image-front-cover/945583-1-eng-CA/Image-front-cover_coverbookpage.jpg' }}/>
            <Image
            style={{width: 64, height: 87}}
            source={{uri: 'https://www1.alibris-static.com/regreening-the-built-environment-nature-green-space-and-sustainability/isbn/9781138718791_l.jpg' }}/>
          </View>
          <LibraryShelf />
        </View>
      );
  bookshelfs.push(
    <View>
      <View style={styles.books}>
        <Image
        style={{width: 64, height: 87}}
        source={{uri: 'https://www.bagsofbooklists.com/assets/sites/3/GreenGiant-371x371.jpg' }}/>
        <Image
        style={{width: 64, height: 87}}
        source={{uri: 'https://www.newpages.com/images/books/book-reviews/2018-07-03/sustainability-love-story-nicole-walker.jpg' }}/>
        <Image
        style={{width: 64, height: 87}}
        source={{uri: 'https://i.imgur.com/6iJ3y9p.jpg' }}/>
      </View>
      <LibraryShelf />
    </View>
  ); 
  return <View>{bookshelfs}</View>;
};

export const LibraryBook = ({ title }) => {
  return (
    <TouchableOpacity style={styles.book}>
      {/* <Textfit mode="single" style={styles.bookTitle}>{title}</Textfit> */}
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
    // adjustFontSizeToFit: true
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