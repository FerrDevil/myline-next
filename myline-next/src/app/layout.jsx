import './globals.css'
import StyledComponentsRegistry from './stylesheet'
import Providers from './providers'
import { rubik } from './font'
import { cookies } from 'next/dist/client/components/headers'
import AcceptCookiesMessage from './components/AcceptCookiesMessage/AcceptCookiesMessage'

export const metadata = {
  title: 'Myline',
  description: 'Generated by create next app',
  icons: {
    icon:  [
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-dark.ico',
        media: '(prefers-color-scheme: dark)',
      },
    ]
  }
}





export default async function RootLayout({children}) {
  const lang = cookies().get("MYLINE-LOCALE-COOKIE")?.value || "ru"
  const acceptCookies = cookies().get("accept-cookies")?.value

  return (
    <html lang={lang} className={rubik.className}>
      <body>
        <Providers lang={lang}>
          <StyledComponentsRegistry>
              {
                children
              }
              <AcceptCookiesMessage acceptCookies={acceptCookies}/>
          </StyledComponentsRegistry>
        </Providers> 
        </body>
    </html>
  )
}
