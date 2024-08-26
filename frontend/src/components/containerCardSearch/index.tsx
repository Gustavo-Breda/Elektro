import { View } from "react-native";

import CardLoader from "../cardLoader";
import { ScrollProductsContainer } from "./styles";
import { CardProductProps, CardProduct } from "../cardProduct";


export type ContainerCardSearchProps = {
    error: boolean,
    loading: boolean,
    products?: CardProductProps[]
}

export const ContainerCardSearch = (props: ContainerCardSearchProps) => {
    return (
        <View style={{width:"100%", display:"flex"}}>
            <ScrollProductsContainer>
                {(!props.loading && !props.error) ? 
                    props.products?.slice(0, 50).map((product) => 
                    (
                        <CardProduct
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
        </View>
    )
}