import { useNavigation } from "@react-navigation/native";

import { BtnIcon } from "../btnIcon";
import { DrawerTypes } from "../../../navigation/drawerNav";
import { globalStyles } from "../../../global/globalStyles";

// REFATORAR BTNICON
export const BtnDrawer = () => {
    const navigation = useNavigation<DrawerTypes>();

    return (
        <BtnIcon 
        btnImageStyle={{tintColor: globalStyles.colors.primary_white}}
        source={require('../../../assets/images/icon_drawer.svg')}
        onPress={() => navigation.openDrawer()}>
        </BtnIcon>
    )
}