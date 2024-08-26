import { Request, Response } from "express";
import { Prisma, PrismaClient } from '@prisma/client';

import Auth from "../config/auth";


const prisma = new PrismaClient();

class OrderController 
{
    public async create (request: Request, response: Response) {
        try {

        } catch (error) {

        }
    }

    public async read (request: Request, response: Response) {
        try {

        } catch (error) {

        }
    }

    public async readAll (request: Request, response: Response) {
        try {

        } catch (error) {

        }
    }

    public async update (request: Request, response: Response) {
        try {

        } catch (error) {

        }
    }

    public async delete (request: Request, response: Response) {
        try {

        } catch (error) {

        }
    }

    public async readUserOrders (request: Request, response: Response) {
        try {
            if (!request.user) 
                return response.status(404).json({ message: 'invalid token' });

            const userOrder = await prisma.order.findMany({ 
                where: { userId: Number(!request.user) } 
            });

            if (userOrder) 
                return response.status(200).json({ order: userOrder });
            else 
                return response.status(404).json({ message: 'No order found'  });
        } catch (error) {
            return response.status(500).json({
                messageError: "Server Internal Error",
                error: error
            });
        }
    }
}

export const orderController = new OrderController();