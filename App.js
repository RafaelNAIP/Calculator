import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './src/index.js';

export default function App() {
  return (
    <View style={{ flex:1 }}>
      <Calculator />
    </View>
  );
}

