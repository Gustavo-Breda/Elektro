import styled from "styled-components/native";
import { globalStyles } from "../../global/globalStyles";


export const Wrapper = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
    
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

export const WrapperFilter = styled.View`
    width: 100%;
    height: 45px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ContainerSearch = styled.View`
    width: 262px;
    height: 100%;
    border-radius: 16px;
    background-color: ${globalStyles.colors.primary_black};

    justify-content: center;
    align-items: center;
`

export const SearchFilter = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${globalStyles.colors.secundary_gray};

    flex-direction: row;
    gap: 10px;
`

export const InputField = styled.TextInput`
    width: 90%;
    height: 18px;
    outline-style: none;
    color: ${globalStyles.colors.secundary_gray};

    font-family: "Montserrat";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
`

export const LabelFilter = styled.Text`
    color: ${globalStyles.colors.primary_black};
    
    font-family: "Montserrat";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
`