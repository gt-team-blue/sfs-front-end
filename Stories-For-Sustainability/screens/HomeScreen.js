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
  stories = stories.sort(function(a, b) {
    return a.title <= b.title ? -1 : 1;
  });

  return stories;
};

const sortAuthors = stories => {
  stories = stories.sort(function(a, b) {
    return a.creator <= b.creator ? -1 : 1;
  });
  return stories;
};

export default class HomeScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      stories: [],
      tagData: null,
      isLoading: true,
      sortType: ""
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

    var xhr = new XMLHttpRequest();
    xhr.open("GET", Constants.SERVER_URL + "/api/stories/tags");
    xhr.setRequestHeader("Content-Type", "application/json");
    var self = this;
    xhr.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE) {
        var json = JSON.parse(this.response);
        if (json.success && json.success == true) {
          self.setState({
            tagData: json.data
          });
        }
        self.setState({
          isLoading: false
        });
      }
    };
    xhr.send();
  }

  filterStories = tags => {
    tags = Array.from(tags);
    const tagBody = {
      tags: tags
    };
    let taggedStories = [];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", Constants.SERVER_URL + "/api/stories/storiesWithTags");
    xhr.setRequestHeader("Content-Type", "application/json");
    var self = this;
    xhr.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE) {
        var json = JSON.parse(this.response);
        if (json.success && json.success == true) {
          taggedStories = json.data;
          self.setState({ stories: json.data });
        }
      }
    };
    xhr.send(JSON.stringify(tagBody));
  };

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
                if (sortType === "author") {
                  this.setState({ stories: sortAuthors(this.state.stories) });
                } else {
                  this.setState({ stories: sortTitles(this.state.stories) });
                }
              }}
              filterTag={tags => {
                this.filterStories(tags);
              }}
              tagData={this.state.tagData}
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
