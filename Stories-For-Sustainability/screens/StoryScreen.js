import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Pdf from 'react-native-pdf';
import { AsyncStorage } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  pdf: {
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  }
});

export default class StoryScreen extends React.Component {
  constructor(props) {
    super()
    this.state = {
        isLoading: true,
        startPage: 0
    }
  }

  componentWillMount() {
    const storyId = this.props.navigation.getParam('storyId', '')
    AsyncStorage.getItem('lastPage_' + storyId).then((value) => {
        let page = value ? JSON.parse(value).page : 0;
        this.setState({
            startPage: page,
            isLoading: false
        })
    });
  }

  render() {
      if(this.state.isLoading) return (<View></View>);
      const source = {uri: this.props.navigation.getParam('pdfUrl', ''), cache: true}
      const storyId = this.props.navigation.getParam('storyId', '')
    return (
        <View style={styles.container}>
            <Pdf
                page={this.state.startPage}
                source={source}
                onPageChanged={(page, numberOfPages)=>{
                    AsyncStorage.setItem('lastPage_' + storyId, JSON.stringify({page: page}));
                }}
                onError={(error)=>{
                    console.log(error);
                }}
                style={styles.pdf}
            />
        </View>
    );
  }

  navigationOptions = {
    header: null
  };
}
