import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import Text from './Text';
import AppBar from './AppBar';
import StoreListView from './StoreListView';
import SignIn from './SignIn';
import NewList from './NewList';
import theme from '../theme';

let stores = [
	{
		storeID: 0,
		name: 'prisma',
		items: [
			{
				item: 'kahvi',
				amount: 2
			},
			{
				item: 'banaani',
				amount: 5
			},
			{
				item: 'selluloosa',
				amount: 100
			},
			
		]
	},
	{
		storeID: 1,
		name: 'k-rauta',
		items: [
			{
				item: 'laasti',
				amount: 10
			},
			{
				item: 'tiilet',
				amount: 500
			},
			

		]
	},
	{
		storeID: 2,
		name: 'lidl',
		items: [
			{
				item: 'nobelaner',
				amount: 24
			}
		]
	},
];
const width_proportion = '95%';
const styles = StyleSheet.create({
    appContainer: {
        display: "flex",
    },
    contentContainer: {
        width: width_proportion,
        alignSelf: 'center'
    }
});
const Main = () => {
    return (
        <View style={styles.appContainer}>
            <AppBar/>
            <View style={styles.contentContainer}>
            <Switch>
                <Route path='/' exact>
                    <StoreListView stores={stores}/>
                </Route>
                <Route path='/newlist' exact>
                    <NewList shopList={stores}/>
                </Route>
                <Route path='/login' exact>
                    <SignIn/>
                </Route>
                <Route path='/data/:id' exact>
                    <Text> Tähän tulee parametrien mukainen kauppa</Text>
                </Route>
                <Redirect to='/'/>
            </Switch>
            </View>
        </View>
    );
};

export default Main;
