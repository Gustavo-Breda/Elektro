
import { NUM_USERS } from './userSeed';
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/en_US';


const NUM_PRODUCTS = 50;
const prisma = new PrismaClient();

type Product = {
    name: string,
    price: number,
    description: string,
    quantity: number,
    sellerId: number
}

const products: Product[] = [];

export async function productSeed () {
    const sellers = await prisma.user.findMany({
        select: { id: true },
    });

    if (sellers.length === 0) {
        throw new Error("No sellers found");
    }

    for (let i = 0; i < NUM_PRODUCTS; i++) {
        products.push({
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: parseFloat(faker.commerce.price({ min: 10, max: 1000, dec: 2 })),
            quantity: faker.number.int({ min: 1, max: 100 }),
            sellerId: faker.number.int({ min: 1, max: NUM_USERS }),
        });
    }

    for (const product of products) {
        await prisma.product.create({
            data: {
                name: product.name,
                description: product.description,
                price: product.price,
                quantity: product.quantity,
                seller: {
                    connect: { id: Number(product.sellerId) },
                },
            }
        });
    }
}
