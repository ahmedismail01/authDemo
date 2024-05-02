import React,{memo, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './src/navigation/AuthNavigation';


export default App = () => {
  return (
    <NavigationContainer>
      <AuthNavigation/>
    </NavigationContainer>
  );
};
