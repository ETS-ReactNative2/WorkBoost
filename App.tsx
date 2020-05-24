import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Nest from './src/routes/navigationController';

export default function App() {
  return (
    <NavigationContainer>
      <Nest />
    </NavigationContainer>  
  );
}

