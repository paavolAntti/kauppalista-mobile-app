import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
const styles = StyleSheet.create({
	
  container: {
    height: Constants.statusBarHeight*3,
    paddingLeft: 10,
    paddingRight:10,
    display: 'flex',
    backgroundColor: theme.colors.tabBar,
    flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
    marginBottom: 20,
  },
    text: {
        color: theme.colors.tabBarText,
    }
  // ...
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<TouchableWithoutFeedback>
					<Link to="/">
						<AppBarTab
							tabName={"SHOPS"}
							style={styles}
						/>
					</Link>
				</TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
					<Link to="/newlist">
						<AppBarTab
							tabName={"NEW LIST"}
							style={styles}
						/>
					</Link>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback>
					<Link to="/login">
						<AppBarTab
							tabName={"SIGN IN"}
							style={styles}
						/>
					</Link>
				</TouchableWithoutFeedback>
			</ScrollView>
		</View>
	);
};

export default AppBar;