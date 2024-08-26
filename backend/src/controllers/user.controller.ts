import Auth from "../config/auth";
import { Request, Response } from "express";
import { Prisma, PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

class UserController 
{
    public async create (request: Request, response: Response) {
        try {
            await prisma.$transaction(async (prisma) => {
                const { 
                    cpf, 
                    name, 
                    email, 
                    phone, 
                    password
                } = request.body;
                
                const cpfAlreadyRegistered = await prisma.user.findUnique({where: {cpf: cpf}})
                if (cpfAlreadyRegistered) 
                    return response.status(409).json({ message: "CPF already in use" })
                
                const emailAlreadyRegistered = await prisma.user.findUnique({where: {email: email}})
                if (emailAlreadyRegistered) 
                    return response.status(409).json({ message: "E-mail already in use" })
                
                const { hash, salt } = Auth.generatePassword(password);
                const photo = request.file?.filename;
                
                const newUserData: Prisma.UserCreateInput = { 
                    cpf, 
                    name, 
                    email, 
                    photo,
                    phone,
                    hash, 
                    salt 
                };

                const newUser = await prisma.user.create(
                    { data: newUserData }
                );

                const newUserCart = await prisma.cart.create({ 
                    data: { id: Number(newUser.id), total: 0 }
                });

                return response.status(201).json({ 
                    message: "User created",
                    user: newUser 
                });
            })
        } catch (error) {
            return response.status(500).json({ 
                messageError: "Server Internal Error", 
                error: error 
            })
        }
    }

    public async read (request: Request, response: Response) {
        try {
            const user = await prisma.user.findUnique({ 
                where: { id: Number(request.params.id) },
                include: { products: true } 
            });

            if (user)
                return response.status(200).json({ user: user });
            else
                return response.status(404).json({ message: 'User not found' });

        } catch (error) {
            return response.status(500).json({
                messageError: "Server Internal Error",
                error: error,
            });
        }
    }

    public async readUser (request: Request, response: Response) {
        try {
            if (!request.user) 
                return response.status(404).json({ message: 'Invalid token' });
            
            const user = await prisma.user.findUnique({
                where: { 
                    id: Number(request.user) 
                },
                include: {
                    favorites: true,
                    products: true,
                    orders: true,
                    cart: { include: { products: true }},
                    sentMessages: true,
                    receivedMessages: true,
                }
            });

            return response.status(200).json({ user: user });
        } catch (error) {
            return response.status(500).json({
                messageError: "Server Internal Error",
                error: error,
            });
        }
    }

    public async readAll (request: Request, response: Response) {
        try {
            const users = await prisma.user.findMany({ 
                include: { products: true } 
            });

            if (users) 
                return response.status(200).json({ users: users });
            else 
                return response.status(404).json({ message: 'No users found' });
        } catch (error) {
            return response.status(500).json({
                messageError: "Server Internal Error",
                error: error
            });
        }
    }

    public async update (request: Request, response: Response) {
        try {
            if (!request.user) 
                return response.status(404).json({ message: 'invalid token' });

            const { name, email, phone } = request.body;
            
            const photo = request.file?.filename;
            const updatedUser = await prisma.user.update({
                where: { 
                    id: Number(request.user) 
                },
                data: {
                    name,
                    email,
                    photo, 
                    phone
                }
            });

            return response.status(200).json({ 
                message: "User updated",
                user: updatedUser
            });
        } catch (error) {
            return response.status(500).json({ 
                messageError: "Server Internal Error",
                error: error
            });
        }
    }

    public async delete (request: Request, response: Response) {
        try {
            if (!request.user) 
                return response.status(404).json({ message: 'invalid token' });

            const deletedUser = await prisma.user.delete({ 
                where: { 
                    id: Number(request.user) 
                } 
            });
            return response.status(200).json({  
                message: "User deleted", 
                user: deletedUser 
            });
        } catch (error) {
            return response.status(500).json({ 
                messageError: "Server Internal Error",
                error: error
            });
        }
    }
}

export default new UserController();
