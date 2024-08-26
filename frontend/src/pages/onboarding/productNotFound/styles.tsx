import styled from "styled-components/native";
import { globalStyles } from "../../../global/globalStyles";


export const Conteiner = styled.View `
    padding-left: 32px;
    padding-right: 32px;

    flex: 1;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;

export const TextH2 = styled.Text `
    text-align: center;
    color: #000;

    text-align: center;
    font-family: "Russo One";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 38px;
`;

export const ImageOnboarding = styled.Image `
    width: 280px;
    height: 280px;
    resize: contain;
`;

export const TextH4 = styled.Text `
    color: ${globalStyles.colors.secundary_font_color};
    text-align: center;
    padding: 10px;

    font-family: "Montserrat";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
`