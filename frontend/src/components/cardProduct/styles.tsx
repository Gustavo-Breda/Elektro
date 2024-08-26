import styled from "styled-components/native";
import { globalStyles } from "../../global/globalStyles";


export const CardView = styled.View`
    width: 155px;
    height: 190px;
    border-radius: 15px;
    
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;

    margin-right: 10px;
    margin-bottom: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const WrapperCardInfo = styled.View`
    width: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const CardInfo = styled.View`
    display: flex;
    align-items: flex-start;
    gap: 4px;
`

export const CardInfoName = styled.Text`
    width: 80px;
    color: ${globalStyles.colors.secundary_font_color};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    text-align: center;
    font-family: "Montserrat";
    font-size: 13.241px;
    font-style: normal;
    font-weight: 400;
    line-height: 15.5px;
`

export const CardInfoPrice = styled.Text`
    color: ${globalStyles.colors.secundary_font_color};

    text-align: center;
    font-family: "Montserrat";
    font-size: 15.133px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
`