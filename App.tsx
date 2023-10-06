import * as React from 'react';
import {HomePage} from './pages/core/HomePage'
import {LoginPage} from './pages/core/LoginPage'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Header} from "./pages/core/header/Header";
import {useState} from "react";


const Stack = createNativeStackNavigator();





function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                {/*<Stack.Screen name="Login"*/}
                {/*              component={LoginPage}/>*/}

                <Stack.Screen name="Home"
                              component={HomePage}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
