import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

import Auth from '../config/auth';


const prisma = new PrismaClient();

class AuthController 
{
    public async login (request: Request, response: Response) {
        try {
            const { email, password } = request.body;
            const user = await prisma.user.findUnique({ where: { email: email } });
            if (!user)
                return response.status(404).json({ message: 'User not found' });
        
            if (Auth.checkPassword(password, user.hash, user.salt))
                return response.status(200).json({ token: Auth.generateJWT(user) });
            else 
                return response.status(401).json({ message: 'Invalid Password' });
        } catch (error) {
            return response.status(500).json({ 
                messageError: "Server Internal Error",
                error: error
            });
        }
    }
}

export default new AuthController();
