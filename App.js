import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Home from './screens/Home';
import Profile from './screens/Profile';
import CreateEmployee from "./screens/CreateEmpolyee";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    
    <NavigationContainer>
      <View style={styles.container}>
      <Stack.Navigator>

      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Profile" component={Profile} />

      <Stack.Screen name="Add Employee" component={CreateEmployee} />

      </Stack.Navigator>
    </View>
    </NavigationContainer>
      

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    marginTop: Constants.statusBarHeight,
  },
});
