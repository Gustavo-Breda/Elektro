import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { DrawerTypes } from "../../../navigation/drawerNav";
import { BtnStyle } from "./styles";

// REFATORAR BTNICON
export const BtnBackHome = () => {
    const navigation = useNavigation<DrawerTypes>();

    return (
        <Pressable onPress={() => navigation.navigate('Home')}>
            <BtnStyle source={require('../../../assets/images/icon_l_arrow.svg')}/>
        </Pressable>
    )
}