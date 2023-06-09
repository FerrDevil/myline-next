"use client"
import { usePathname } from "next/navigation"
import { DocumentsLayoutLink } from "./styles"

const DocumentsNavigationLink = ({ link, children }) => {
    const pathname = usePathname()
    return(  
        <DocumentsLayoutLink $isActive={link === pathname} href={link}>{children}</DocumentsLayoutLink>
        
    )
}

export default DocumentsNavigationLink