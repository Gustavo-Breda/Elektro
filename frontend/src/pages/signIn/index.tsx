import React from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message"
import { useNavigation } from "@react-navigation/native";
import { Animated, ScrollView, StatusBar, View } from "react-native";
import { BaseToast, BaseToastProps } from "react-native-toast-message";

import userServices from "../../services/userServices";
import LArrow from '../../assets/images/icon_l_arrow.svg';

import { ISignIn } from "../../services/userServices";
import { RegisterStackTypes } from "../../navigation/registerStack";

import { globalStyles } from "../../global/globalStyles";
import { ContainerForm, HeaderTitle, Wrapper } from "./styles";

import { Header } from "../../components/header";
import { ToastError } from "../../components/toast";
import { BtnIcon } from "../../components/buttons/btnIcon";
import { FormDivider } from "../../components/formDivider";
import { BtnForm } from "../../components/buttons/btnForm";
import { ControlledFormContainer } from "../../components/formContainer/controller";


export const SignIn = () => {
    const navigation = useNavigation<RegisterStackTypes>();
    const fadeAnim = useRef(new Animated.Value(1)).current; 
    
    const toastConfig = {
        error: (props: BaseToastProps) => (
          <BaseToast
            {...props}
            style={{ borderLeftColor: 'red' }}
            contentContainerStyle={{ gap: 4, paddingLeft: 12.5 }}/>
        )
    };

    const { reset, control, handleSubmit, formState: { errors }} = useForm<ISignIn>({ 
        defaultValues: { 
            name: '', 
            cpf: '', 
            email: '', 
            phone: '', 
            password: '' 
        } 
    });

    const handleOnSubmit = (data: ISignIn) => {
        reset();
        userServices.signIn(data).then(response => {
            if (response?.status === 201) {
                setTimeout(() => {
                    Animated.timing(fadeAnim, { 
                        toValue: 0, 
                        duration: 500, 
                        useNativeDriver: true 
                    }).start(() => {
                        navigation.navigate('SuccessfulSignIn'); 
                    });
                }, 500);
            }
        }).catch(error => {
            
            let errorMessage = error.message
            if (error?.response?.data?.message)
                errorMessage = error?.response?.data?.message

            ToastError(errorMessage, 'cadastro');
        })
    };

    return (
        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <Wrapper>
            <StatusBar/>
            <Toast topOffset={95} config={toastConfig}/>
            
            <Header 
            backgroundColor={globalStyles.colors.primary_white}
            headerCenter={() => <HeaderTitle>Cadastrar-se</HeaderTitle>}
            headerRight={() => <View style={{width:24, height:24}}></View>}
            headerLeft={() => <BtnIcon source={LArrow} onPress={() => navigation.navigate('Login')}/>}/>
            
            <ScrollView centerContent={true}>
                <ContainerForm>
                    <FormDivider type={1}/>

                    <ControlledFormContainer
                        name="name"
                        control={control}
                        rules={{
                            required: 'campo obrigatório',
                            pattern: {
                                value: /^[a-zA-Z\s]+$/,
                                message: 'Nome inválido'
                            }
                        }}
                        containerStyle={{marginTop: 32}}
                        title='Nome' 
                        mode='normal' 
                        screen='signIn'
                        error={errors.name}
                        placeholder='Digite seu nome completo'/>

                        <ControlledFormContainer
                        name="cpf"
                        control={control}
                        rules={{
                            required: 'campo obrigatório',
                            pattern: {
                                value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
                                message: 'CPF inválido'
                            }
                        }}
                        containerStyle={{marginTop: 16}}
                        title='CPF' 
                        mode='normal' 
                        screen='signIn'
                        error={errors.cpf}
                        placeholder='Digite seu CPF'
                        mask={[
                            /\d/, /\d/, /\d/, '.', 
                            /\d/, /\d/, /\d/, '.', 
                            /\d/, /\d/, /\d/, '-', 
                            /\d/, /\d/
                        ]}/>

                        <ControlledFormContainer
                        name="email"
                        control={control}
                        rules={{
                            required: 'campo obrigatório',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Email inválido'
                            }
                        }}
                        containerStyle={{marginTop: 16}}
                        title='Email' 
                        mode='normal' 
                        screen='signIn'
                        error={errors.email}
                        placeholder='Digite seu e-mail'/>

                        <ControlledFormContainer
                        name="phone"
                        control={control}
                        rules={{
                            required: 'campo obrigatório',
                            pattern: {
                                value: /^\(\d{2}\) \d{4,5}\-\d{4}$/,
                                message: 'Telefone inválido'
                            }
                        }}
                        containerStyle={{marginTop: 16}}
                        title='Telefone' 
                        mode='normal' 
                        screen='signIn'
                        error={errors.phone}
                        placeholder='Digite seu telefone'
                        mask={[ '(', /\d/, /\d/, ')', ' ', 
                            /\d/, /\d/, /\d/, /\d/, /\d/, '-', 
                            /\d/, /\d/, /\d/, /\d/
                        ]}/>
                        

                        <ControlledFormContainer
                        name="password"
                        control={control}
                        rules={{
                            required: 'campo obrigatório',
                            pattern: {
                                value: /^(?=.*[A-Z]).{5,}$/,
                                message: 'Sua senha deve conter ao menos 5 caracteres contendo uma letra maiúscula'
                            }
                        }}
                        containerStyle={{marginTop: 16}}
                        title='Senha' 
                        mode='normal' 
                        screen='signIn'
                        secureTextEntry={true}
                        error={errors.password}
                        placeholder='Digite sua senha'/>
                        
                        <BtnForm 
                        type={0}
                        text='Cadastrar-se'
                        style={{marginTop: 32}} 
                        onPress={handleSubmit(handleOnSubmit)}/>
                </ContainerForm>
            </ScrollView>
        </Wrapper>
        </Animated.View>
    );
}
