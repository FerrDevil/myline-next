export async function generateMetadata({ params : {lang}}){
  return {
    title: lang === "ru" ? 'Регистрация': "Registration",
    description: 'Generated by create next app',
  }
}

export default function Layout({children}) {
  return (
    <>
      {children}  
    </>    
  )
}