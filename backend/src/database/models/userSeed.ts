
import crypto from 'crypto';
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/pt_BR';
import Auth from '../../config/auth';


export const NUM_USERS = 100;
const prisma = new PrismaClient();

type User = {
    name: string,
    email: string,
    hash: string,
    salt: string,
    cpf: string
}

const users: User[] = [];

export async function userSeed () {
    for (let i = 0; i < NUM_USERS; i++) {
        const password = faker.internet.password({
            length: 20,
            memorable: false,
            pattern: /[A-Za-z\@!-_%*]/,
        });

        const { hash, salt } = Auth.generatePassword(password);

        users.push({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            hash: hash,
            salt: salt,
            cpf: faker.number.int({ min: 10000000000, max: 99999999999 }).toString(),
        });
    }

    for (const user of users) {
        await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                hash: user.hash,
                salt: user.salt,
                cpf: user.cpf
            }
        })
    }
}
