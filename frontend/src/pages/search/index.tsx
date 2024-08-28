import React from "react";
import { useEffect, useState } from "react";
import { Image, ScrollView, View } from "react-native";

import productServices from "../../services/productServices";
import { globalStyles } from "../../global/globalStyles";

import { LabelFilter, SearchFilter, WrapperFilter } from "./styles";
import { ContainerSearch, InputField, Wrapper, WrapperContent } from "./styles";

import { HeaderUser } from "../../components/headerUser";
import { ContainerCardSearch } from "../../components/containerCardSearch";


type ProductData = {
    id: number;
    name: string;
    price: string;
    description: string;
}

export const Search = () => {
    const [products, setProducts] = useState<ProductData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productServices.readAll();

                setProducts(response?.data);
                setFilteredProducts(response?.data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        if (searchText) {
            const filtered = products.filter(product =>
                product.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    }, [searchText, products]);

    return (
        <>
            <HeaderUser title="Pesquisa"/>

            <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
                <Wrapper>
                    <WrapperContent>
                        <WrapperFilter>
                            <ContainerSearch>
                                <SearchFilter>
                                    <Image 
                                    source={require("../../assets/images/icon_magnifier.svg")}
                                    style={{tintColor: globalStyles.colors.secundary_gray, width:18, height:18}}/>
                                    <InputField onChangeText={setSearchText} placeholder="Encontrar na Elektro"></InputField>
                                </SearchFilter>
                            </ContainerSearch>
                            <View style={{alignItems:"center", gap: 4}}>
                                <Image 
                                source={require("../../assets/images/icon_filter.svg")}
                                style={{tintColor: globalStyles.colors.primary_black, width:18, height:18}}/>
                                <LabelFilter>Filtro</LabelFilter>
                            </View>
                        </WrapperFilter>

                        <ContainerCardSearch 
                        error={error} 
                        loading={loading} 
                        products={filteredProducts}/>
                    </WrapperContent>
                </Wrapper>
            </ScrollView>
        </>
    )
}