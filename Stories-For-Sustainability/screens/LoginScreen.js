import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";

const userData = {
  email: "agra.meha@gmail.com",
  password: "password2"
};

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      email_valid: true,
      password: "",
      login_failed: false,
      showLoading: false
    };
    this.goToApp = this.goToApp.bind(this);
  }
  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  }

  submitLoginCredentials() {
    const { showLoading } = this.state;

    this.setState({
      showLoading: !showLoading
    });
  }
  goToApp() {
    console.log("inside goToApp method");
    let resp = this.onFetchLoginRecords();
    // console.log(resp);
    this.props.navigation.navigate("App");
  }

  async onFetchLoginRecords() {
    console.log("in onFetchLoginRecords method");
    fetch("https://localhost:5000/api/users/login", userData)
      .then(response => {
        console.log("inside first then");
        return response.json();
      })
      .then(responseJson => {
        console.log("inside then");
        console.log(responseJson.success);
        return responseJson.success;
      })
      .catch(error => {
        console.error(error);
      });
  }
  //
  // async onFetchLoginRecords() {
  //   var data = {
  //     email: this.state.email,
  //     password: this.state.password
  //   };
  //   try {
  //     let response = await fetch("http://localhost:5000/api/users/login", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(data)
  //     });
  //     if (response.status >= 200 && response.status < 300) {
  //       alert("authenticated successfully!!!");
  //     }
  //   } catch (errors) {
  //     alert(errors);
  //   }
  // }

  render() {
    const { email, password, email_valid, showLoading } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.loginView}>
          <View style={styles.loginTitle}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.travelText}>Stories For</Text>
            </View>
            <View style={{ marginTop: -10 }}>
              <Text style={styles.travelText}>Sustainability</Text>
            </View>
          </View>
          <View style={styles.loginInput}>
            <Input
              leftIcon={
                <Icon
                  name="user-o"
                  type="font-awesome"
                  color="rgba(171, 189, 219, 1)"
                  size={25}
                />
              }
              containerStyle={{ marginVertical: 10 }}
              onChangeText={email => this.setState({ email })}
              value={email}
              inputStyle={{ marginLeft: 10, color: "black" }}
              keyboardAppearance="light"
              placeholder="Email"
              autoFocus={false}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
              ref={input => (this.emailInput = input)}
              onSubmitEditing={() => {
                this.setState({ email_valid: this.validateEmail(email) });
                this.passwordInput.focus();
              }}
              blurOnSubmit={false}
              placeholderTextColor="black"
              errorStyle={{ textAlign: "center", fontSize: 12 }}
              errorMessage={
                email_valid ? null : "Please enter a valid email address"
              }
            />
            <Input
              leftIcon={
                <Icon
                  name="lock"
                  type="font-awesome"
                  color="rgba(171, 189, 219, 1)"
                  size={25}
                />
              }
              containerStyle={{ marginVertical: 10 }}
              onChangeText={password => this.setState({ password })}
              value={password}
              inputStyle={{ marginLeft: 10, color: "black" }}
              secureTextEntry={true}
              keyboardAppearance="light"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              returnKeyType="done"
              ref={input => (this.passwordInput = input)}
              blurOnSubmit={true}
              placeholderTextColor="black"
            />
          </View>
          <Button
            title="LOG IN"
            activeOpacity={1}
            underlayColor="transparent"
            //onPress={this.submitLoginCredentials.bind(this)}
            onPress={this.goToApp}
            loading={showLoading}
            loadingProps={{ size: "small", color: "black" }}
            disabled={!email_valid && password.length < 8}
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
          <View style={styles.footerView}>
            <Text style={{ color: "grey" }}>New here?</Text>
            <Button
              title="Create an Account"
              type="clear"
              activeOpacity={0.5}
              titleStyle={{ color: "black", fontSize: 15 }}
              containerStyle={{ marginTop: -10 }}
              onPress={() => console.log("Account created")}
            />
          </View>
        </View>
      </View>
    );
  }
}

LoginScreen.navigationOptions = {
  title: "Login Page"
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loginView: {
    marginTop: 150,
    backgroundColor: "transparent",
    width: 300,
    height: 400,
    marginLeft: 50,
    justifyContent: "center"
  },
  loginTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  travelText: {
    color: "black",
    fontSize: 30,
    fontFamily: "bold"
  },
  plusText: {
    color: "black",
    fontSize: 30,
    fontFamily: "regular"
  },
  loginInput: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  footerView: {
    marginTop: 20,
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  }
});
