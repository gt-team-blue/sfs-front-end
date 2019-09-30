import React from "react";
import { View, StyleSheet } from "react-native";
import PDFReader from 'rn-pdf-reader-js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 125
  }
});

export default class StoryScreen extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return (
        <View style={styles.container}>
            <PDFReader
                source={{
                    uri: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf'
                }}
            />
        </View>
    );
  }

  navigationOptions = {
    header: null
  };
}
