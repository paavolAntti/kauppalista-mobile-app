import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    textInput: {
        height: 40, 
        borderColor: theme.colors.accent, 
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10
    },
    textInputError: {
        height: 40, 
        borderColor: '#d73a4a', 
        borderWidth: 1,
        padding: 10,
        margin: 10
    }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = styles.textInput;

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;