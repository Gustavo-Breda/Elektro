import React from 'react';
import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userServices from '../services/userServices';


interface IAuth {
    user: any;
    signed: boolean;
    logout: () => void;

    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<IAuth>({} as IAuth);

const AuthProvider = (props: any) => {
    const [authorization, setAuthorization] = useState<string>('');
    const [checkLogin, setCheckLogin] = useState<boolean>(false);
    const [userData, setUserData] = useState<any>();
    
    const userToken = async () => {
        let token = '';
        
        try { 
            const token = await AsyncStorage.getItem('token');
            if (token != null) 
                return token
        } catch (error) { 
            console.log('No token provided');
        }
    
        return token;
    };

    const fetchUserData = async () => {
        try {
            const response = await userServices.getUser(authorization);
            return response;
        } catch (error) {
            console.log("Error when fetching the user data")
        }
    };

    function checkIsLoggedIn () {
        if (authorization != '') {
            setCheckLogin(true);
            fetchUserData().then(value => {setUserData(value?.data.user)});
        }
        else {
            setCheckLogin(false);
        }
    };

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            setAuthorization('');
            setCheckLogin(false);
            setUserData(null);
        } catch (error) {
            console.log('Error logging out');
        }
    };
    
    useEffect(() => {
        userToken().then(value => { setAuthorization(value) });
    }, []);

    useEffect(() => {
        checkIsLoggedIn();
    }, [authorization]);

    return (
        <AuthContext.Provider value={{ user: userData, logout: handleLogout, signed: checkLogin, setToken: setAuthorization, token: authorization }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;