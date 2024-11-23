import AuthService from "@/app/routes/auth/services/auth-service";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
    AuthService.destroySession()

    return NextResponse.redirect(new URL('/login', req.url))
}