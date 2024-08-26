import React from 'react';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';

import BottomNav from './bottomNav';
import { DrawerNavContent } from './drawerNavContent';

import { LoadingScreen } from '../pages/loadingScreen';
import { UserFavorites } from '../pages/userFavorites';
import { UserProducts } from '../pages/userProducts';
import { UserOrders } from '../pages/userOrders';
import { UserCart } from '../pages/userCart';
import { UserData } from '../pages/userData';


const Drawer = createDrawerNavigator();

type DrawerNavigation = {
    Home: undefined,
    Data: undefined,
    Order: undefined,
    Products: undefined,
    Favorites: undefined,
    LoadingScreen: undefined,
    Cart: undefined
};

export default function DrawerNav () {
    const StartScreen = () => {
        return (
            <LoadingScreen type='Home'/>
        )
    }
    
    return (
        <Drawer.Navigator 
        initialRouteName='Elektro'
        screenOptions={ {headerShown: false} }
        drawerContent={ (props) => <DrawerNavContent {...props}/>}>
            <Drawer.Screen name='Elektro' component={StartScreen}/>
            <Drawer.Screen name='Home' component={BottomNav}/>
            <Drawer.Screen name='Data' component={UserData}/>
            <Drawer.Screen name='Favorites' component={UserFavorites}/>
            <Drawer.Screen name='Products' component={UserProducts}/>
            <Drawer.Screen name='Cart' component={UserCart}/>
            <Drawer.Screen name='Orders' component={UserOrders}/>
        </Drawer.Navigator>
    );
}

export type DrawerTypes = DrawerNavigationProp<DrawerNavigation>;
