import { PrismaClient } from '@prisma/client'
import { Student } from '../model'
const prisma = new PrismaClient()

export const findId = async (id: number) => {
    try{
        const student = await prisma.student.findUnique({
            where: {id: id}
        })
        return student;
    } catch(error){
        console.log(error)
    }
}

export const findFullName = async (fullName: string) => {
    try{
        const student = await prisma.student.findFirst({
            where: {FullName: fullName}
        })
        return student;
    } catch(error){
        console.log(error)
    }
}

findId(1).then((student) => {
    console.log(student)
})
