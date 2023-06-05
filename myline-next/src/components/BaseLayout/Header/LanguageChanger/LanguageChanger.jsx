"use client"

import { useEffect, useState } from "react"
import { LanguageChangerButton, LanguageChangerButtonImage, LanguageChangerButtonImageWrapper, LanguageChangerSelectContainer, LanguageChangerWrapper } from "./styles"
import { useParams, usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { rubik } from "@/app/font"

const LanguageChanger = ({isInMenu=false}) => {

    const pathname = usePathname()
    const router = useRouter()
    const { lang } = useParams()
    const languages = [
        {
            id: 1,
            link: "ru",
            title: "Русский",
            image: "/images/russia.png"
        },
        {
            id: 2,
            link: "en",
            title: "English",
            image: "/images/united-kingdom.png"
        },
    ]
   
    

    const currentLanguage = languages.find(language => language.link === lang)
    
    const [isSelectShown, setSelectShown] = useState(false)

    return (
        <LanguageChangerWrapper $isInMenu={isInMenu}>
            <LanguageChangerButton className={rubik.className} $shouldTextColorChange={ isInMenu ? false : `/${lang}` !== pathname } onClick={() => {setSelectShown(prev => !prev)}}>
                <LanguageChangerButtonImageWrapper>
                    <LanguageChangerButtonImage src={currentLanguage.image}/>
                </LanguageChangerButtonImageWrapper>
                
                <span>{currentLanguage.title}</span>
            </LanguageChangerButton>
            <LanguageChangerSelectContainer $isShown={isSelectShown}>
                {
                    languages
                    .filter(language => language.link !== lang)
                    .map(language => (
                        <LanguageChangerButton className={rubik.className} key={language.id}
                            onClick={async () => {
                                const req = await fetch(`/api/changeLocaleCookie?newLocale=${language.link}`)
                                router.push(`${language.link}/${pathname.replace(lang, "")}`)
                                setSelectShown(false)
                            }}
                        >
                            <LanguageChangerButtonImageWrapper>
                                <LanguageChangerButtonImage src={language.image}/>
                            </LanguageChangerButtonImageWrapper>
                            
                            <span>{language.title}</span>
                        </LanguageChangerButton>
                    ))
                }
            </LanguageChangerSelectContainer>
        </LanguageChangerWrapper>

    )
}

export default LanguageChanger