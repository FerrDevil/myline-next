import BaseLayout from "@/components/BaseLayout/BaseLayout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/* export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'ru' }];
  } */

export default function Layout({children, params: {lang}}) {
    const localeCookie = cookies().get("MYLINE-LOCALE-COOKIE")?.value ? cookies().get("MYLINE-LOCALE-COOKIE")?.value : "ru"
    if (localeCookie !== lang){
        redirect(`/${localeCookie}`)
    }
    return (
    <BaseLayout>
        {children}
    </BaseLayout>
            
    )
  }