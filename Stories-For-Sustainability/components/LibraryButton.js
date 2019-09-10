import React, { Component } from "react";
import { Button } from "react-native-elements";

export default class LibraryButton extends Component<Props> {
  render() {
    return (
      <View>
        <Button
          title="Book"
          activeOpacity={1}
          underlayColor="transparent"
          buttonStyle={{
            height: 50,
            width: 250,
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "black",
            borderRadius: 30,
            marginLeft: 25
          }}
          containerStyle={{ marginVertical: 10 }}
          titleStyle={{ fontWeight: "bold", color: "black" }}
        />
      </View>
    );
  }
}
