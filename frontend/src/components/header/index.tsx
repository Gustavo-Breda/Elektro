import { ReactNode } from "react"
import { ViewStyle } from "react-native"
import { ContainerHeader, HeaderCenter, HeaderLeft, HeaderRight, Wrapper } from "./styles"


export interface IHeader {
    headerLeft?: () => ReactNode;
    headerCenter?: () => ReactNode;
    headerRight?: () => ReactNode;

    containerHeaderStyle?: ViewStyle;
    headerLeftStyle?: ViewStyle;
    headerCenterStyle?: ViewStyle;
    headerRightStyle?: ViewStyle;

    backgroundColor?: string;
}

export const Header = (props: IHeader) => {
    return (
        <Wrapper style={{backgroundColor: props.backgroundColor}}>
            <ContainerHeader style={props.containerHeaderStyle}>
                <HeaderLeft style={props.headerLeftStyle}>
                    {props.headerLeft && props.headerLeft()}
                </HeaderLeft>

                <HeaderCenter style={props.headerCenterStyle}>
                    {props.headerCenter && props.headerCenter()}
                </HeaderCenter>

                <HeaderRight style={props.headerRightStyle}>
                    {props.headerRight && props.headerRight()}      
                </HeaderRight>
            </ContainerHeader>
        </Wrapper>
    )
}