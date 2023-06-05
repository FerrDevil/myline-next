"use client"

import { useParams, usePathname } from "next/navigation"
import { HeaderLogoImage, HeaderLogoWrapper } from "./styles"

const HeaderLogo = () => {
    const { lang } = useParams()
    const pathname = usePathname()
    const shouldPlaceDarkLogo = `/${lang}` === pathname
    return(
        <HeaderLogoWrapper>
            <HeaderLogoImage src={shouldPlaceDarkLogo ? "/myline-logo-dark.png" : "/myline-logo.png"}/>
        </HeaderLogoWrapper>
    )
}

export default HeaderLogo