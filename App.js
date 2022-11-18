import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, Image, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import onboarding from './views/onboarding';
import Register from './views/register';
import Login from './views/login';


const App = () => {
  const Stack = createNativeStackNavigator();



  return (
      <><NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="onboarding" component={onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    
    </>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDEE",
  },
  viewContainer: {
    flex: 1,
    margin: 0,
    padding: 0
  },
  elipse: {
    height: 300,
    width: 300,
    marginTop: -100,
    marginLeft: -20
  },
});

export default App;
