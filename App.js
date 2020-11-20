import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter } from 'react-router-native';
import { StyleSheet, Text, View } from 'react-native';

import Main from './src/components/Main';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
  });

const App = () => {
  return (
    <NativeRouter>
		<Main/>
    </NativeRouter>
  );
};

export default App;

