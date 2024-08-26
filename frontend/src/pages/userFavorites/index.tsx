import React from "react";
import { useState, useEffect } from "react";

import { ScrollView, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";
import favoriteServices from "../../services/favoriteServices";
import productServices from "../../services/productServices";

import { HeaderUser } from "../../components/headerUser";
import { ContainerCardSearch } from "../../components/containerCardSearch";


type ProductData = {
    id: number;
    name: string;
    price: string;
    description: string;
}

export const UserFavorites = () => {
    const Auth = React.useContext(AuthContext);
    const isFocused = useIsFocused();

    const [products, setProducts] = useState<ProductData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await favoriteServices.readAll(Auth?.token);
                const favorites = response?.data.favorites;

                const favoritedProducts = await Promise.all(
                    favorites.map(async (product: any) => {
                        const response = await productServices.read(product?.productId);
                        return response?.data;
                    })
                );

                setProducts(favoritedProducts);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchFavorites();
    }, [isFocused]);

    return (
        <>
        <HeaderUser title="Meus Favoritos"/>   
        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
            <View style={{marginTop: 20, marginBottom: 20}}>
                <ContainerCardSearch
                error={error} 
                loading={loading} 
                products={products}/>
            </View>
        </ScrollView>
        </>
        
    );
};