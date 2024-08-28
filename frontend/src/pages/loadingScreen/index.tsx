import React from "react";
import { useEffect, useRef } from "react";
import { Animated, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Conteiner, Logo, Text } from "./styles";

import { DrawerTypes } from "../../navigation/drawerNav";
import { RegisterStackTypes } from "../../navigation/registerStack";


export type LoadingScreenProps = {
    type: 'Register' | 'Home'
}

export const LoadingScreen = (props: LoadingScreenProps) => {
    const stackNavigation = useNavigation<RegisterStackTypes>();
    const drawerNavigation = useNavigation<DrawerTypes>();
    
    const fadeAnim = useRef(new Animated.Value(1)).current; 
  
    useEffect(() => {
        const timeout = setTimeout(() => {
            Animated.timing(fadeAnim, { 
                toValue: 0, 
                duration: 1000, 
                useNativeDriver: true 
            }).start(() => {
                {
                    props.type == 'Home' ? 
                    drawerNavigation.navigate('Home') 
                    :
                    stackNavigation.navigate('Login')
                }
            });
        }, 1000); 
  
        return () => clearTimeout(timeout); 
    }, [fadeAnim]);

    return (
        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
            <Conteiner>
                <StatusBar/>
                <Logo source={require('../../assets/images/icon_logo.svg')}/>
                <Text>Elektro</Text>
            </Conteiner>
        </Animated.View>
      );
}
