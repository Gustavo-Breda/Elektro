import styled from "styled-components/native";

import { FieldError } from "react-hook-form";
import { globalStyles } from "../../global/globalStyles";


interface PropsController {
    errorTrue: FieldError | undefined
}

export const ContainerView = styled.View `
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
    
    border-bottom-color: #B9B9B9;
    border-bottom-width: 1px;
`

export const InputView = styled.View<PropsController>`
    width: 100%;

    background-color: ${({ errorTrue }) => errorTrue ? "#e0e0e0" : "none"};
    border-color: ${({ errorTrue }) => errorTrue ? "red" : "none"};
    border-width: ${({ errorTrue }) => errorTrue ? "1px" : "none"};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const InputView2 = styled.View`
    width: 90%;
    
    display: flex;
    flex-direction: row;
    gap: 16px;
`

export const InputTitle = styled.Text `
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`

export const InputText = styled.TextInput `
    outline-style: none;
    width: 90%;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    
    color: ${globalStyles.colors.secundary_gray};
`

export const ContainerError = styled.View`
    width: 100%;
    margin-top: 2px;
    color: red;

    font-family: "Montserrat";
    font-weight: 500;
    font-size: 14px;
`