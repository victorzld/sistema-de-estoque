import { NextRequest, NextResponse } from 'next/server'
import AuthService from './app/routes/auth/services/auth-service';

export const config = {
    matcher: '/((?!assets|_next/static|_next/image|favicon.ico).*)',
};

const publicRoutes = [
    '/cadastro',
    '/login',
]

export async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname

    if (publicRoutes.includes(pathname)) {
        return NextResponse.next()
    }

    const session = await AuthService.isSessionValid()
    if (!session) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    return NextResponse.next()
}