import styled from "styled-components/native";
import { globalStyles } from "../../global/globalStyles";


/* -------------------------------------------------------------------------- */

export const Wrapper = styled.View `
    background-color: ${globalStyles.colors.primary_black};
    
    flex: 1;
    flex-direction: column;
`;

/* -------------------------------------------------------------------------- */


export const ContainerHeader = styled.ImageBackground `
    flex: 1;
    justify-content: center;
`

export const HeaderText = styled.Text `
    color: ${globalStyles.colors.primary_white};

    display: flex;
    justify-content: center;

    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 44px;
`

/* -------------------------------------------------------------------------- */

export const ConteinerForm = styled.View `
    background-color: ${globalStyles.colors.primary_white};
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    height: 60%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const WrapperForm = styled.View `
    width: 83%;
    max-width: 600px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`

export const ContainerBtnFP = styled.View `
    width: 100%;
    margin-bottom: 8px;
    
    display: flex;
    align-items: end;
    justify-content: end;
`

export const BtnForgotPassword = styled.Pressable `
    text-decoration-line: underline;
    color: #000;
`

export const BtnForgotPasswordText = styled.Text `
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
`

export const ContainerBtnSI = styled.View `
    width: 100%;
    margin-top: 20px;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BtnSignIn = styled.Pressable `
    text-decoration-line: underline;
    color: #0271A0;
`

export const BtnSignInText = styled.Text `
    color: #0271A0;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
`