export async function generateMetadata({ params : {lang}}){
  return {
    title: lang === "ru" ? 'Наши партнеры': "Partners",
    description: 'Партнеры нашей компании',
    keywords: "местоположение, партнеры, клиники, метки, карта, сотрудничество"
  }
}

export default function Layout({children}) {
  return (
    <>
      {children}  
    </>    
  )
}