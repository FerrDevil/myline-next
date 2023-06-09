"use client"
import { usePathname } from "next/navigation"
import { ProfileLayoutLink } from "./styles"

const ProfileNavigationLink = ({ link, children }) => {
    const pathname = usePathname()
    return(  
        <ProfileLayoutLink $isActive={link === pathname} href={link}>{children}</ProfileLayoutLink>
        
    )
}

export default ProfileNavigationLink