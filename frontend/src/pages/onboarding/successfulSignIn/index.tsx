import React from "react";
import { useRef } from "react";
import { Animated, StatusBar, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { globalStyles } from "../../../global/globalStyles";
import { BtnIcon } from "../../../components/buttons/btnIcon";
import { RegisterStackTypes } from "../../../navigation/registerStack";
import { Conteiner, ImageOnboarding, TextH3, TextH4, Wrapper } from "./styles";

import ObdImage from "../../../assets/images/successfulSignIn.svg";
import BackArrow from "../../../assets/images/icon_r_arrow.svg";


export const SuccessfulSignIn = () => {
    const navigation = useNavigation<RegisterStackTypes>();
    const fadeAnim = useRef(new Animated.Value(1)).current; 
    const color = globalStyles.colors.secundary_gray;

    const handleOnPress = () => {
        setTimeout(() => {
            Animated.timing(fadeAnim, { 
                toValue: 0, 
                duration: 500, 
                useNativeDriver: true 
            }).start(() => {
                navigation.navigate('Login'); 
            });
        }, 500) 
    };

    return (
        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
            <Wrapper>
                <Conteiner>
                    <StatusBar/>
                    <ImageOnboarding source={ObdImage}></ImageOnboarding>
                    <TextH3>Parabéns, você conseguiu!</TextH3>
                    <TextH4>Bem-vindo ao time de usuários e {'\n'} colaboradores Elektro</TextH4>
                </Conteiner>
                <View style={{alignItems: "flex-end"}}>
                    <BtnIcon 
                    btnContainerStyle={{ 
                        width: 50, 
                        height: 50, 
                        borderRadius: 50, 
                        backgroundColor: color,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    onPress={handleOnPress}
                    source={BackArrow}/>
                </View>
            </Wrapper>
        </Animated.View>
    );
}