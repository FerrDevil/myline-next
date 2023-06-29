export async function generateMetadata({ params : {lang}}){
  return {
    title: lang === "ru" ? "Каталог | Myline": "Catalog | Myline",
    description: 'Майлайн предлагает три варианта кейсов для лечения прикуса: MINI, MAX и MAX+. Каждый из них имеет свои особенности и преимущества, чтобы помочь вам достичь идеального прикуса без металлических брекетов и проволоки.',
    keywords: "элайнеры, лечение прикуса, кейс MINI, кейс MAX, кейс MAX+, индивидуальный подход, высокая квалификация",
  }
}

export default function Layout({children}) {
  return (
    <>
      {children}  
    </>    
  )
}