import { Image, ImageSourcePropType } from "react-native"
import { BtnStyle } from "./styles"


export type BtnOnboardingProps = {
    source: ImageSourcePropType
}

export const BtnOnboarding = (props: BtnOnboardingProps) => {
    return(
        <BtnStyle>
            <Image 
            style={{width: 24, height:24}}
            source={props.source}/>
        </BtnStyle>
    )
}