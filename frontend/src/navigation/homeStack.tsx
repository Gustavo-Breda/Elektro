import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Search } from "../pages/search";
import { Home } from "../pages/home";


const Stack = createNativeStackNavigator();

type StackNavigation = {
    Home: undefined,
    Search: undefined,
}

export default function HomeStack () {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
            name='Home' 
            component={Home} 
            options={{ headerShown: false }}/>
            <Stack.Screen 
            name='Search' 
            component={Search} 
            options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

export type HomeStackStypes = NativeStackNavigationProp<StackNavigation>;