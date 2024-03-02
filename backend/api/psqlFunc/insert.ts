import { Prisma, PrismaClient } from '@prisma/client'
import { Student } from '../model'
import { findFullName } from './find'

const prisma = new PrismaClient()


const insert = async (studentData: Student) => {
    try {
        const existing = await findFullName(studentData.fullname);
        const existingEmail = await prisma.student.findUnique({ where: { Email: studentData.email } });
        if (existing) {
            console.log("Data already exist");
            return "Student already exists"; // You might want to change this to throw an error or similar
        } else if (existingEmail) {
            console.log("Student with the same email already exists");
            return "Student with the same email already exists";
        }
        else{
         // Convert `studentData` to `StudentCreateInput` type
         const prismaStudentData: Prisma.StudentCreateInput = {
            FullName: studentData.fullname,
            Position: studentData.position,
            CompanyName: studentData.companyName,
            Email: studentData.email,
            Internship: studentData.internship,
            EntryLevel: studentData.entryLevel
        };
        const student = await prisma.student.createMany({ data: prismaStudentData });
        
        return student; // Return the created student
    }
        
    } catch (error) {
        console.error("Error in insertion", error);
        throw error; // Rethrow the error for further handling
    } finally {
        await prisma.$disconnect(); // Ensuring the connection is closed
    }
};

export { insert };
// backend/api/psqlFunc/insert.ts