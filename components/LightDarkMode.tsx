import React, {JSX, useState} from 'react';
import {View, SafeAreaView, Text, useColorScheme, Button} from 'react-native';
import {globalStyles} from '../styles/styles';

const LightDarkMode = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const [getDarkMode, setDarkMode] = useState(isDarkMode);
  const toggleModes = () => {
    setDarkMode(!getDarkMode);
  };
  return (
    <SafeAreaView>
      <View
        style={[
          globalStyles.container,
          getDarkMode ? globalStyles.darkMode : globalStyles.lightMode,
        ]}>
        <Text style={[]}>
          <Text
            style={[
              globalStyles.heading,
              getDarkMode ? globalStyles.lightText : globalStyles.darkText,
            ]}>
            Current Mode: {getDarkMode ? 'Dark' : 'Light'}
          </Text>
        </Text>
        <Button
          onPress={toggleModes}
          title={`Switch To ${getDarkMode ? 'Light' : 'Dark'} Mode`}></Button>
      </View>
    </SafeAreaView>
  );
};

export default LightDarkMode;
