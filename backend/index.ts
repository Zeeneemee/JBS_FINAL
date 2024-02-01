import { PrismaClient } from '@prisma/client'
import { Student } from './model'
import { findId, findFullName } from './psqlFunc/find'
import { insert } from './psqlFunc/insert'
const prisma = new PrismaClient()

const main = async ()=>{
    
}


