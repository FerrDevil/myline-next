"use client"
import Link from "next/link"
import styled from "styled-components"

import MenuSVG from "@/public/menu.svg"

import ViberSVG from "@/public/viber.svg"
import YoutubeSVG from "@/services/contacts/public/youtube.svg"
import TelegramSVG from "@/public/telegram.svg"
import VKSVG from "@/services/contacts/public/vk.svg"
import WhatsAppSVG from "@/public/whatsapp.svg"

export const HeaderMenuWrapper = styled.div`
    position: relative;
    height: 100%;
`

export const HeaderMenuToggleButton = styled.button`
    all: unset;
    padding: 10px;
    box-sizing: border-box;
    height: 100%;
    aspect-ratio: 1;
    text-align: center;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.2s;
    display: grid;
    grid-template-rows: 1fr;
    place-items: center;

    & > svg{
        fill: ${props => props.$shouldChangeColor ? "#404342" : "var(--color-aquamarine)"};
    }
`

export const HeaderMenuToggleButtonSVG = styled(MenuSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: var(--color-aquamarine);
    transition: fill 0.3s;
    
`



export const HeaderMenuSidebar = styled.aside`
    min-width: 340px;
    max-width: 370px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    transform: translateX(${props => props.$isShown? "0" : "-100"}%);
    transition: transform 0.4s;
    background-color: var(--color-main-gray);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    padding: 30px;
    overflow-y: auto;

    @media (max-width: 400px) {
        width: calc(100% - 20px);
    }
`

export const HeaderMenuSidebarBackdrop = styled.div`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    
`

export const HeaderMenuSidebarNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: clamp(25px, 13px + 1vw, 40px);
`

export const HeaderMenuSidebarNavLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: clamp(10px, 5px + 1vw, 20px);
`

export const HeaderMenuSidebarNavLinksHeader = styled.h2`
    font-weight: 700;
    font-size: clamp(14px, 7px + 1vw, 16px);
    line-height: 100%;
    color: #B6B6B6;
    text-transform: uppercase;
`

export const HeaderMenuSidebarNavLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: clamp(20px, 10px + 1vw, 25px);
`


export const HeaderMenuLink = styled(Link)`
    display: grid;
    grid-template-columns: 1fr;
    cursor: pointer;
    &:hover > span, &:focus-within > span{
        color: var(--color-aquamarine);
    }
`

export const HeaderMenuLinkTitle = styled.span`
    font-weight: 400;
    font-size: clamp(16px, 8px + 1vw , 20px);
    line-height: 100%;
    
    color: #fff;
`
export const HeaderMenuLinkWrapper = styled.div`
    display: grid;
    width: 100%;
    gap: 10px;
`

export const HeaderMenuRegisterLink = styled(Link)`
    font-size: clamp(14px, 7px + 1vh, 16px);
    background-color: var(--color-aquamarine);
    color: #404342;
    text-align: center;
    padding: clamp(10px, 7px + 1vh, 15px);
    border-radius: 4px;
    font-weight: 600;
    border: 1px solid transparent;
    transition: background-color 0.3s, border-color 0.3s;
    &:hover, &:focus-visible{
        outline: 1px solid transparent;
        background-color: #fff;
        border-color: var(--color-aquamarine);
    }
`

export const HeaderMenuProfileLink = styled(Link)`
    font-size: clamp(14px, 7px + 1vh, 16px);
    background-color: var(--color-aquamarine);
    color: #404342;
    text-align: center;
    padding: clamp(10px, 7px + 1vh, 15px);
    border-radius: 4px;
    font-weight: 600;
    border: 1px solid transparent;
    transition: background-color 0.3s, border-color 0.3s;
    &:hover, &:focus-visible{
        outline: 1px solid transparent;
        background-color: #fff;
        border-color: var(--color-aquamarine);
    }
` 

export const HeaderMenuLoginLink = styled(Link)`
    font-size: clamp(14px, 7px + 1vh, 16px);
    border: 1px solid var(--color-aquamarine);
    background-color: #404342;
    color: var(--color-aquamarine);
    text-align: center;
    padding: clamp(10px, 7px + 1vh, 15px);
    border-radius: 4px;
    font-weight: 600;
    transition: background-color 0.3s, color 0.3s;
    &:hover, &:focus-visible{
        outline: 1px solid transparent;
        background-color: var(--color-aquamarine);
        color: #fff;
    }

`

export const HeaderMenuLogoutLink = styled.button`
    font-size: clamp(14px, 7px + 1vh, 16px);
    border: 1px solid var(--color-aquamarine);
    background-color: #404342;
    color: var(--color-aquamarine);
    text-align: center;
    padding: clamp(10px, 7px + 1vh, 15px);
    border-radius: 4px;
    font-weight: 600;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;
    &:hover, &:focus-visible{
        outline: 1px solid transparent;
        background-color: var(--color-aquamarine);
        color: #fff;
    }

`

export const HeaderMenuFooter = styled.footer`
    display: grid;
    width: 100%;
    gap: 10px;
    padding-inline: 10px;
`

export const HeaderMenuFooterText = styled.span`
    font-size: 16px;
    color: #fff;
`


export const SocialsLinksContainer = styled.div`
    display: flex;  
    gap: 10px;
`
export const SocialsLink = styled.a`
    display: block;
    width: clamp(18px, 1vw + 1vh, 24px);
    aspect-ratio: 1;
`

export const ViberLinkSVG = styled(ViberSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #fff;
`
export const YoutubeLinkSVG = styled(YoutubeSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #fff;
`
export const TelegramLinkSVG = styled(TelegramSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #fff;
`
export const VKLinkSVG = styled(VKSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #fff;
`
export const WhatsAppLinkSVG = styled(WhatsAppSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #fff;
`

export const HeaderMenuFooterCreditInformation = styled.span`
    font-weight: 300;
    font-size: clamp(10px, 5px + 1vw, 16px);
    line-height: 135%;
    color: #B6B6B6;
`

export const HeaderMenuFooterInformationWarning = styled.span`
    font-weight: 300;
    font-size: clamp(8px, 2px + 1vw, 12px);
    line-height: 135%;
    color: #B6B6B6;
`

export const HeaderMenuFooterInformationWarningLink = styled(Link)`
    text-decoration: underline;
    transition: color 0.3s;
    &:hover, &:focus-visible, &:active{
        color: #fff;
    }
`