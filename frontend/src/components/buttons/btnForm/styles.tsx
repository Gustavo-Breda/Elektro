import styled from "styled-components/native";
import { globalStyles } from "../../../global/globalStyles";


interface ButtonProps {
    type: number
}

export const ButtonTouchable = styled.TouchableOpacity<ButtonProps>`
    background: ${({ type }) => type === 0 ? globalStyles.colors.primary_black : globalStyles.colors.primary_white};
    border-radius: 16px;
    padding: 10px;

    width: 188px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const ButtonText = styled.Text<ButtonProps>`
    color: ${({ type }) => type === 0 ? globalStyles.colors.primary_white : globalStyles.colors.primary_black};
`
