import { Image, View } from "react-native";
import { BtnView, DividerContainer, DividerContainerBtn, DividerText, DividerTextView } from "./styles";


type DividerProps = {
    type: 0 | 1
}

export const FormDivider = (props: DividerProps) => {
    return (
        <DividerContainer>
            <DividerContainerBtn type={props.type}>
                <View></View>
                <BtnView>
                    <Image style={{width:24, height:24}} source={require("../../assets/images/icon_facebook.svg")}/>
                </BtnView>
            </DividerContainerBtn>

            <DividerTextView type={props.type}>
                <DividerText type={props.type}>ou</DividerText>
            </DividerTextView>

            <DividerContainerBtn type={props.type}>
                <View></View>
                <BtnView>
                    <Image style={{width:24, height:24}} source={require("../../assets/images/icon_google.svg")}/>
                </BtnView>
            </DividerContainerBtn>
        </DividerContainer>
    );
}