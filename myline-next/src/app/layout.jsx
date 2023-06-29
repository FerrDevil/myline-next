import './globals.css'
import StyledComponentsRegistry from './stylesheet'
import Providers from './providers'
import { rubik } from './font'
import { cookies } from 'next/dist/client/components/headers'
import AcceptCookiesMessage from './components/AcceptCookiesMessage/AcceptCookiesMessage'

export const metadata = {
  title: 'Myline',
  description: 'Добро пожаловать на сайт Майлайн! Мы предлагаем элайнеры для исправления прикуса без металлических брекетов и проволоки (заменить на дугу). Наша технология основана на использовании прозрачных съемных пластинок, которые позволяют вам незаметно корректировать положение зубов. Не стесняйтесь улыбаться – мы поможем вам достичь идеального прикуса! Майлайн – это идеальное решение для тех, кто ищет альтернативу металлическим брекетам и проволоке. Наши элайнеры изготавливаются индивидуально для каждого пациента, что гарантирует максимальную эффективность и комфорт. Наши специалисты помогут вам выбрать оптимальный вариант лечения и ответят на все ваши вопросы. Запишитесь на консультацию уже сегодня!',
  keywords: "элайнеры, исправление прикуса, прозрачные пластинки, индивидуальное изготовление, консультация",
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
