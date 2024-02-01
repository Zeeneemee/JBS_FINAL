import { PrismaClient } from '@prisma/client'
import { Student } from '../model'
import { findId, findFullName } from './find'

const prisma = new PrismaClient()


const insert = async (studentData: Student) => {
    try {
        const existing = await findFullName(studentData.FullName);
        if (existing) {
            console.log("Data already exist");
            return "Student already exists"; // You might want to change this to throw an error or similar
        }

        const student = await prisma.student.create({ data: studentData });
        console.log("Data have been inserted", student);
        return student; // Return the created student
    } catch (error) {
        console.error("Error in insertion", error);
        throw error; // Rethrow the error for further handling
    } finally {
        await prisma.$disconnect(); // Ensuring the connection is closed
    }
};

export { insert };
