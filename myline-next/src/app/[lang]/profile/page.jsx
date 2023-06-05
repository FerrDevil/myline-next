import { cookies } from "next/dist/client/components/headers"
import { redirect } from "next/navigation"

export default async function ProfilePage() {
    redirect(`/${cookies().get("MYLINE-LOCALE-COOKIE").value}/profile/appointment`)
  }