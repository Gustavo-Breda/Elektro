import React from 'react';
import { DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';

import { AuthContext } from '../contexts/auth';
import { globalStyles } from '../global/globalStyles';
import { ProfilePhoto } from '../components/profilePhoto';
import { Pressable, Text, TextStyle, View, ViewStyle } from 'react-native';


export const DrawerNavContent = ( {navigation}: DrawerContentComponentProps ) => {
    const Auth = React.useContext(AuthContext);
    
    return (
        <>
        <View style={Wrapper1}>
            <View style={ContainerProfile}>
                <ProfilePhoto 
                width={50} 
                height={50}
                source={Auth?.user?.photo}/>
                <Text style={ProfileText}>{Auth.user?.name.split(' ')[0]}</Text>
            </View>
        </View>
        <View style={Wrapper2}>
            <View style={ContainerPages}>
                <View style={PageNavigationStyle}>
                    <DrawerItem
                    label={"Meus Dados"}
                    labelStyle={DrawerText}
                    style={{marginTop:10, marginBottom:10, marginLeft:-8, marginRight:0}}
                    onPress={() => {navigation.navigate('Data')}}>
                    </DrawerItem>
                </View>

                <View style={PageNavigationStyle}>
                    <DrawerItem
                    label={"Meus Favoritos"}
                    labelStyle={DrawerText}
                    style={{marginTop:10, marginBottom:10, marginLeft:-8, marginRight:0}}
                    onPress={() => {navigation.navigate('Favorites')}}>
                    </DrawerItem>
                </View>
                

                <View style={PageNavigationStyle}>
                    <DrawerItem
                    label={"Meus Produtos"}
                    labelStyle={DrawerText}
                    style={{marginTop:10, marginBottom:10, marginLeft:-8, marginRight:0}}
                    onPress={() => {navigation.navigate('Products')}}>
                    </DrawerItem>
                </View>   

                <View style={PageNavigationStyle}>
                    <DrawerItem
                    label={"Meus Pedidos"}
                    labelStyle={DrawerText}
                    style={{marginTop:10, marginBottom:10, marginLeft:-8, marginRight:0}}
                    onPress={() => {navigation.navigate('Orders')}}>
                    </DrawerItem>
                </View>
                
                <View style={PageNavigationStyle}>
                    <DrawerItem
                    label={"Meu Carrinho"}
                    labelStyle={DrawerText}
                    style={{marginTop:10, marginBottom:10, marginLeft:-8, marginRight:0}}
                    onPress={() => {navigation.navigate('Cart')}}>
                    </DrawerItem>
                </View>
            </View>

            <View style={{width: "83%", paddingBottom: 20 }}>
                <Pressable onPress={Auth.logout}>
                    <Text style={DrawerText}>Sair</Text>
                </Pressable>
            </View>
        </View>
        </>
    )
}

/* -------------------------------------------------------------------------- */

const Wrapper1: ViewStyle = {
    height: "10%", 
    backgroundColor: globalStyles.colors.primary_black,

    alignItems:"center",
    alignContent:"center",
    justifyContent:"center"
}

const ContainerProfile: ViewStyle = {
    width:"83%",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
}

const ProfileText: TextStyle = {
    color: globalStyles.colors.primary_white,

    fontFamily: "Montserrat",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 24
}

/* -------------------------------------------------------------------------- */

const Wrapper2: ViewStyle = {
    height: "90%", 
    backgroundColor: globalStyles.colors.primary_white,
    
    alignItems:"center",
    alignContent:"center",
    justifyContent:"space-between"
}

const ContainerPages: ViewStyle = {
    width: "83%",

    flex: 1, 
    flexDirection:"column",
}

const PageNavigationStyle: ViewStyle = {
    borderBottomColor: globalStyles.colors.secundary_gray,
    borderBottomWidth: 1,
    padding:0
}

const DrawerText: TextStyle = {
    color: globalStyles.colors.secundary_font_color,
    
    fontFamily: "Montserrat",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 19
}


/* -------------------------------------------------------------------------- */