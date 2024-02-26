import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  text: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#444', // Default text color
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Default text color
  },
  darkMode: {
    backgroundColor: '#000000',
  },
  lightMode: {
    backgroundColor: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
  lightText: {
    color: '#FFFFFF',
  },
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    // display: 'flex',
    // flexGrow: 1,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
