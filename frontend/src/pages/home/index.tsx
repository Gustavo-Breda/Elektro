import { useEffect, useState } from "react";
import { Image, ScrollView } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";

import { DrawerTypes } from "../../navigation/drawerNav";
import productServices from "../../services/productServices";

import { Wrapper, WrapperContent, ContainerElektro, TextElektro } from "./styles";
import { WrapperFooter, Footer, TextFooter } from "./styles";
import { globalStyles } from "../../global/globalStyles";

import { Header } from "../../components/header";
import { BtnIcon } from "../../components/buttons/btnIcon";
import { BtnSearch } from "../../components/buttons/btnSearch";
import { BtnDrawer } from "../../components/buttons/btnDrawer";
import { ContainerCardHome } from "../../components/containerCardHome";


type ProductData = {
    id: number;
    name: string;
    price: string;
    description: string;
}

export const Home = () => {
    const [products, setProducts] = useState<ProductData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    const isFocused = useIsFocused();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productServices.readAll();
                setProducts(response?.data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []); 

    const BtnCart = () => {
        const navigation = useNavigation<DrawerTypes>();
    
        return (
            <BtnIcon 
            source={require('../../assets/images/icon_cart.svg')}
            onPress={() => navigation.navigate('Cart')}>
            </BtnIcon>
        )
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
            <Header 
            backgroundColor={globalStyles.colors.primary_black}
            headerLeft={BtnDrawer}
            headerCenter={BtnSearch}
            headerRight={BtnCart}/>

            <Wrapper>
                <WrapperContent>
                    
                    <ContainerElektro>
                        <Image 
                        style={{width: 40, height: 40}} 
                        source={require("../../assets/images/icon_elektro.svg")}/>

                        <TextElektro>Bem Vindo à Elektro!</TextElektro>
                    </ContainerElektro>
                    
                    <ContainerCardHome 
                    homeIsFocused={isFocused}
                    name={"Para você"} 
                    products={products.slice(0, 9)}
                    loading={loading}
                    error={error}/>

                    <ContainerCardHome 
                    homeIsFocused={isFocused}
                    name={"Produtos em destaque"} 
                    products={products.slice(10, 19)}
                    loading={loading}
                    error={error}/>

                    <ContainerCardHome 
                    homeIsFocused={isFocused}
                    name={"Mais vendidos"} 
                    products={products.slice(20, 29)}
                    loading={loading}
                    error={error}/>
                </WrapperContent>

                <WrapperFooter>
                    <TextFooter>Siga-nos nas redes sociais!</TextFooter>
                    <Footer>
                        <Image 
                        style={{width: 24, height:24}} 
                        source={require("../../assets/images/icon_facebook_1.svg")}/>

                        <Image 
                        style={{width: 24, height:24}} 
                        source={require("../../assets/images/icon_instagram.svg")}/>

                        <Image 
                        style={{width: 24, height:24}} 
                        source={require("../../assets/images/icon_tiktok.svg")}/>

                        <Image 
                        style={{width: 24, height:24}} 
                        source={require("../../assets/images/icon_twitter.svg")}/>

                        <Image 
                        style={{width: 24, height:24}} 
                        source={require("../../assets/images/icon_LinkedIn.svg")}/>
                    </Footer>
                </WrapperFooter>
            </Wrapper>
        </ScrollView>
    )
}

