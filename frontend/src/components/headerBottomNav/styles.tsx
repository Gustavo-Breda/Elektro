import styled from "styled-components/native";
import { globalStyles } from "../../global/globalStyles";


export const Wrapper = styled.View`
    width: 100%;
    align-items: center;
    background-color: ${globalStyles.colors.primary_black};
`;

export const ContainerHeader = styled.View`
    width: 83%;
    height: 130px;
    margin-top: 32px;
    margin-bottom: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    gap: 20px;
`;

export const Container1 = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TextStyle = styled.Text`
    color: ${globalStyles.colors.primary_white};

    font-family: "Russo One";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
`;
