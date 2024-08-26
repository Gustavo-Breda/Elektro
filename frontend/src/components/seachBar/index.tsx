import { Image } from "react-native"
import { ContainerInput, InputField } from "./styles"

export type SeachBarProps = {
    NavName: string,
    Placeholder: string
}

export const SeachBar = (props: SeachBarProps) => {
    return (
        <ContainerInput>
            <Image 
            style={{width:18, height:18}}
            source={require("../../assets/images/icon_magnifier.svg")}/>
            <InputField placeholder={props.Placeholder}></InputField>
        </ContainerInput>
    )
}