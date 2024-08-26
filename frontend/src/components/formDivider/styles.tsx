import styled from "styled-components/native";
import { globalStyles } from "../../global/globalStyles";

interface DividerProps {
    type: 0 | 1
}

export const DividerContainer = styled.View `
    margin-top: 8px;
    width: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const DividerContainerBtn = styled.View<DividerProps>`
    width: 42%;

    display: flex;
    align-items: center;
    flex-direction: ${({ type }) => type === 0 ? "column" : "column-reverse"};
    gap: 20px;
    
    border-top-color: ${({ type }) => type === 0 ? "black" : "none"};
    border-top-width: ${({ type }) => type === 0 ? "1px" : "none"};

    border-bottom-color: ${({ type }) => type === 1 ? "black" : "none"};
    border-bottom-width: ${({ type }) => type === 1 ? "1px" : 0};
`

export const BtnView = styled.TouchableOpacity `
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${globalStyles.colors.primary_black};
    border-radius: 35px;

    width: 68.986px;
    height: 68.986px;
`

export const DividerTextView = styled.Text<DividerProps>`
    margin-top: ${({ type }) => type === 0 ? "-9px" : "0"};
    margin-bottom: ${({ type }) => type === 1 ? "-9px" : "0"};

    display: ${({ type }) => type === 1 ? "flex" : "block"};
    align-items: ${({ type }) => type === 1 ? "end" : "block"};
`

export const DividerText = styled.Text<DividerProps>`
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
`