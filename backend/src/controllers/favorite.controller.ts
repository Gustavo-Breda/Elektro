import { Request, Response } from "express";
import { Prisma, PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

class FavoriteController 
{
    public async create (request: Request, response: Response) {
        try {
            if (!request.user) 
                return response.status(404).json({ message: 'invalid token' });
            
            const {productId} = request.body;
            const newUserFavoriteData: Prisma.FavoriteCreateInput = {
                user: { connect: { id: Number(request.user) } },
                product: { connect: { id: Number(productId) } } 
            }

            const newUserFavorite = await prisma.favorite.create({ data: newUserFavoriteData });
            return response.status(201).json({ message: "Product favorited" });
        } catch (error) {
            return response.status(500).json({ 
                messageError: "Server Internal Error", 
                error: error 
            })
        }
    };

    public async readUserFavorites (request: Request, response: Response) {
        try {
            if (!request.user) 
                return response.status(404).json({ message: 'invalid token' });

            const userFavorites = await prisma.favorite.findMany({ 
                where: { userId: Number(request.user) } 
            });

            if (userFavorites) 
                return response.status(200).json({ favorites: userFavorites });
            else 
                return response.status(404).json({ message: 'Error when accessing the database'  });
        } catch (error) {
            return response.status(500).json({
                messageError: "Server Internal Error",
                error: error
            });
        }
    };

    public async delete (request: Request, response: Response) {
        try {
            if (!request.user) 
                return response.status(404).json({ message: 'invalid token' });
            
            const productId = request.params.id;
            if (!productId) 
                return response.status(500).json({ message: 'Product ID is required' });

            const deletedUserFavorite = await prisma.favorite.delete({
                where: {
                    userId_productId: {
                        userId: Number(request.user),
                        productId: Number(productId)
                    }
                }
            });

            return response.status(200).json({ message: "Product unfavorited " });
        } catch (error) {
            return response.status(500).json({
                messageError: "Server Internal Error",
                error: error
            });
        }
    };

    public async isFavorite (request: Request, response: Response) {
        try {
            if (!request.user) 
                return response.status(404).json({ message: 'invalid token' });

            const userFavorite = await prisma.favorite.findUnique({ 
                where: { 
                    userId_productId: { 
                        userId: Number(request.user), 
                        productId: Number(request.params.id) 
                    } 
                }
            });

            if (userFavorite) 
                return response.status(201).json({ message: "Product is Favorited"  });
            else 
                return response.status(202).json({ message: 'Product isnt Favorited'  });
        } catch (error) {
            return response.status(500).json({
                messageError: "Server Internal Error",
                error: error
            });
        }
    };
}

export const favoriteController = new FavoriteController();