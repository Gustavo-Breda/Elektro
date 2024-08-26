import styled from "styled-components/native";
import { globalStyles } from "../../global/globalStyles";

export const ContainerInput = styled.View`
    width: 100%;
    height: 40px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 16px;
    background-color: ${globalStyles.colors.primary_white};

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

export const InputField = styled.TextInput`
    width: 90%;
    height: 18px;
    outline-style: none;
    color: ${globalStyles.colors.secundary_font_color};

    font-family: "Montserrat";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
`