import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import LightDarkMode from './components/LightDarkMode';
import FancyCard from './components/FancyCard.tsx';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <LightDarkMode />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default App;
