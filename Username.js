import { View, Text } from 'react-native';
import React from 'react';

const GreetUser = ({ username }) => {
  return (
    <View>
      <Text style={{ fontWeight: 'bold' }}>Hello, {username}!</Text>
    </View>
  );
};

const Username = () => {
  return (
    <View>
      <GreetUser username="Kent" />
      <GreetUser username="John Mike" />

    </View>
  );
};

export default Username;