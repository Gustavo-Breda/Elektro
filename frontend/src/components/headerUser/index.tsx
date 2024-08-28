import React from "react";

import { HeaderTitle } from "./styles";
import { AuthContext } from "../../contexts/auth";
import { globalStyles } from "../../global/globalStyles";

import { Header, IHeader } from "../header";
import { ProfilePhoto } from "../profilePhoto";

import { BtnIcon } from "../buttons/btnIcon";
import { useNavigation } from "@react-navigation/native";
import { DrawerTypes } from "../../navigation/drawerNav";


export type HeaderUserProps = IHeader & {
    title?: string,
}

export const HeaderUser = (props: HeaderUserProps) => {
    const navigation = useNavigation<DrawerTypes>();
    const Auth = React.useContext(AuthContext);

    const btnBackHome = () => {
        return (
            <BtnIcon
            onPress={() => navigation.navigate('Home')}
            source={require('../../assets/images/icon_l_arrow.svg')}
            btnImageStyle={{tintColor: globalStyles.colors.primary_black}}/>
        )
    }

    return (
        <Header 
        backgroundColor={globalStyles.colors.primary_white}
        headerLeft={btnBackHome}
        headerCenter={() => <HeaderTitle>{props.title}</HeaderTitle>}
        headerRight={() => <ProfilePhoto width={45} height={45} source={Auth?.user?.photo}/>}/>
    )
}