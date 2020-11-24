import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';


const AppBarTab = ({tabName, style}) => {
    const height_proportion = '90%';
    return (
        <View style={{marginLeft:10, marginRight:10 , height:height_proportion, justifyContent: 'center'}}>
            <View>
                <Text
                    fontWeight='bold'
                    color='textSecondary'
                >{tabName}</Text>
            </View>
        </View>
    );
};

export default AppBarTab;