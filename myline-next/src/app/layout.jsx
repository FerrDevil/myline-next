import './globals.css'
import StyledComponentsRegistry from './stylesheet'
import Providers from './providers'
import { rubik } from './font'
import { cookies } from 'next/dist/client/components/headers'
import AcceptCookiesMessage from './components/AcceptCookiesMessage/AcceptCookiesMessage'

export const metadata = {
  title: 'Myline',
  description: 'Добро пожаловать на сайт Майлайн! Мы предлагаем элайнеры для исправления прикуса без металлических брекетов и проволоки.',
  keywords: "элайнеры, исправление прикуса, прозрачные пластинки, индивидуальное изготовление, консультация",
  other: {
    "yandex-verification": "78f55d525413a2be",
    "google-site-verification": "_A7t_K0MHeWQuCQr09rC34IE01NB3ebze9WwYblaVp0"
  },
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
