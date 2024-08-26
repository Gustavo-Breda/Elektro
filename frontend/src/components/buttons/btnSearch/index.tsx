import { Image, Pressable, Text } from "react-native"
import { Container, SearchText, Wrapper } from "./styles"
import { useNavigation } from "@react-navigation/native";
import { HomeStackStypes } from "../../../navigation/homeStack";


export const BtnSearch = () => {
    const navigation = useNavigation<HomeStackStypes>();

    return (
        <Pressable onPress={() => navigation.navigate('Search')}>
            <Wrapper>
                <Container>
                    <Image 
                    style={{width: 18, height: 18}}
                    source={require('../../../assets/images/icon_magnifier.svg')}/>
                    <SearchText>Encontrar na Elektro</SearchText>
                </Container>
            </Wrapper>
        </Pressable>
    )
}