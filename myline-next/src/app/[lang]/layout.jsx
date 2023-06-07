import BaseLayout from "@/components/BaseLayout/BaseLayout";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import Announcement from "../Announcement/Announcement";


export default function Layout({children, params: {lang}}) {
    const localeCookie = cookies().get("MYLINE-LOCALE-COOKIE")?.value ? cookies().get("MYLINE-LOCALE-COOKIE")?.value : "ru"
    if (localeCookie !== lang){
        notFound()
    }
    const displayContent = true
    return (
    <BaseLayout>
        {
          !displayContent?
          <Announcement/>  :
          children
        }
    </BaseLayout>
            
    )
  }