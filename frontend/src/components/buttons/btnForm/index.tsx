import { TouchableOpacityProps } from "react-native";

import { ButtonText, ButtonTouchable } from "./styles"


type ButtonProps = TouchableOpacityProps & {
    text: string,
    type: number
}

export const BtnForm = (props: ButtonProps) => {
    return (
        <ButtonTouchable {...props} type={props.type}>
            <ButtonText type={props.type}>{props.text}</ButtonText>
        </ButtonTouchable>
    );
}
