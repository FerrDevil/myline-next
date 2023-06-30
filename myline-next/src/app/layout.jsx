import './globals.css'
import StyledComponentsRegistry from './stylesheet'
import Providers from './providers'
import { rubik } from './font'
import { cookies } from 'next/dist/client/components/headers'
import AcceptCookiesMessage from './components/AcceptCookiesMessage/AcceptCookiesMessage'
import Script from 'next/script'

export const metadata = {
  title: 'Myline',
  description: 'Добро пожаловать на сайт Майлайн! Мы предлагаем элайнеры для исправления прикуса без металлических брекетов и проволоки. Наша технология основана на использовании прозрачных пластинок, которые позволяют вам незаметно корректировать положение зубов. Не стесняйтесь улыбаться!',
  keywords: "элайнеры, исправление прикуса, прозрачные пластинки, индивидуальное изготовление, консультация",
  other: {
    "yandex-verification": "78f55d525413a2be",
    "google-site-verification": "I7pX4jvHf48FDPtJoejsqeWGO7aSIVxcpD5VNHHPmvs"
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
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`} />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.GA_MEASUREMENT_ID}');
          `}
        </Script> 
        </body>
    </html>
  )
}
