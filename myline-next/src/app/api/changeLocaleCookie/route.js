import { cookies } from 'next/dist/client/components/headers';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const newLocale = searchParams.get('newLocale');
    if (!newLocale) return NextResponse.json({ request: "rejected" });
    cookies().set("MYLINE-LOCALE-COOKIE", newLocale, {path: "/", maxAge: 2592000, sameSite: "Strict"})
    return NextResponse.json({ request: "fulfilled" });
}