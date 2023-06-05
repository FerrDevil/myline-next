import { NextResponse } from 'next/server'

let locales = ['en', 'ru'];

function getLocale(request) { 
    return request.cookies.get("MYLINE-LOCALE-COOKIE")?.value
}

export function middleware(request) {
    const pathname = request.nextUrl.pathname !== "/undefined" ? "" + request.nextUrl.pathname : ""
    const pathnameIsMissingLocale = locales.every(
      (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )
    
    const localeCookie = getLocale(request)
    
    const response = NextResponse.next()
    response.cookies.set("MYLINE-LOCALE-COOKIE", localeCookie || "ru", { path: "/", maxAge: 2592000, sameSite: "Strict" })

    return response

    /* if (pathnameIsMissingLocale) {
      response = NextResponse.redirect(new URL(`/${shouldSetCookie? "ru" : localeCookie}`, request.url)) 
      console.log(request.cookies.getAll())
    }  */
    
    
   
  }

  export const config = {
    matcher: [
      
      "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|.*\\..*).*)"
    ],
  }
   