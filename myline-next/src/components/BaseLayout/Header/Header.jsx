"use client"
import { useParams, usePathname } from "next/navigation"
import HeaderLogo from "./HeaderLogo/HeaderLogo"
import HeaderMenu from "./HeaderMenu/HeaderMenu"
import LanguageChanger from "./LanguageChanger/LanguageChanger"
import { DoctorLink, HeaderNav, HeaderWrapper } from "./styles" 

const Header = ({isAuthorized}) => {
    const pathname = usePathname()
    const { lang } = useParams()
    return(
        <HeaderWrapper $shouldDisplayBackground={`/${lang}` !== pathname}>
            <HeaderMenu isAuthorized={isAuthorized}/>
            <HeaderLogo/>
            <HeaderNav>
                <LanguageChanger/>
                <DoctorLink $shouldAlternate={`/${lang}` !== pathname} href="#">{lang === "ru" ? "Я врач" : "I am a doctor"}</DoctorLink>
            </HeaderNav>
        </HeaderWrapper>
    )
}

export default Header