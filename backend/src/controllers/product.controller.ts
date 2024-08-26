import { Request, Response } from "express";
import { Prisma, PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

class ProductController 
{
    public async create (request: Request, response: Response) {
        try {
            if (!request.user) 
                return response.status(404).json({ message: 'Invalid token' });

            const { 
                name, 
                price, 
                description,
                quantity 
            } = request.body;

            const image = request.file?.filename;
            const newProductData: Prisma.ProductCreateInput = {
                name: name,
                price: price,
                description: description,
                image: image,
                quantity: quantity | 1,
                seller: { connect: { id: Number(request.user) } },
            }

            const newProduct = await prisma.product.create(
                { data: newProductData }
            );

            return response.status(201).json({ 
                message: "Product created", 
                product: newProduct 
            });
        } catch (error) {
            return response.status(500).json({ 
                messageError: "Server Internal Error", 
                error: error 
            })
        }
    }

    public async read (request: Request, response: Response) {
        try {
            const product = await prisma.product.findUnique({ 
                where: { 
                    id: Number(request.params.id) 
                },
                include: { 
                    categories: true,
                } 
            });

            return response.status(200).json(product);
        } catch (error) {
            return response.status(500).json({
                messageError: "Server Internal Error",
                error: error,
            });
        }
    }

    public async readAll (request: Request, response: Response) {
        try {
            const products = await prisma.product.findMany({ 
                include: { 
                    categories: true 
                } 
            });

            return response.status(200).json(products);
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

            const { 
                id,
                name, 
                price, 
                description,
                image,
                quantity 
            } = request.body;

            const updatedProduct = await prisma.product.update({
                where: { 
                    id: Number(id), 
                    sellerId: Number(request.user)
                },
                data: {
                    name,
                    price,
                    description,
                    image,
                    quantity
                }
            });

            return response.status(200).json(updatedProduct);
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

            const { productId } = request.body;

            const deletedProduct = await prisma.product.delete({ 
                where: { 
                    id: Number(productId),
                    sellerId: Number(request.user)
                } 
            });

            return response.status(200).json({  
                message: "Product deleted", 
                product: deletedProduct 
            });
        } catch (error) {
            return response.status(500).json({ 
                messageError: "Server Internal Error",
                error: error
            });
        }
    }

    public async readUserProducts (request: Request, response: Response) {
        try {
            const userProducts = await prisma.product.findMany({
                where: { sellerId: Number(request.params.id) },
                include: { categories: true },
            });

            if (userProducts) 
                return response.status(200).json({ products: userProducts });
            else 
                return response.status(404).json({ message: 'Error when accessing the database' });
        } catch (error) {
            return response.status(500).json({ 
                messageError: "Server Internal Error",
                error: error
            });
        }
    }
}

export const productController = new ProductController();
