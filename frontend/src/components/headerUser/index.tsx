import React from "react";

import { HeaderTitle } from "./styles";
import { AuthContext } from "../../contexts/auth";
import { globalStyles } from "../../global/globalStyles";

import { Header, IHeader } from "../header";
import { ProfilePhoto } from "../profilePhoto";
import { BtnBackHome } from "../buttons/btnBackHome";


export type HeaderUserProps = IHeader & {
    title?: string,
}

export const HeaderUser = (props: HeaderUserProps) => {
    const Auth = React.useContext(AuthContext);

    return (
        <Header 
        headerLeft={BtnBackHome}
        backgroundColor={globalStyles.colors.primary_white}
        headerCenter={() => <HeaderTitle>{props.title}</HeaderTitle>}
        headerRight={() => <ProfilePhoto width={45} height={45} source={Auth?.user?.photo}/>}/>
    )
}