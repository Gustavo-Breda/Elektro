import api from "../api";


export default {
    async favorite (productId: number, token: string) {
        try {
            const response = api.post("/favorite", {productId}, {
                headers: { Authorization: 'Bearer '.concat(token)} 
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async isFavorite (productId: number, token: string) {
        try {
            const response = api.get(`/favorite/${productId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async readAll (token: string) {
        try {
            const response = api.get("/favorites", {
                headers: {
                    Authorization: `Bearer ${token}`
                }});
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async unfavorite (productId: number, token: string) {
        try {
            const response = api.delete(`/favorite/${productId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}
