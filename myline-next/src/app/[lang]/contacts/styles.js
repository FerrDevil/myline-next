"use client"
import styled from "styled-components"


import YoutubeSVG from "@/public/youtube.svg"
import VKSVG from "@/public/vk.svg"

import ViberSVG from "@/public/viber.svg"
import TelegramSVG from "@/public/telegram.svg"
import WhatsAppSVG from "@/public/whatsapp.svg"

import EmailSVG from "@/app/[lang]/contacts/public/email.svg"
import PhoneCallSVG from "@/app/[lang]/contacts/public/phone-call.svg"
import TelephoneSVG from "@/app/[lang]/contacts/public/telephone.svg"
import LocationSVG from "@/app/[lang]/contacts/public/location.svg"
import GisSVG from "@/app/[lang]/contacts/public/2gis.svg"
import YandexSVG from "@/app/[lang]/contacts/public/yandex.svg"



export const ContactPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-block: clamp(40px, 20px + 3vw, 80px) 20px;
    width: 100%;
`

export const ContactPageHeader = styled.h1`
    font-size: clamp(30px, 15px + 3vw, 60px);
    font-weight: 700;
    text-transform: uppercase;
    color: var(--color-main-gray);
`
export const ContactPageContainer = styled.div`
    display: grid;
    width: 100%;
    max-height: 100%;
    
    @media (min-width: 1280px) {
        min-height: 500px;
        grid-template-columns: 2fr 3fr;
        gap: 60px;
    }
    @media (max-width: 1280px) {
        grid-template-rows: 1fr 1fr;
        gap: 20px;
        
    }
`

export const ContactPageContacts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
`

export const ContactPageSocialsContainer = styled.div`
    display: flex;  
    flex-direction: column;
    gap: clamp(10px, 5px + 1vw, 20px);
    flex-wrap: wrap;
    
`

export const ContactPageSocialsText = styled.span`
    font-weight: 500;
    font-size: clamp(14px, 7px + 1vw, 18px);
    color: var(--color-light-gray);
    transition: text-decoration 0.3s;
`

export const ContactPageSocialsLinksContainer = styled.div`
    display: flex;  
    flex-direction: row;
    align-items: center;
    gap: 6px;
`

export const ContactPageSocialsLinks = styled.div`
    display: flex;  
    flex-direction: row;
    align-items: center;
    gap: clamp(5px, 1vw, 15px);
    flex-wrap: wrap;

`

export const ContactPageSocialsLink = styled.a`
    display: block;
    width: 24px;
    height: 24px;

    &:hover > svg, &:focus-visible > svg, &:active > svg{
        fill: #00C2FF;
    }
`



export const ContactPageYoutubeLinkSVG = styled(YoutubeSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: fill 0.3s;
    fill: var(--color-aquamarine);
`

export const ContactPageVKLinkSVG = styled(VKSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: fill 0.3s;
    fill: var(--color-aquamarine);
`

export const ContactPageViberSVG = styled(ViberSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: fill 0.3s;
    fill: var(--color-aquamarine);
`

export const ContactPageTelegramSVG = styled(TelegramSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: fill 0.3s;
    fill: var(--color-aquamarine);
`
export const ContactPageWhatsAppSVG = styled(WhatsAppSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: fill 0.3s;
    fill: var(--color-aquamarine);
`

export const ContactPageContactInformation = styled.div`
    display: grid;
    gap: 10px;
`

export const ContactPageContactInformationContacts = styled.div`
    display: flex;
    align-items: flex-start;

    gap: 20px;
    flex-wrap: wrap;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`
export const ContactPageContactInformationContactWrapper = styled.span`
    display: grid;
    gap: 10px;
`
export const ContactPageContactInformationContact = styled.span`
    font-size: clamp(16px, 8px + 1vw, 20px);
    font-weight: 600;
    color: var(--color-main-gray);
    white-space: nowrap;
    display: flex;
    gap: 5px;
`

export const ContactPageContactInformationText = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: var(--color-light-gray);
`

export const ContactInformationEmailSVG = styled(EmailSVG)`
    width: 24px;
    height: 24px;
    object-fit: contain;
    fill: var(--color-aquamarine);
`

export const ContactInformationTelephoneSVG = styled(TelephoneSVG)`
    width: 24px;
    height: 24px;
    object-fit: contain;
    fill: var(--color-aquamarine);
`

export const ContactInformationPhoneCallSVG = styled(PhoneCallSVG)`
    width: 24px;
    height: 24px;
    object-fit: contain;
    fill: var(--color-aquamarine);
`




export const ContactPageAddressesWrapper = styled.div`
    display: grid;
    gap: 30px;
`

export const ContactPageAddressesContainer = styled.div`
    display: grid;
    gap: 15px;
`

export const ContactPageAddressesHeader = styled.h2`
    font-weight: 700;
    font-size: clamp(20px, 10px + 1vw, 22px);
    color: var(--color-main-gray);
`

export const ContactPageAddresses = styled.div`
    display: grid;
    gap: 20px;
`

export const ContactPageAddress = styled.div`
    display: flex;
    gap: 10px;
    font-size: clamp(16px, 8px + 1vw, 18px);
    font-weight: 400;
    color: var(--color-light-gray);
`


export const ContactPageAddressSVG = styled(LocationSVG)`
    width: 24px;
    height: 24px;
    object-fit: contain;
    fill: var(--color-aquamarine);
`


export const ContactPageReviewsWrapper = styled.div`
    display: grid;
    gap: 30px;
    width: 100%;
`

export const ContactPageReviewsContainer = styled.div`
    display: grid;
    gap: 15px;
    width: 100%;
`

export const ContactPageReviewsHeader = styled.h2`
    font-weight: 700;
    font-size: clamp(20px, 10px + 1vw, 22px);
    color: var(--color-main-gray);
`

export const ContactPageReviewsButtons = styled.div`
    display: flex;
    gap: 15px;
    width: 100%;
`

export const ContactPageReviewsButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    background-color: #fff;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 12px 24px;
    width: min(184px, 100%);
    max-height: 75px;

    cursor: pointer;
`

export const ContactPageGisSVG = styled(GisSVG)`
    width: 100%;

    height: 100%;
    object-fit: cover;
`

export const ContactPageYandexSVG = styled(YandexSVG)`
    width: 100%;

    height: 100%;
    
    object-fit: contain;
`

