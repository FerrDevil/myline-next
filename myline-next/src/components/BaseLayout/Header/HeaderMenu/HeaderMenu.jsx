"use client"
import { useState } from "react"
import { HeaderMenuLink, HeaderMenuLinkTitle, HeaderMenuSidebar, HeaderMenuSidebarNav, HeaderMenuToggleButton, HeaderMenuWrapper, HeaderMenuToggleButtonSVG, HeaderMenuLinkWrapper, HeaderMenuRegisterLink, HeaderMenuLoginLink, HeaderMenuFooter, HeaderMenuFooterText, HeaderMenuSidebarBackdrop, SocialsLinksContainer, SocialsLink, TwitterLinkSVG, YoutubeLinkSVG, FacebookLinkSVG, VKLinkSVG, InstagramLinkSVG, HeaderMenuProfileLink, HeaderMenuLogoutLink, HeaderMenuSidebarNavLinks, HeaderMenuSidebarNavLinksWrapper, HeaderMenuSidebarNavLinksHeader, HeaderMenuFooterInformationWarning, HeaderMenuFooterCreditInformation, HeaderMenuFooterInformationWarningLink } from "./styles"
import { useParams, usePathname } from "next/navigation"
import LanguageChanger from "../LanguageChanger/LanguageChanger"
import Link from "next/link"


const HeaderMenu = ({isAuthorized}) => {
    const { lang } = useParams()
    const pathname = usePathname()
    const [isShown, setShown] = useState(false)
    
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
                        <HeaderMenuSidebarNavLinksHeader>
                            Меню
                        </HeaderMenuSidebarNavLinksHeader>
                        <HeaderMenuSidebarNavLinks>
                            <HeaderMenuLink href={`/${lang}`} onClick={() => {setShown(false)}}>
                                <HeaderMenuLinkTitle> {lang === "ru" ? "Главная": "Main"} </HeaderMenuLinkTitle>
                            </HeaderMenuLink>
                            <HeaderMenuLink href={`${lang}/about`} onClick={() => {setShown(false)}}>
                                <HeaderMenuLinkTitle> {lang === "ru" ? "Кто мы?": "About us"} </HeaderMenuLinkTitle>
                            </HeaderMenuLink>
                            <HeaderMenuLink href={`${lang}/catalog`} onClick={() => {setShown(false)}}>
                                <HeaderMenuLinkTitle> {lang === "ru" ? "Каталог": "Catalog"} </HeaderMenuLinkTitle>
                            </HeaderMenuLink>
                            <HeaderMenuLink href={`${lang}/media`} onClick={() => {setShown(false)}}>
                                <HeaderMenuLinkTitle> {lang === "ru" ? "Что могут элайнеры?": "Media"} </HeaderMenuLinkTitle>
                            </HeaderMenuLink>
                            <HeaderMenuLink href={`${lang}/news`} onClick={() => {setShown(false)}}>
                                <HeaderMenuLinkTitle> {lang === "ru" ? "Новости": "News"} </HeaderMenuLinkTitle>
                            </HeaderMenuLink>
                            <HeaderMenuLink href={`${lang}/news`} onClick={() => {setShown(false)}}>
                                <HeaderMenuLinkTitle> {lang === "ru" ? "Статьи": "Articles"} </HeaderMenuLinkTitle>
                            </HeaderMenuLink>
                            <HeaderMenuLink href={`${lang}/contacts`} onClick={() => {setShown(false)}}>
                                <HeaderMenuLinkTitle> {lang === "ru" ? "Контакты": "Contacts"} </HeaderMenuLinkTitle>
                            </HeaderMenuLink>
                        </HeaderMenuSidebarNavLinks>
                    </HeaderMenuSidebarNavLinksWrapper>

                    <HeaderMenuSidebarNavLinksWrapper>
                        <HeaderMenuSidebarNavLinksHeader>
                            Прочая информация
                        </HeaderMenuSidebarNavLinksHeader>
                        <HeaderMenuSidebarNavLinks>
                           
                            <HeaderMenuLink href={`${lang}/catalog`} onClick={() => {setShown(false)}}>
                                <HeaderMenuLinkTitle> {lang === "ru" ? "Политика конфиденциальности": "Conditions for receiving"} </HeaderMenuLinkTitle>
                            </HeaderMenuLink>
                            <HeaderMenuLink href={`${lang}/catalog`} onClick={() => {setShown(false)}}>
                                <HeaderMenuLinkTitle> {lang === "ru" ? "Гарантия качества": "Company's politics"} </HeaderMenuLinkTitle>
                            </HeaderMenuLink>
                            <HeaderMenuLink href={`${lang}/catalog`} onClick={() => {setShown(false)}}>
                                <HeaderMenuLinkTitle> {lang === "ru" ? "Лицензии и сертификаты": "Licenses and certificates"} </HeaderMenuLinkTitle>
                            </HeaderMenuLink>
                        </HeaderMenuSidebarNavLinks>
                    </HeaderMenuSidebarNavLinksWrapper>
                    
                   
                   
                    <HeaderMenuLinkWrapper>
                        {
                            isAuthorized ? 
                            <>
                                <HeaderMenuProfileLink href={`${lang}/profile`}>
                                    {lang === "ru" ? "Личный кабинет": "Profile"}
                                </HeaderMenuProfileLink>
                                <HeaderMenuLogoutLink >
                                    {lang === "ru" ? "Выйти": "Sign out"}
                                </HeaderMenuLogoutLink>
                            </> :
                            <>
                            <HeaderMenuRegisterLink href={`${lang}/register`}>
                                {lang === "ru" ? "Зарегистрироваться": "Register"}
                            </HeaderMenuRegisterLink>
                            <HeaderMenuLoginLink href={`${lang}/signIn`}>
                                {lang === "ru" ? "Войти": "Sign in"}
                            </HeaderMenuLoginLink>
                            </>
                        }
                        
                        
                    </HeaderMenuLinkWrapper>
                </HeaderMenuSidebarNav>


                <HeaderMenuFooter>
                    <SocialsLinksContainer>
                        <SocialsLink target="_blank" href="https://twitter.com/"><TwitterLinkSVG/></SocialsLink>
                        <SocialsLink target="_blank" href="https://youtube.com/"><YoutubeLinkSVG/></SocialsLink>
                        <SocialsLink target="_blank" href="https://facebook.com/"><FacebookLinkSVG/></SocialsLink>
                        <SocialsLink target="_blank" href="https://vk.com/mylinegroup"><VKLinkSVG/></SocialsLink>
                        <SocialsLink target="_blank" href="https://instagram.com/"><InstagramLinkSVG/></SocialsLink>
                    </SocialsLinksContainer>

                    <HeaderMenuFooterCreditInformation>
                        ИНН: 1840119469
                       <p> КПП: 184001001 ОГРН: 1231800004523</p>
                    </HeaderMenuFooterCreditInformation>
                    <HeaderMenuFooterText>
                        © {lang === "ru" ? "МАЙЛАЙН": "MYLINE"}, 2023
                    </HeaderMenuFooterText>
                   <HeaderMenuFooterInformationWarning>
                    Отправляя любую форму на данном сайте вы соглашаетесь с <HeaderMenuFooterInformationWarningLink href={`${lang}/catalog`}>политикой конфиденциальности</HeaderMenuFooterInformationWarningLink>
                   </HeaderMenuFooterInformationWarning>
                </HeaderMenuFooter>
                    
                    
                
            </HeaderMenuSidebar>
        </HeaderMenuWrapper>
    )
}

export default HeaderMenu