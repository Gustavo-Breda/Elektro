import { Request, Response } from "express";
import { Prisma, PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

class ProductOnCartController 
{
    public async create (request: Request, response: Response) {
        try {
            if (!request.user) 
                return response.status(404).json({ message: 'invalid token' });
            
            const { productId } = request.body;
            if (!productId) 
                return response.status(422).json({ message: 'Product ID is required' });

            const newProductOnCartData: Prisma.ProductOnCartCreateInput = {
                quantity: 1,
                user: { connect: { id: Number(request.user) } },
                product: { connect: { id: productId } } 
            }

            const addedProduct = await prisma.productOnCart.create(
                { data: newProductOnCartData }
            );
            return response.status(201).json({  message: "Product added to cart" });
        } catch (error) {
            return response.status(500).json({ 
                messageError: "Server Internal Error", 
                error: error 
            })
        }
    }

    public async delete (request: Request, response: Response) {
        try {
            if (!request.user) 
                return response.status(404).json({ message: 'invalid token' });
            
            const { productId } = request.body;
            if (!productId) 
                return response.status(422).json({ message: 'Product ID is required' });

            const deletedProduct = await prisma.productOnCart.delete({
                where: { userId_productId: {
                        userId: Number(request.user),
                        productId: Number(productId)
                    }
                }
            });

            return response.status(200).json({ message: "Product deleted from the cart" });
        } catch (error) {
            return response.status(500).json({
                messageError: "Server Internal Error",
                error: error
            });
        }
    }

    public async addOne (request: Request, response: Response) {
        try {
            if (!request.user) 
                return response.status(404).json({ message: 'invalid token' });
            
            const { productId } = request.body;
            if (!productId) 
                return response.status(422).json({ message: 'Product ID is required' });

            let newQuantity = await this.getProductQuantity(Number(request.user), productId);
            if (!newQuantity)
                return response.status(403).json({ message: 'No relation found' })
            newQuantity =+ 1;

            const updateProduct = await prisma.productOnCart.update({
                where: { userId_productId: {
                    userId: Number(request.user),
                    productId: Number(productId)
                }},
                data: {
                    quantity: newQuantity
                }
            })

            return response.status(200).json({ message: "succefull add" });
        } catch (error) {
            return response.status(500).json({
                messageError: "Server Internal Error",
                error: error
            });

        }
    }

    public async removeOne(request: Request, response: Response) {
        try {
            if (!request.user) 
                return response.status(404).json({ message: 'invalid token' });
            
            const { productId } = request.body;
            if (!productId) 
                return response.status(422).json({ message: 'Product ID is required' });
    
            let newQuantity = await this.getProductQuantity(Number(request.user), Number(productId));
            if (!newQuantity) 
                return response.status(404).json({ message: 'No relation found' });
            if (newQuantity === 1)
                return response.status(409).json({ message: 'Impossible action' });
            newQuantity -= 1;
    
            const updatedProduct = await prisma.productOnCart.update({
                where: { userId_productId: {
                    userId: Number(request.user),
                    productId: Number(productId)
                }},
                data: { quantity: newQuantity }
            });
    
            return response.status(200).json({ message: "succefull remove" });
        } catch (error) {
            return response.status(500).json({
                messageError: "Server Internal Error",
                error: error
            });
        }
    }

    async getProductQuantity (userId: number, productId: number): Promise<number | any> {
        const productOnCart = await prisma.productOnCart.findUnique({
            where: { userId_productId: {
                userId: userId,
                productId: productId
            }}
        })
        
        return productOnCart?.quantity;
    }

    async addPriceToCart () {

    }
}

export const productOnCartController = new ProductOnCartController();