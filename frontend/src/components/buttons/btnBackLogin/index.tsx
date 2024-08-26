import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BtnStyle } from "./styles";
import { RegisterStackTypes } from "../../../navigation/registerStack";

// REFATORAR BTNICON
export const BtnBackLogin = () => {
    const navigation = useNavigation<RegisterStackTypes>();

    return (
        <Pressable onPress={() => navigation.navigate('Login')}>
            <BtnStyle source={require('../../../assets/images/icon_l_arrow.svg')}/>
        </Pressable>
    )
}