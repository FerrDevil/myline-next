
export async function generateMetadata({ params : {lang}}){
  return {
    title: lang === "ru" ? 'Врачам': "For doctors",
    description: 'Generated by create next app',
  }
}

export default function Layout(ctx) {
  return (
    <>
      {ctx.children}  
    </>    
  )
}