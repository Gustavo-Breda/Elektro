import styled from "styled-components/native";
import { globalStyles } from "../../../global/globalStyles";


export const Wrapper = styled.View`
    height: 100%;
    width: 83%;
    margin: auto;
    background-color: ${globalStyles.colors.primary_white};

    justify-content: center;
    align-content: center;
    gap: 120px;
`
export const Conteiner = styled.View`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

export const ImageOnboarding = styled.Image `
    width: 280px;
    height: 280px;
    resize: contain;
`;

export const TextH3 = styled.Text `
    text-align: center;

    font-family: "Montserrat";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 29px;
`

export const TextH4 = styled.Text `
    text-align: center;

    color: ${globalStyles.colors.secundary_font_color};
    font-family: "Montserrat";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
`