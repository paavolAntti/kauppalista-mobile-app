import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const styles = StyleSheet.create({
	buttonContainer: {
        borderRadius: 5,
        margin: 10
    }
});

const AddItemForm = ({onAdd}) => {
    return (
        <View>
            <FormikTextInput name="item" placeholder="Item's name"/>
            <FormikTextInput name="amount" placeholder="Amount of current item" />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Add item"
                        onPress={onAdd}
                    />
                </View>
        </View>
    );
};

export default AddItemForm;