import React from "react";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { StatusBar } from "react-native";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { BaseToast, BaseToastProps } from "react-native-toast-message";

import { AuthContext } from "../../contexts/auth";
import { ILogin }  from "../../services/userServices";
import userServices from "../../services/userServices";
import { RegisterStackTypes } from "../../navigation/registerStack";

import { Wrapper, WrapperForm } from "./styles";
import { ContainerBtnFP, ContainerBtnSI, ContainerHeader, ConteinerForm } from "./styles";
import { BtnForgotPassword, BtnForgotPasswordText, BtnSignIn, BtnSignInText, HeaderText } from "./styles";

import { ToastError } from "../../components/toast";
import { FormDivider } from "../../components/formDivider";
import { BtnForm } from "../../components/buttons/btnForm";
import { ControlledFormContainer } from "../../components/formContainer/controller";

  
export const Login = () => {
    const Auth = React.useContext(AuthContext);
    const navigation = useNavigation<RegisterStackTypes>();

    const toastConfig = {
        error: (props: BaseToastProps) => (
            <BaseToast
            {...props}
            style={{ borderLeftColor: 'red' }}
            contentContainerStyle={{ gap: 4, paddingLeft: 12.5 }}/>
        )
    };

    const { reset, control, handleSubmit, formState: { errors } } = useForm<ILogin>({ 
        mode: 'onChange', 
        defaultValues: { 
            email: '',
            password: '' 
        } 
    });

    const handleOnSubmit = (data: ILogin) => {
        reset();
        userServices.login(data).then(response => {
            if (response?.status === 200) {
                Auth.setToken(response?.data.token),
                AsyncStorage.setItem('token', response?.data.token)
            }
        }).catch(error => {
            console.log(error)
            ToastError(error?.response?.data?.message, 'login');
        })
    };
    
    return (
        <Wrapper>
            <StatusBar/>

            <ContainerHeader resizeMode="cover">
                <Toast config={toastConfig}/>
                <HeaderText>Elektro</HeaderText>
            </ContainerHeader>

            <ConteinerForm>
                <WrapperForm>
                    <ControlledFormContainer
                    name="email"
                    control={control}
                    rules={{required: 'campo obrigatório'}}
                    title='E-mail' 
                    mode='normal' 
                    screen='login'
                    error={errors.email}
                    placeholder='E-mail'
                    source={require('../../assets/images/icon_login.svg')} />

                    <ControlledFormContainer
                    name="password"
                    control={control}
                    rules={{required: 'campo obrigatório'}}
                    title='Senha' 
                    mode='password' 
                    screen='login'
                    placeholder='Senha' 
                    secureTextEntry={true}
                    error={errors.password}
                    source={require('../../assets/images/icon_password.svg')} />

                    <ContainerBtnFP>
                        <BtnForgotPassword>
                            <BtnForgotPasswordText>Esqueci minha senha</BtnForgotPasswordText>
                        </BtnForgotPassword>
                    </ContainerBtnFP>

                    <BtnForm style={{marginTop: 16, marginBottom: 16}} onPress={handleSubmit(handleOnSubmit)} text='Entrar' type={0}/>

                    <FormDivider type={0}/>

                    <ContainerBtnSI>
                        <BtnSignIn onPress={() => { navigation.navigate('SignIn') }}>
                            <BtnSignInText>Não possui cadastro? Cadastra-se!</BtnSignInText>
                        </BtnSignIn>
                    </ContainerBtnSI>
                </WrapperForm>
            </ConteinerForm>
        </Wrapper>
    );
}
