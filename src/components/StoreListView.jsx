import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import StoreEntry from './StoreEntry';
import theme from '../theme';
import Text from './Text';

const stores = [
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

const styles = StyleSheet.create({
  separator: {
	height: 5,
	
    backgroundColor: theme.colors.accent
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const StoreListView = () => {
	return (
		<View>
			<View style={{alignSelf: 'center'}}>
				<Text fontSize='subheading' fontWeight='bold'> All users lists</Text>
			</View>
			<FlatList
				data={stores}
				ItemSeparatorComponent={ItemSeparator}
				renderItem={({ item }) => (
					<StoreEntry
						name={item.name}
						itemCount={item.items.length}
						storeID={item.storeID}
					/>
				)}
			/>
		</View>
	);
};

export default StoreListView;