import { SeachBar } from "../seachBar";
import { ProfilePhoto } from "../profilePhoto";
import { globalStyles } from "../../global/globalStyles";
import { ContainerHeader, Container1, TextStyle, Wrapper } from "./styles";


export type HeaderBottomNav = {
    navName: string,
    Placeholder: string
}

export const HeaderBottomNav = (props: HeaderBottomNav) => {
    const color = globalStyles.colors.primary_white;

    return (
        <Wrapper>
            <ContainerHeader>
                <Container1>
                    <TextStyle>{props.navName}</TextStyle>
                    <ProfilePhoto width={55} height={55} color={color}/>
                </Container1>
                <SeachBar 
                NavName={props.navName} 
                Placeholder={props.Placeholder}/>
            </ContainerHeader>
        </Wrapper>
    )
}