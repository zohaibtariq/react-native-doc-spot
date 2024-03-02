import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
// import LightDarkMode from './components/LightDarkMode';
import FancyCard from './components/FancyCard';
import globalStyles from './styles/globalStyles';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={[globalStyles.bodyBgColor]}>
      <ScrollView style={[globalStyles.container]}>
        <FlatCards />
        <ElevatedCards />
        {/*<LightDarkMode />*/}
        <FancyCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
