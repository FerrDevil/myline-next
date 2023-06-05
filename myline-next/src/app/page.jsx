import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function(){
    
    redirect(`/${cookies().get("MYLINE-LOCALE-COOKIE")?.value || "ru"}`)
}