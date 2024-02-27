import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <View style={styles.counterContainer}>
        <Text style={styles.countText}>Count: {this.state.count}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={this.incrementCount} />
          <View style={{ marginHorizontal: 10 }} />
          <Button title="-" onPress={this.decrementCount} />
        </View>
      </View>
    );
  }
}

const styles = {
  counterContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  countText: {
    fontWeight: 'bold',
    fontSize: 18, 
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
};

export default Counter;