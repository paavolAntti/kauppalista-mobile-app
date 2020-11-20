import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        margin: 10,
        justifyContent:"center"
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
        <View style={styles.container}>
            <View style={styles.dataContainer}>
                <TouchableWithoutFeedback>
                    <Link to={`/data/${storeID}`}>
                        <Text fontWeight='bold'>{name}</Text>
                    </Link>
                </TouchableWithoutFeedback>
                <Text>items in list: {itemCount}</Text>
            </View>
        </View>
    );
};
export default StoreEntry;