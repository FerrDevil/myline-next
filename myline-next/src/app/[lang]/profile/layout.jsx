import ProfileLayout from "@/services/profile/components/ProfileLayout/ProfileLayout"

export const metadata = {
  title: 'Личный кабинет',
  description: 'Generated by create next app',
}

export default function Layout({children}) {
  return (
    <ProfileLayout>
      { children }  
    </ProfileLayout>    
  )
}