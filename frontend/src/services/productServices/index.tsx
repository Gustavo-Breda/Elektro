import api from "../api";


export default {
    async read (id: number) {
        try {
            const response = api.get(`/product/${id}`);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async readAll () {
        try {
            const response = api.get("/products",);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}