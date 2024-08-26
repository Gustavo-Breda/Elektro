import styled from "styled-components/native";
import { globalStyles } from "../../global/globalStyles";


export const Conteiner = styled.View`
    background-color: ${globalStyles.colors.primary_white};

    flex: 1;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 330px;
    height: 330px;
    resize: contain;
`;

export const Text = styled.Text`
    color: ${globalStyles.colors.primary_font_color};
    margin-top: -30px;

    font-family: "Russo One";
    font-size: 56px;
    font-style: normal;
    font-weight: 400px;
    line-height: 61px;
`