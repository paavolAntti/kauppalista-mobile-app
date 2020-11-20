import { Platform } from 'react-native';

const theme = {
    colors: {
		textPrimary: '#24292e',
		textSecondary: '#d2dae2',
		primary: '#0366d6',
		tabBar: '#05c46b',
		tabBarText: '#FFFFFF',
		accent: '#34e7e4',
		error: '#FF0000'
    },
    fontSizes: {
		body: 14,
		subheading: 16,
    },
    fonts: {
		main: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    },
    fontWeights: {
		normal: '400',
		bold: '700',
    },
};
  
  export default theme;