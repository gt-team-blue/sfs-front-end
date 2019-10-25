import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LibraryBookshelfs from "../components/LibraryBookshelfs";
import Toggle from "../components/Toggle";
import { MonoText } from "../components/StyledText";
import * as Constants from "../constants/Network";

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

const sortTitles = stories => {
  console.log("in sort titles");
  stories = stories.sort(function(a, b) {
    return a.title <= b.title ? -1 : 1;
  });

  return stories;
};

const sortAuthors = stories => {
  console.log("in sort authors");
  stories = stories.sort(function(a, b) {
    return a.creator <= b.creator ? -1 : 1;
  });
  return stories;
};

const sortGenre = stories => {
  stories = stories.sort(function(a, b) {
    return a.genre <= b.genre ? -1 : 1;
  });
  console.log(stories);
  return stories;
};

export default class HomeScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      stories: [],
      isLoading: true
    };
  }
  componentWillMount() {
    this.setState({
      isLoading: true
    });
    var xhr = new XMLHttpRequest();
    xhr.open("GET", Constants.SERVER_URL + "/api/stories/stories");
    xhr.setRequestHeader("Content-Type", "application/json");
    var self = this;
    xhr.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE) {
        var json = JSON.parse(this.response);
        if (json.success && json.success == true) {
          self.setState({
            stories: sortTitles(json.data)
          });
        }
        self.setState({
          isLoading: false
        });
      }
    };
    xhr.send();
  }
  render() {
    if (this.state.isLoading) return <Text />;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View>
            <Text style={styles.libraryTitle}>Library</Text>
            <LibraryBookshelfs
              storiesList={this.state.stories}
              props={this.props}
            />
          </View>
          <View>
            <Toggle
              sortType={sortType => {
                console.log(sortType);
                if (sortType === "author") {
                  this.setState({ stories: sortAuthors(this.state.stories) });
                } else if (sortType === "genre") {
                  this.setState({ stories: sortGenre(this.state.stories) });
                } else {
                  this.setState({ stories: sortTitles(this.state.stories) });
                }
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }

  navigationOptions = {
    header: null
  };
}
