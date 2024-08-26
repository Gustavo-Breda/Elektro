import { Request, Response } from "express";
import { Prisma, PrismaClient } from '@prisma/client';

import Auth from "../config/auth";


const prisma = new PrismaClient();

class MessageController 
{
    public async create (request: Request, response: Response) {
        try {
            if (!request.user) 
                return response.status(404).json({ message: 'invalid token' });
            
            const { receiverId, content } = request.body;
            const newMessageData: Prisma.MessageCreateInput = {
                sender: { connect: { id: Number(request.user) } },
                receiver: { connect: { id: receiverId } },
                content: content
            }

            const newMessage = await prisma.message.create({ data: newMessageData });
            return response.status(201).json({ newMessage });
        } catch (error) {
            return response.status(500).json({ 
                messageError: "Server Internal Error", 
                error: error 
            })
        }
    }


    public async read (request: Request, response: Response) {
        try {
            const { id } = request.params;
            const message = await prisma.message.findUnique({
                where: { id: Number(id) } 
            });

            if (message) 
                return response.status(200).json({ message: message });
            else 
                return response.status(404).json({ message: 'Message not found' });
        } catch (error) {
            return response.status(500).json({ 
                messageError: "Server Internal Error",
                error: error
            });
        }
    }

    public async readUserSentMessages (request: Request, response: Response) {
        try {
            const { id } = request.params;
            const userMessages = await prisma.message.findMany({
                where: { senderId: Number(id) } 
            });

            if (userMessages) 
                return response.status(200).json({ messages: userMessages });
            else 
                return response.status(404).json({ message: 'Message not found' });
        } catch (error) {
            return response.status(500).json({ 
                messageError: "Server Internal Error",
                error: error
            });
        }
    }

    public async readUserSentMessagesTo (request: Request, response: Response) {
        try {
            if (!request.user) 
                return response.status(404).json({ message: 'invalid token' });

            const { receiverId } = request.params;
            const userMessages = await prisma.message.findMany({ where: { 
                senderId: Number(request.user),
                receiverId: Number(receiverId) 
            }});

            if (userMessages) 
                return response.status(200).json({ messages: userMessages });
            else 
                return response.status(404).json({ message: 'No messages found' });
        } catch (error) {
            return response.status(500).json({ 
                messageError: "Server Internal Error",
                error: error
            });
        }
    }


    public async readUserReceivedMessages (request: Request, response: Response) {
        try {
            const { id } = request.params;
            const userMessages = await prisma.message.findMany({ where: { receiverId: Number(id) } });

            if (userMessages) 
                return response.status(200).json({ messages: userMessages });
            else 
                return response.status(404).json({ message: 'No messages found' });
        } catch (error) {
            return response.status(500).json({ 
                messageError: "Server Internal Error",
                error: error
            });
        }
    }

    public async readUserSentMessagesBy (request: Request, response: Response) {
        try {
            if (!request.user) 
                return response.status(404).json({ message: 'invalid token' });

            const { senderId } = request.params;
            const userMessages = await prisma.message.findMany({ where: { 
                receiverId: Number(request.user),
                senderId: Number(senderId) 
            }});

            if (userMessages) 
                return response.status(200).json({ messages: userMessages });
            else 
                return response.status(404).json({ message: 'No messages found' });
        } catch (error) {
            return response.status(500).json({ 
                messageError: "Server Internal Error",
                error: error
            });
        }
    }

    public async delete (request: Request, response: Response) {
        try {

        } catch (error) {

        }
    }
}

export const messageController = new MessageController();