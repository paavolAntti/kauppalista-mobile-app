import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import AddItemForm from './AddItemForm';

const validationSchema = yup.object().shape({
    shop: yup.string()
        .required("Shop's name is required"),
});

const styles = StyleSheet.create({
	buttonContainer: {
        borderRadius: 5,
        margin: 10
    }
});
const initialShop = {
    shop: '',
};
const initialItem = {
    item: '',
    amount: ''
};
let itemslist = [];

const NewListForm = ({onSubmit}) => {
    return (
        <View>
            <FormikTextInput name="shop" placeholder="List's name"/>
            <View style={styles.buttonContainer}>
                <Button
                    title="Create List"
                    onPress={onSubmit}
                />
            </View>
        </View>
    );
};

const NewList = ({ shopList }) => {
    const onSubmit = (values) => {
        console.log(values);
        console.log(itemslist);
        const newID = (shopList[shopList.length -1].storeID)+1;
        const newShop = {
                storeID: newID,
                name: values.shop,
                items: itemslist,
        };
        itemslist = [];

        shopList.push(newShop);
    };
    const onAdd = (values) => {
        console.log(values);
        const item = {
            item: values.item,
            amount: values.amount
        };
        itemslist.push(item);
        console.log(itemslist);
    };
    return (
        <View>
            <Formik
                initialValues={initialShop}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => <NewListForm onSubmit={handleSubmit} />}
            </Formik>
            <Formik
                initialValues={initialItem}
                onSubmit={onAdd}
            >
                {({ handleSubmit }) => <AddItemForm onAdd={handleSubmit} />}
            </Formik>
        </View>
    );
};

export default NewList;