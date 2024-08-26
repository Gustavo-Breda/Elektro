import { useState } from "react"
import { FieldError } from "react-hook-form";
import { Image, ImageSourcePropType, Pressable, TextInputProps, TextStyle, ViewStyle } from "react-native";

import MaskInput from "react-native-mask-input"; 
import { ContainerView, ContainerError, InputText, InputTitle, InputView, InputView2 } from "./styles";


export type FormContainerProps = TextInputProps & {
    title: string,
    containerStyle?: ViewStyle,
    source?: ImageSourcePropType,

    
    mask?: (string | RegExp)[],
    mode: 'normal' | 'password',
    error: FieldError | undefined,
    screen: 'signIn' | 'login' | undefined
}

export const FormContainer = (props: FormContainerProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    const secureTextEntry = props.mode === 'password' ? !visible : false;

    return (
        <>
            <ContainerView style={props.containerStyle}>
                {props.screen === 'signIn' && <InputTitle>{props.title}</InputTitle>}
                <InputView errorTrue={props.error}>
                    <InputView2>
                        {props.source && <Image style={{width:16, height:16, margin:"auto"}} source={props.source}/>}
                        {props.mask ? (
                            <MaskInput 
                            {...props} 
                            mask={props.mask}
                            style={MaskStyle}
                            secureTextEntry={secureTextEntry}/>
                        ) : (
                            <InputText 
                            {...props} 
                            secureTextEntry={secureTextEntry}/>
                        )}
                    </InputView2>
                    {
                        props.mode === 'password' && 
                        <Pressable onPress={() => visible ? setVisible(false) : setVisible(true)}>
                            {                    
                                visible ?
                                <Image style={{width:16, height:16, margin:"auto"}} source={require('../../assets/images/icon_eye0.svg')}/>
                                :
                                <Image style={{width:16, height:16, margin:"auto"}} source={require('../../assets/images/icon_eye1.svg')}/>
                            }
                        </Pressable>
                    }
                </InputView>
            </ContainerView>
            {(props.error && props.screen === 'signIn') && <ContainerError> {props.error.message} </ContainerError>}
        </>
    )
}


const MaskStyle: TextStyle = {
    outlineStyle: "none",
    width: "90%",

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
    
    color: "#B9B9B9"
}