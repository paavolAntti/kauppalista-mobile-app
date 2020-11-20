import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';


const AppBarTab = ({tabName, style}) => {
    return (
        <View style={{marginLeft:5, marginRight:5}}>
            <Text
                fontWeight='bold'
                color='textSecondary'
            >{tabName}</Text>
        </View>
    );
};

export default AppBarTab;