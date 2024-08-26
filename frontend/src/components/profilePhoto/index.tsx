import { DimensionValue } from "react-native";
import { Image, ImageSourcePropType } from "react-native";

import api from "../../services/api";


export type ProfilePhotoProps = {
    source?: ImageSourcePropType | string,
    height: DimensionValue,
    width: DimensionValue,
    color?: string
}

export const ProfilePhoto = (props: ProfilePhotoProps) => {
    const baseUrl = api.defaults.baseURL;
    const dftSource = require('../../assets/images/icon_profile_without_photo.svg');
    const sourceUrl = (props.source) ? ({uri: `${baseUrl}uploads/${props.source}`}) : dftSource;

    return (
        <Image 
        style={{ tintColor: props.color, borderRadius:500, width:props.width, height: props.height }} 
        source={sourceUrl}/>
    )
}