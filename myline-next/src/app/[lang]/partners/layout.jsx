export async function generateMetadata({ params : {lang}}){
  return {
    title: lang === "ru" ? 'Наши партнеры': "Partners",
    description: 'Партнеры',
    keywords: "местоположение, партнеры, клиники, "
  }
}

export default function Layout({children}) {
  return (
    <>
      {children}  
    </>    
  )
}