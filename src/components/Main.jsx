import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import Text from './Text';
import AppBar from './AppBar';
import StoreListView from './StoreListView';

const Main = () => {
    return (
        <View>
            <AppBar/>
            <Switch>
                <Route path='/' exact>
                    <StoreListView/>
                </Route>
                <Route path='/newlist' exact>
                    <Text>Tähän uuden listan luominen</Text>
                </Route>
                <Route path='/login' exact>
                    <Text>Tähän kirjautuminen</Text>
                </Route>
                <Route path='/data/:id' exact>
                    <Text> Tähän tulee parametrien mukainen kauppa</Text>
                </Route>
                <Redirect to='/'/>
            </Switch>
        </View>
    );
};

export default Main;
