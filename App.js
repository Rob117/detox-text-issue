/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

type Props = {};

class ToggleText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    display = this.props.isShowing ? this.props.text : '';
    return <Text>{display}</Text>;
  }
}

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { isShowingHello: false, isShowingWorld: false };
  }

  toggleSwitch = param => {
    this.setState(previousState => {
      console.log(previousState);
      return { [param]: !previousState[param] };
    });
  };

  renderTextFields = () => {
    return (
      <View>
        <ToggleText isShowing={this.state.isShowingHello} text="Hello!!!" />
        <ToggleText isShowing={this.state.isShowingWorld} text="World!!!" />
      </View>
    );
  };

  render() {
    return (
      <View testID="welcome" style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>
          This is a React Native snapshot test.
        </Text>
        <Button
          onPress={() => this.toggleSwitch('isShowingHello')}
          title="Say Hello"
          color="#814584"
          testID="hello_button"
        />
        <Button
          onPress={() => this.toggleSwitch('isShowingWorld')}
          title="To The World"
          color="#814584"
          testID="world_button"
        />
        {this.renderTextFields()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
