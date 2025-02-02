import { GestureResponderEvent, ImageSourcePropType, ImageStyle, Pressable, ViewStyle } from "react-native";
import { BtnImage } from "./styles";


export interface IBtnIcon {
    btnContainerStyle?: ViewStyle,
    btnImageStyle?: ImageStyle,
    source: ImageSourcePropType,
    onPress: ((event: GestureResponderEvent) => void) | null | undefined,
}

export const BtnIcon = (props: IBtnIcon) => {
    return (
        <Pressable style={props.btnContainerStyle} onPress={props.onPress}>
            <BtnImage style={props.btnImageStyle} source={props.source}/>
        </Pressable>
    )
}
