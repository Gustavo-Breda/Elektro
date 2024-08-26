import { Request, Response } from "express";
import { Prisma, PrismaClient } from '@prisma/client';

import Auth from "../config/auth";


const prisma = new PrismaClient();

class CartController 
{
    public async readUserCart (request: Request, response: Response) {
        try {
            if (!request.user) 
                return response.status(404).json({ message: 'invalid token' });

            const userCart = await prisma.cart.findUnique({
                where: { id: Number(request.user) },
                include: { products: true },
            });

            return response.status(200).json({ cart: userCart });
        } catch (error) {
            return response.status(500).json({ 
                messageError: "Server Internal Error",
                error: error
            });
        }
    }
}

export const cartController = new CartController();