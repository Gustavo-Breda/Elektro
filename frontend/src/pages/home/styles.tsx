import styled from "styled-components/native";
import { globalStyles } from "../../global/globalStyles";


export const Wrapper = styled.View`
    margin-top: 20px;
    
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 30px;
`

export const WrapperContent = styled.View`
    width: 83%;
    
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 30px;
`

/* -------------------------------------------------------------------------- */

export const ContainerElektro = styled.View `
    align-items: center;
    flex-direction: row;
`

export const TextElektro = styled.Text `
    color: ${globalStyles.colors.secundary_orange};

    font-family: "Russo One";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
`

/* -------------------------------------------------------------------------- */

export const WrapperFooter = styled.View `
    width: 100%;
    height: 180px;
    background-color: ${globalStyles.colors.terciary_orange};

    justify-content: center;
    align-items: center;
    gap: 16px;
`

export const TextFooter = styled.Text `
    color: ${globalStyles.colors.secundary_font_color};

    font-family: "Montserrat";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
`

export const Footer = styled.View `
    width: 83%;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
`
 