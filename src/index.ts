
//  -------------------------------------Autogenerated Prisma Client-------------------------------------

// In Prisma, an autogenerated client refers to the automatically generated database client code that Prisma generates based on your data model. This client provides a type-safe API for interacting with your database. 

// When you define your data model using the Prisma schema language, Prisma uses that schema to generate the necessary code for querying, creating, updating, and deleting data in your database. This generated client abstracts away the complexities of writing raw SQL queries or dealing with low-level database interactions, making it easier and safer to work with your database in your application's codebase.

// Overall, the autogenerated client in Prisma streamlines the development process by providing a convenient and type-safe interface for working with your database.


//  -------------------------------------Prisma Client API-------------------------------------
// run npx prisma generate to generate the Prisma Client
// any time I change my schema I need to run npx prisma generate to update the Prisma Client

import { PrismaClient } from '@prisma/client'
const prisma=new PrismaClient()

async function insertUser(firstName:string,lastName:string,email:string,password:string):Promise<void>
{
   const res=await prisma.user.create({
        data:{
            firstName,
            lastName,
            email,
            password
        }
    })
     console.log(res);
     return ;
}
// insertUser("John","Doe","sdc@gmail.com","123456");

async function updateUser(firstName:string,lastName:string,email:string,password:string):Promise<void>
{
    const res=await prisma.user.update({
        where:{
            email
        },
        data:{
            firstName,
            lastName,
            password
        }
    })
    console.log(res);
    return ;
}
updateUser("Johnupdate","Doeupdate","sdc@gmail.com","12789");