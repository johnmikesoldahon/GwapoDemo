import { View, Text, Image } from 'react-native';
import React from 'react';

const HelloWorld = () => {
  return (
    <View>
      <Text>Hello, World!</Text>
      <Image
        source={require('g logo.jfif')} 
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default HelloWorld;