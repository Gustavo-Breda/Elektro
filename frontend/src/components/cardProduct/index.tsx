import React from 'react';
import{ useState, useEffect } from 'react';
import { Image, ImageSourcePropType, Pressable } from 'react-native';

import api from '../../services/api';
import { CardInfo, CardInfoName, CardInfoPrice, CardView, WrapperCardInfo } from './styles';

import { AuthContext } from '../../contexts/auth';
import favoriteServices from '../../services/favoriteServices';


export type CardProductProps = {
    image?: ImageSourcePropType | string,
    homeisFocused?: boolean,
    price?: string,
    name: string,
    id?: number
};

export const CardProduct = (props: CardProductProps) => {
    const Auth = React.useContext(AuthContext);

    const favorite_0 = require("../../assets/images/icon_favorite_0.svg");
    const favorite_1 = require("../../assets/images/icon_favorite_1.svg");
    const [isFavorited, setIsFavorited] = useState<ImageSourcePropType>(favorite_0);

    const baseUrl = api.defaults.baseURL;
    const dftImage = require('../../assets/images/image_noPhoto.jpg');
    const imageUrl = (props.image) ? ({uri: `${baseUrl}uploads/${props.image}`}) : dftImage;

    useEffect(() => {
        const checkIfFavorite = async () => {
            if (props.id) {
                try {
                    const response = await favoriteServices.isFavorite(props.id, Auth?.token);
                    if (response?.status === 201) {
                        return setIsFavorited(favorite_1);
                    }
                    setIsFavorited(favorite_0)
                } catch (error) {
                    console.error('Error checking favorite status:', error);
                }
            }
        };

        checkIfFavorite();
    }, [props.homeisFocused]);
    // Gambiarra: home nao estava recarregando esse componente mesmo quando ele mudava

    const toggleFavorite = () => {
        if (props?.id) {
            if (isFavorited == favorite_0) {
                favoriteServices.favorite(props?.id, Auth?.token);
                setIsFavorited(favorite_1);
            }
            else {
                favoriteServices.unfavorite(props?.id, Auth?.token);
                setIsFavorited(favorite_0);
            }
        }
    }

    return (
        <CardView 
        style={{
            shadowColor: "grey", 
            shadowOpacity: 0.3,
            shadowOffset: { width: 5, height: 5 },
            elevation: 6
        }}>
            <Image 
            style={{width: 120, height: 128, resizeMode: "contain"}} 
            source={imageUrl}/>
            
            <WrapperCardInfo>
                <CardInfo>
                    <CardInfoName>{props.name}</CardInfoName>
                    <CardInfoPrice>R$ {props.price}</CardInfoPrice>
                </CardInfo>

                <Pressable onPress={toggleFavorite}>
                    <Image 
                    style={{width: 24, height: 24}} 
                    source={isFavorited}/>
                </Pressable>
            </WrapperCardInfo>
        </CardView>
    );
};