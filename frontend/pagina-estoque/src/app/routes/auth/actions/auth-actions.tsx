import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'
import AuthService from '../services/auth-service'

const prisma = new PrismaClient()

async function criarConta(formData: FormData) {
    'use server'

    const name = formData.get('name') as string
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const hashPassword = await bcrypt.hash(password, 10)

    await prisma.user.create({
        data: {
            name,
            email,
            password: hashPassword,
        }
    })

    redirect('/login')
}

async function logarNaConta(formData: FormData) {
    'use server'

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const user = await prisma.user.findFirst({
        where: {
            email,
        }
    })

    if (!user) {
        redirect('/cadastro')

    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        redirect('/cadastro')
    }

    await AuthService.createSessionToken({
        sub: user.id,
        name: user.name,
        email: user.email,
    })

    redirect('/cadastrar-produtos')
}

const AuthActions = {
    criarConta,
    logarNaConta,
}

export default AuthActions;