"use client"
import { useLayoutEffect, useState } from "react"
import { HeaderMenuLink, HeaderMenuLinkTitle, HeaderMenuSidebar, HeaderMenuSidebarNav, HeaderMenuToggleButton, HeaderMenuWrapper, HeaderMenuToggleButtonSVG, HeaderMenuLinkWrapper, HeaderMenuRegisterLink, HeaderMenuLoginLink, HeaderMenuFooter, HeaderMenuFooterText, HeaderMenuSidebarBackdrop, SocialsLinksContainer, SocialsLink, YoutubeLinkSVG, VKLinkSVG, InstagramLinkSVG, HeaderMenuProfileLink, HeaderMenuLogoutLink, HeaderMenuSidebarNavLinks, HeaderMenuSidebarNavLinksWrapper, HeaderMenuFooterInformationWarning, HeaderMenuFooterCreditInformation, HeaderMenuFooterInformationWarningLink, WhatsAppLinkSVG, TelegramLinkSVG, ViberLinkSVG, HeaderMenuButton } from "./styles"
import { useParams, usePathname } from "next/navigation"
import LanguageChanger from "../LanguageChanger/LanguageChanger"
import DocumentsModal from "./DocumentsModal/DocumentsModal"


const HeaderMenu = ({isAuthorized}) => {
    const { lang } = useParams()
    const pathname = usePathname()
    const [isShown, setShown] = useState(false)
    const [isDocumentsModalOpen, setDocumentsModalOpen] = useState(false)

    useLayoutEffect(() => {
        if(!document) return
        isShown ?
        (document.body.style.overflowY = "hidden"):
        (document.body.style.overflowY = "auto" )
    }, [isShown])
    return (
        <HeaderMenuWrapper>
            <HeaderMenuToggleButton $shouldChangeColor={`/${lang}` !== pathname} onClick={() => {setShown(prev => !prev)}}>
                <HeaderMenuToggleButtonSVG/>
            </HeaderMenuToggleButton>
            { isShown && <HeaderMenuSidebarBackdrop onClick={() => {setShown(false)}}/>}
            <HeaderMenuSidebar $isShown={isShown}>
               
                <HeaderMenuSidebarNav>
                    <LanguageChanger isInMenu={true}/>
                    <HeaderMenuSidebarNavLinksWrapper>
                        <HeaderMenuSidebarNavLinks>
                            <HeaderMenuLink href={`/${lang}`} onClick={() => {setShown(false)}}>
                                <HeaderMenuLinkTitle> {lang === "ru" ? "Главная": "Main"} </HeaderMenuLinkTitle>
                            </HeaderMenuLink>
                            <HeaderMenuLink href={`${lang}/about`} onClick={() => {setShown(false)}}>
                                <HeaderMenuLinkTitle> {lang === "ru" ? "О компании": "About us"} </HeaderMenuLinkTitle>
                            </HeaderMenuLink>
                            <HeaderMenuLink href={`${lang}/catalog`} onClick={() => {setShown(false)}}>
                                <HeaderMenuLinkTitle> {lang === "ru" ? "Каталог": "Catalog"} </HeaderMenuLinkTitle>
                            </HeaderMenuLink>
                            <HeaderMenuLink href={`${lang}/doctor`} onClick={() => {setShown(false)}}>
                                <HeaderMenuLinkTitle> {lang === "ru" ? "Врачам": "About us"} </HeaderMenuLinkTitle>
                            </HeaderMenuLink>
                            <HeaderMenuLink href={`${lang}/patient`} onClick={() => {setShown(false)}}>
                                <HeaderMenuLinkTitle> {lang === "ru" ? "Пациентам": "For patients"} </HeaderMenuLinkTitle>
                            </HeaderMenuLink>
                            <HeaderMenuLink href={`${lang}/media`} onClick={() => {setShown(false)}}>
                                <HeaderMenuLinkTitle> {lang === "ru" ? "Что могут элайнеры?": "Media"} </HeaderMenuLinkTitle>
                            </HeaderMenuLink>
                            <HeaderMenuLink href={`${lang}/news`} onClick={() => {setShown(false)}}>
                                <HeaderMenuLinkTitle> {lang === "ru" ? "Новости": "News"} </HeaderMenuLinkTitle>
                            </HeaderMenuLink>
                            <HeaderMenuLink href={`${lang}/contacts`} onClick={() => {setShown(false)}}>
                                <HeaderMenuLinkTitle> {lang === "ru" ? "Контакты": "Contacts"} </HeaderMenuLinkTitle>
                            </HeaderMenuLink>
                            <HeaderMenuButton 
                                onClick={() => {
                                    setDocumentsModalOpen(true)
                                    setShown(false)
                                }}
                            >
                                <HeaderMenuLinkTitle> {lang === "ru" ? "Документы": "Documents"} </HeaderMenuLinkTitle>
                            </HeaderMenuButton>
                            <DocumentsModal isOpen={isDocumentsModalOpen} setOpen={setDocumentsModalOpen}/>
                        </HeaderMenuSidebarNavLinks>
                    </HeaderMenuSidebarNavLinksWrapper>
                   
                    <HeaderMenuLinkWrapper>
                        {
                            isAuthorized ? 
                            <>
                                <HeaderMenuProfileLink href={`#`} onClick={() => {setShown(false)}}>
                                    {lang === "ru" ? "Личный кабинет": "Profile"}
                                </HeaderMenuProfileLink>
                                <HeaderMenuLogoutLink onClick={() => {setShown(false)}}>
                                    {lang === "ru" ? "Выйти": "Sign out"}
                                </HeaderMenuLogoutLink>
                            </> :
                            <>
                            <HeaderMenuRegisterLink href={`#`} onClick={() => {setShown(false)}}>
                                {lang === "ru" ? "Зарегистрироваться": "Register"}
                            </HeaderMenuRegisterLink>
                            <HeaderMenuLoginLink href={`#`} onClick={() => {setShown(false)}}>
                                {lang === "ru" ? "Войти": "Sign in"}
                            </HeaderMenuLoginLink>
                            </>
                        }
                        
                        
                    </HeaderMenuLinkWrapper>
                </HeaderMenuSidebarNav>


                <HeaderMenuFooter>
                    <SocialsLinksContainer>
                        <SocialsLink target="_blank" href="https://vk.com/mylinegroup"><VKLinkSVG/></SocialsLink>
                        <SocialsLink target="_blank" href="https://www.youtube.com/@Myline.inform"><YoutubeLinkSVG/></SocialsLink>
                        <SocialsLink target="_blank" href="https://wa.me/79048304445"><WhatsAppLinkSVG/></SocialsLink>
                        <SocialsLink target="_blank" href="https://t.me/+79048304445"><TelegramLinkSVG/></SocialsLink>
                        <SocialsLink target="_blank" href="https://viber.click/79048304445"><ViberLinkSVG/></SocialsLink>
                    </SocialsLinksContainer>

                    <HeaderMenuFooterCreditInformation>
                        <p> ООО “МАЙЛАЙН» </p>
                        <p> ОГРН 1231800004523 </p>
                        <p> ИНН 1840119469 </p>
                        <p>Лицензия – оставить место </p>
                    </HeaderMenuFooterCreditInformation>
                    <HeaderMenuFooterText>
                        © {lang === "ru" ? "МАЙЛАЙН": "MYLINE"}, 2023
                    </HeaderMenuFooterText>
                   <HeaderMenuFooterInformationWarning>
                        Отправляя любую форму на данном сайте вы соглашаетесь с <HeaderMenuFooterInformationWarningLink target="_blank" href={`/pdf/политика конфиденциальности.pdf`}>политикой конфиденциальности</HeaderMenuFooterInformationWarningLink>
                   </HeaderMenuFooterInformationWarning>
                </HeaderMenuFooter>
                    
                    
                
            </HeaderMenuSidebar>
        </HeaderMenuWrapper>
    )
}

export default HeaderMenu