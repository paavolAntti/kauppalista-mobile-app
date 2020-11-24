import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import StoreEntry from './StoreEntry';
import theme from '../theme';
import Text from './Text';



const styles = StyleSheet.create({
  separator: {
	height: 10,
	
    backgroundColor: theme.colors.tabBarText
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const StoreListView = ({stores}) => {
	return (
		<View>
			<View style={{alignSelf: 'center', marginBottom: 5}}>
				<Text fontSize='subheading' fontWeight='bold'> TESTUSER LISTS</Text>
			</View>
			<FlatList
				data={stores}
				ItemSeparatorComponent={ItemSeparator}
				renderItem={({ item, index }) => (
					<StoreEntry
						key={item.storeID}
						name={item.name}
						itemCount={item.items.length}
						storeID={item.storeID}
					/>
				)}
				keyExtractor={(item, index) => index.toString()}
			/>
		</View>
	);
};

export default StoreListView;