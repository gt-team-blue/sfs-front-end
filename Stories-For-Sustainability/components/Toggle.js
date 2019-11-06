import React, { Component } from "react";
import Modal from "react-native-modal";
import { ScrollView } from "react-native";
import { CheckBox } from "react-native-elements";

import { TouchableOpacity, StyleSheet, View, Text, Button } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import MultiSelect from "react-native-multiple-select";
import PickerCheckBox from "react-native-picker-checkbox";

export default class Toggle extends Component<Props> {
  state = {
    on: false,
    isModalVisible: false,
    buttonData: [
      {
        label: "Sort by Title",
        value: "title",
        selected: true
      },
      {
        label: "Sort by Author",
        value: "author",
        selected: false
      }
    ],
    tagged: new Set([]),
    taggedStories: null
  };

  toggleFilter = () => {
    this.setState({
      on: !this.state.on,
      isModalVisible: !this.state.isModalVisible
    });
  };

  toggleApply = () => {
    // filter by tag
    this.props.filterTag(this.state.tagged);

    // sort by author/title
    let curSelected = this.state.buttonData.find(e => e.selected === true)
      .value;
    this.props.sortType(curSelected);

    this.setState({
      on: !this.state.on,
      isModalVisible: !this.state.isModalVisible
    });
  };

  onChecked = tagName => {
    let curTagged = this.state.tagged;
    if (curTagged.has(tagName)) {
      curTagged.delete(tagName);
    } else {
      curTagged.add(tagName);
    }
    this.setState({ tagged: curTagged });
  };

  checkChecked = tagName => {
    return this.state.tagged.has(tagName);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button title="Filter" onPress={this.toggleFilter} />

        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              maxHeight: 600,
              backgroundColor: "white"
            }}
          >
            <ScrollView>
              <RadioGroup
                radioButtons={this.state.buttonData}
                onPress={() => {}}
              />
              {this.props.tagData &&
                this.props.tagData.map(tag => (
                  <View>
                    <CheckBox
                      title={tag}
                      onPress={() => this.onChecked(tag)}
                      checked={this.checkChecked(tag)}
                    />
                  </View>
                ))}
              <Button title="Apply" onPress={this.toggleApply} />
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }
}
