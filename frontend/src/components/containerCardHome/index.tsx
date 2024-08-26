import { View } from "react-native";

import CardLoader from "../cardLoader";
import { CardProductProps, CardProduct } from "../cardProduct";
import { CardSectionName, ContainerSection, ScrollProducts, ScrollProductsContainer, SectionName } from "./styles";


export type ContainerCardHomeProps = {
    name: string,
    error: boolean,
    loading: boolean,
    homeIsFocused?: boolean,
    products?: CardProductProps[]
}

export const ContainerCardHome = (props: ContainerCardHomeProps) => {
    return (
        <View style={{width:"100%", display:"flex"}}>
            <ContainerSection>
                <CardSectionName>
                    <SectionName>{props.name}</SectionName>
                </CardSectionName>
            </ContainerSection>
            
            <ScrollProducts showsHorizontalScrollIndicator={false} horizontal={true}>
                <ScrollProductsContainer>
                    {(!props.loading && !props.error) ? 
                        props.products?.slice(0, 6).map((product) => 
                        (
                            <CardProduct
                            homeisFocused={props?.homeIsFocused}
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}/>
                        )) 
                        : 
                        (
                            Array.from({ length: 10 }).map((_, index) => (
                                <CardLoader key={index}/>
                            ))
                        )
                    }
                </ScrollProductsContainer>
            </ScrollProducts>
        </View>
    )
}