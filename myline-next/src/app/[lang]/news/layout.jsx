export const metadata = {
  title: 'Новости | Myline',
  description: "Новости нашей компании",
  keywords: "элайнеры, MYLINE, новости, соцсети",
}

export default function Layout(ctx) {
  return (
    <>
      {ctx.children}  
    </>    
  )
}