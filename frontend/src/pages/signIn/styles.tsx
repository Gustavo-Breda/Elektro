import styled from "styled-components/native";
import { globalStyles } from "../../global/globalStyles";


export const Wrapper = styled.View `
    flex: 1;
    flex-direction: column;
    justify-content: center;

    background-color: ${globalStyles.colors.primary_white};
`;

export const HeaderTitle = styled.Text`
    color: ${globalStyles.colors.primary_font_color};
    text-align: center;

    font-family: "Montserrat";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
`

export const ConteinerForm = styled.View `
    width: 83%;
    max-width: 600px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    background-color: ${globalStyles.colors.primary_white};
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
`;
