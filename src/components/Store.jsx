import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';

import Text from './Text';
import theme from '../theme';
import AddItemForm from './AddItemForm';
import { Formik } from 'formik';


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
const initialItem = {
    item: '',
    amount: ''
};
const Store = ({ stores }) => {
    const onAdd = (values) => {
        console.log(values);
        const newItem = {
            item: values.item,
            amount: values.amount
        };
        shop.items.push(newItem);
        console.log(shop.items);
    };

    const id = useParams().id;
    console.log("id Store komponentissa: ", id);
    console.log(stores);
    const shop = stores.find(s => s.storeID === id);
    console.log("kauppa: ", shop);
    return (
        <View>
            <View style={{alignSelf: "center", marginBottom:5}}>
                <Text fontSize="subheading" fontWeight="bold">{shop.name}</Text>
            </View>
            <FlatList
                data={shop.items}
                ItemSeparatorComponent={()=><View style={{height: 10}}/>}
                renderItem={({item}) => (
                    <StoreItem
                        item={item.item}
                        amount={item.amount}
                        shop={shop}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <Formik
                    initialValues={initialItem}
                    onSubmit={onAdd}
                >
                    {({ handleSubmit }) => <AddItemForm onAdd={handleSubmit}/>}
                </Formik> 
        </View>
    );
};

const StoreItem = ({item, amount}) => {
    return (
            <View style={styles.container}>
                <View style={styles.dataContainer}>
                        <Text fontWeight="bold">{item}</Text>
                        <Text>{amount}</Text>
                </View>
            </View>
    );
};

export default Store;