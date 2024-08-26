import styled from "styled-components/native";
import { globalStyles } from "../../../global/globalStyles";

export const Wrapper = styled.View`
    width: 225px;
    height: 40px;
    border-radius: 16px;
    background-color: ${globalStyles.colors.primary_white};
`

export const Container = styled.View`
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
`

export const SearchText = styled.Text`
    font-family: "Montserrat";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
`