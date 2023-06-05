import { cookies } from 'next/dist/client/components/headers';
import { NextResponse } from 'next/server';

export async function GET() {
    cookies().set("accept-cookies", true, {path: "/", maxAge: 2592000, sameSite: "Strict"})
    return NextResponse.json({ request: "fulfilled" });
}