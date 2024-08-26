import React from 'react';
import { Image, Text, TextStyle, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import HomeStack from './homeStack';
import { globalStyles } from '../global/globalStyles';

import { Chat } from '../pages/chat';
import { Profile } from '../pages/profile';
import { Notifications } from '../pages/notifications';


const Tab = createBottomTabNavigator();

type TabNavigation = {
    Home: undefined,
    Chat: undefined,
    Notifications: undefined,
    Profile: undefined
};

export default function BottomNav () {
    return (
        <Tab.Navigator 
        initialRouteName='HomeBottom'
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {height: 68 ,backgroundColor: globalStyles.colors.secundary_black},
            tabBarInactiveTintColor: globalStyles.colors.primary_white,
            tabBarActiveTintColor: globalStyles.colors.secundary_orange
        }}>
            <Tab.Screen 
            name='HomeBottom' 
            component={HomeStack}         
            options={{
                tabBarIcon: ({color}) => (
                    <View style={{alignItems:'center', justifyContent:'center', gap:5}}>
                        <Image 
                        tintColor={color}
                        style={{width:24, height:24}}
                        source={require("../assets/images/icon_home.svg")} 
                        resizeMode='contain'/>
                        <Text style={{...tabStyles, color: color}}>Home</Text>
                    </View>
                )}}
            />
            <Tab.Screen 
            name='Chat' 
            component={Chat}
            options={{
                tabBarIcon: ({color}) => (
                    <View style={{alignItems:'center', justifyContent:'center', gap:5}}>
                        <Image 
                        tintColor={color}
                        style={{width:24, height:24}}
                        source={require("../assets/images/icon_chat.svg")} 
                        resizeMode='contain'/>
                        <Text style={{...tabStyles, color: color}}>Chat</Text>
                    </View>
                )}}
            />
            <Tab.Screen 
            name='Notifications' 
            component={Notifications}
            options={{
                tabBarIcon: ({color}) => (
                    <View style={{alignItems:'center', justifyContent:'center', gap:5}}>
                        <Image 
                        tintColor={color}
                        style={{width:24, height:24}}
                        source={require("../assets/images/icon_notification.svg")} 
                        resizeMode='contain'/>
                        <Text style={{...tabStyles, color: color}}>Avisos</Text>
                    </View>
                )}}
            />
            <Tab.Screen 
            name='Profile' 
            component={Profile}            
            options={{
                tabBarIcon: ({color}) => (
                    <View style={{alignItems:'center', justifyContent:'center', gap:5}}>
                        <Image 
                        tintColor={color}
                        style={{width:24, height:24}}
                        source={require("../assets/images/icon_profile.svg")} 
                        resizeMode='contain'/>
                        <Text style={{...tabStyles, color: color}}>Perfil</Text>
                    </View>
                )}}
            />
        </Tab.Navigator>
    );
}

const tabStyles: TextStyle = {
    fontFamily: "Montserrat",
    fontSize: 11,
    fontWeight: 400
};

export type TabTypes = BottomTabNavigationProp<TabNavigation>;
