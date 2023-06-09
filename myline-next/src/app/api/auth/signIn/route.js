import { cookies } from 'next/dist/client/components/headers';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const loginInfo = await request.json()
    if (loginInfo.login === "da" && loginInfo.password === "da"){
        cookies().set("access_cookie", newLocale, {path: "/", maxAge: 3600, sameSite: "Strict"})
        cookies().set("refresh_cookie", newLocale, {path: "/", maxAge: 2592000, sameSite: "Strict"})
        return NextResponse.json({ id: 1 });
    }
    return NextResponse.json({ error: "No such user exists" });
    
}