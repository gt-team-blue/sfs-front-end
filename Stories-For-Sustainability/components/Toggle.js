import React, { Component } from "react";
import Modal from "react-native-modal";
import { CheckBox } from 'react-native-elements'

import { TouchableOpacity, StyleSheet, View, Text, Button } from "react-native";

export default class Toggle extends Component {
  state= {
    on: false,
    isModalVisible: false,
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
      isModalVisible: !this.state.isModalVisible
    })
  }

  toggleCheck1 = () => {
    this.setState({
      checked1: !this.state.checked1
    })
  }

  toggleCheck2 = () => {
    this.setState({
      checked2: !this.state.checked2
    })
  }

  toggleCheck3 = () => {
    this.setState({
      checked3: !this.state.checked3
    })
  }

  toggleCheck4 = () => {
    this.setState({
      checked4: !this.state.checked4
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button title="Filter" onPress={this.toggle} />
        <Modal isVisible={this.state.isModalVisible} 
        onBackdropPress={() => this.setState({ isVisible: false })}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <CheckBox
              title='Sort Titles from A-Z'
              onPress={this.toggleCheck1}
              checked={this.state.checked1}
            />
            <Text>Filter by:
            </Text>
            <CheckBox
              title='Author'
              onPress={this.toggleCheck2}
              checked={this.state.checked2}
            />
            <CheckBox
              title='Genre'
              onPress={this.toggleCheck3}
              checked={this.state.checked3}
            />
            <CheckBox
              title='SDG'
              onPress={this.toggleCheck4}
              checked={this.state.checked4}
            />
            <Button title="Apply" onPress={this.toggle} />
          </View>
        </Modal>
      </View>
    );
  }

}