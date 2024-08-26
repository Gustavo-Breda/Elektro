import styled from "styled-components/native"
import { globalStyles } from "../../global/globalStyles"


export const ContainerSection = styled.View`
    width: 100%;
`

export const CardSectionName = styled.View`
    justify-content: flex-start;

    border-top-width: 1px;
    border-top-color: ${globalStyles.colors.secundary_gray};

    border-bottom-width: 1px;
    border-bottom-color: ${globalStyles.colors.secundary_gray};
`

export const SectionName = styled.Text`
    margin-top: 8px;
    margin-bottom: 8px;

    font-family: "Montserrat";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
`

export const ScrollProducts = styled.ScrollView`
    margin-top: 24px;
`

export const ScrollProductsContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 26px;
`