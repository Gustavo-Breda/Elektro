import { Request, Response } from "express";
import { Prisma, PrismaClient } from '@prisma/client';

import Auth from "../config/auth";


const prisma = new PrismaClient();

class CategoryController 
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
}

export const categoryController = new CategoryController();