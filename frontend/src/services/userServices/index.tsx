import api from "../api";
import { VALIDATION_API_KEY } from '@env';


export interface ILogin {
    email: string;
    password: string;
}

export interface ISignIn {
    name: string;
    cpf: string;
    email: string;
    phone: string;
    password: string;
}

export default {
    async login (data: ILogin) {
        try {
            const response = api.post("/login", data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async signIn(data: ISignIn) {
        try {
            const phoneValidation = await this.isPhoneValid(data.phone);
            
            if (!phoneValidation.valid) {
                throw new Error("Invalid phone number");
            }

            const response = await api.post("/user/create", data);
            return response;
        } catch (error) {
            throw error
        }
    },

    async getUser (token: string) {
        try {
            const response = await api.get("/userAuth", {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async isPhoneValid(phone: string) {
        try {
            const options = { method: 'GET' };
            const response = await fetch(`https://phonevalidation.abstractapi.com/v1?api_key=${VALIDATION_API_KEY}&phone=${phone}&country=br`, options);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}