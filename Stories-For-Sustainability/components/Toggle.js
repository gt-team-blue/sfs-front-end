import React, { Component } from "react";
import Modal from "react-native-modal";
import { CheckBox } from "react-native-elements";

import { TouchableOpacity, StyleSheet, View, Text, Button } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import MultiSelect from "react-native-multiple-select";
import PickerCheckBox from "react-native-picker-checkbox";

export default class Toggle extends Component<Props> {
  state = {
    on: false,
    isModalVisible: false,
    sortType: "",
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
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
      },
      {
        label: "Sort by Genre",
        value: "genre",
        selected: false
      }
    ],
    // tagData: [
    //   {
    //     name: "tag1",
    //     id: 1
    //   },
    //   {
    //     name: "tag2",
    //     id: 2
    //   },
    //   {
    //     name: "tag3",
    //     id: 3
    //   }
    // ],
    tagData: []
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
      isModalVisible: !this.state.isModalVisible
    });
  };

  // toggleCheck1 = () => {
  //   this.props.sortTitles(!this.state.checked1);
  //   this.setState({
  //     checked1: !this.state.checked1
  //   });
  // };

  // toggleCheck2 = () => {
  //   this.props.sortAuthor(!this.state.checked2);
  //   this.setState({
  //     checked2: !this.state.checked2
  //   });
  // };

  // toggleCheck3 = () => {
  //   this.props.sortGenre(!this.state.checked3);
  //   this.setState({
  //     checked3: !this.state.checked3
  //   });
  // };

  // toggleCheck4 = () => {
  //   this.props.sortSDG(!this.state.checked4);
  //   this.setState({
  //     checked4: !this.state.checked4
  //   });
  // };

  toggleSort = () => {
    let curSelected = this.state.buttonData.find(e => e.selected === true)
      .value;
    this.props.sortType(curSelected);
    this.setState({ sortType: curSelected });
  };

  createItems = items => {
    let tags = [];
    if (items !== null) {
      items.forEach(function(item, index) {
        tags.push(<CheckBox title={item} />);
      });
    }
  };

  render() {
    // console.log(this.props.tagData)
    return (
      <View style={{ flex: 1 }}>
        <Button title="Filter" onPress={this.toggle} />
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              maxHeight: 400,
              backgroundColor: "white"
            }}
          >
            <RadioGroup
              radioButtons={this.state.buttonData}
              onPress={this.toggleSort}
            />
            {/* <MultiSelect
              hideTags
              items={this.props.tagData}
              uniqueKey="id"
              ref={component => {
                this.multiSelect = component;
              }}
              selectText="Pick Items"
              searchInputPlaceholderText="Search Items..."
              onChangeInput={text => console.log(text)}
              tagRemoveIconColor="#CCC"
              tagBorderColor="#CCC"
              tagTextColor="#CCC"
              selectedItemTextColor="#CCC"
              selectedItemIconColor="#CCC"
              itemTextColor="#000"
              displayKey="name"
              searchInputStyle={{ color: "#CCC" }}
              submitButtonColor="#CCC"
              submitButtonText="Submit"
            /> */}
            {this.props.tagData && this.createItems(this.props.tagData)}
            <Button title="Apply" onPress={this.toggle} />
          </View>
        </Modal>
      </View>
    );
  }
}
