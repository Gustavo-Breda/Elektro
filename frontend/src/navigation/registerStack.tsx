import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../pages/login";
import { SignIn } from "../pages/signIn";
import { LoadingScreen } from "../pages/loadingScreen";
import { SuccessfulSignIn } from "../pages/onboarding/successfulSignIn";


const Stack = createNativeStackNavigator ();

type StackNavigation = {
    Login: undefined,
    SignIn: undefined,
    LoadingScreen: undefined,
    SuccessfulSignIn: undefined,
}

export default function RegisterStack () {
    const StartScreen = () => {
        return (
            <LoadingScreen type='Register'/>
        )
    }

    return (
        <Stack.Navigator initialRouteName='Elektro'>
            <Stack.Screen 
            name='Elektro' 
            component={StartScreen} 
            options={{headerShown: false}}/>

            <Stack.Screen 
            name='Login' 
            component={Login}
            options={{headerShown: false}}/>

            <Stack.Screen 
            name='SignIn' 
            component={SignIn}
            options={{headerShown: false}}/>

            <Stack.Screen 
            name='SuccessfulSignIn' 
            component={SuccessfulSignIn}
            options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export type RegisterStackTypes = NativeStackNavigationProp<StackNavigation>;