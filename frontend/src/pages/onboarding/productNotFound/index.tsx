import React from "react";
import { StatusBar } from "react-native";

import ObdImage from "../../../assets/images/errorImage.svg"
import { Conteiner, ImageOnboarding, TextH2, TextH4 } from "./styles";


export const OnboardingError = () => {
    return (
        <Conteiner>
            <StatusBar/>
            <TextH2>Opsss...</TextH2>
            <ImageOnboarding source={ObdImage}></ImageOnboarding>
            <TextH4>Infelizmente, parece que não encontramos o produto desejado</TextH4>
        </Conteiner>
    );
}