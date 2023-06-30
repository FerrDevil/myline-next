export const metadata = {
  title: 'Контакты | Myline',
  description: 'Узнайте, как можно с нами связаться',
  keywords: "местоположение, адрес, контакты, мобильный телефон, viber, telegram, whatsapp, vk, email, youtube, отзывы, техническая поддержка"
}

export default function Layout(ctx) {
  return (
    <>
      {ctx.children}
    </>    
  )
}