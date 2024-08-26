import styled from "styled-components/native";
import { globalStyles } from "../../global/globalStyles";


export const Wrapper = styled.View`
    width: 100%;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: ${globalStyles.colors.secundary_gray};
`;

export const ContainerHeader = styled.View`
    width: 83%;
    height: 90px;

    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;  
    justify-content: space-between;
`;

export const HeaderLeft = styled.View`
`;

export const HeaderCenter = styled.View`
`;

export const HeaderRight = styled.View`
`;
