import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Cars from './Components/CarItem/Cars'


const App = () => {
  return (
    <View style={styles.container}>

      <Cars name = {'Model S'}
      tagline = {'Order Online For'}
      taglineCTA = {'Touchless Delivery'}
      image = {require('./assets/images/ModelS.jpeg')} />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App