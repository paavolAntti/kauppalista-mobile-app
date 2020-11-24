import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        height: 50,
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        backgroundColor: theme.colors.accent,
        borderRadius: 4
    },
    dataContainer: {
        flexDirection:"row",
        justifyContent: "space-between",
        marginLeft: 50,
        marginRight: 50,
    }
});

const StoreEntry = ({ name, itemCount, storeID }) => {
    return (
        <TouchableWithoutFeedback>
            <Link to={`/data/${storeID}`}>
            <View style={styles.container}>
                <View style={styles.dataContainer}>
                    <Text fontWeight='bold'>{name}</Text>
                    <Text>items in list: {itemCount}</Text>
                </View>
            </View>
            </Link>
        </TouchableWithoutFeedback>
    );
};
export default StoreEntry;