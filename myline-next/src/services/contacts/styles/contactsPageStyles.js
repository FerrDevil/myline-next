"use client"
import styled from "styled-components"


import YoutubeSVG from "@/services/contacts/public/youtube.svg"
import VKSVG from "@/services/contacts/public/vk.svg"
import FacebookSVG from "@/services/contacts/public/facebook.svg"

import ViberSVG from "@/public/viber.svg"
import TelegramSVG from "@/public/telegram.svg"
import WhatsAppSVG from "@/public/whatsapp.svg"

import EmailSVG from "@/services/contacts/public/email.svg"
import PhoneCallSVG from "@/services/contacts/public/phone-call.svg"
import TelephoneSVG from "@/services/contacts/public/telephone.svg"
import LocationSVG from "@/services/contacts/public/location.svg"



export const ContactPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: clamp(40px, 20px + 3vw, 80px);
    width: 100%;
    height: 100%;
`

export const ContactPageHeader = styled.h1`
    font-size: clamp(30px, 15px + 3vw, 60px);
    font-weight: 700;
    text-transform: uppercase;
    color: #404342;
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
    text-decoration: ${props => props.$isLink? "underline": "none"};
    transition: text-decoration 0.3s;
`

export const ContactPageSocialsLinksContainer = styled.div`
    display: flex;  
    flex-direction: row;
    align-items: center;
    gap: 6px;
`

export const ContactPageSocialsLinks = styled.a`
    display: flex;  
    flex-direction: row;
    align-items: center;
    gap: clamp(5px, 1vw, 15px);
    flex-wrap: wrap;

    &:hover > span, &:focus-visible > span, &:active > span{
        text-decoration: none;
    }
`

export const ContactPageSocialsLink = styled.div`
    display: block;
    width: 24px;
    height: 24px;
`



export const ContactPageYoutubeLinkSVG = styled(YoutubeSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: var(--color-aquamarine);
`

export const ContactPageVKLinkSVG = styled(VKSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: var(--color-aquamarine);
`

export const ContactPageViberSVG = styled(ViberSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: var(--color-aquamarine);
`

export const ContactPageTelegramSVG = styled(TelegramSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: var(--color-aquamarine);
`
export const ContactPageWhatsAppSVG = styled(WhatsAppSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
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
    color: #404342;
    white-space: nowrap;
    display: flex;
    gap: 5px;
`

export const ContactPageContactInformationText = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: #4f4f4f;
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

export const ContactPageFreePhoneCall = styled.button`
    border: 2px solid var(--color-aquamarine);
    background-color: transparent;
    color: var(--color-aquamarine);
    font-weight: 600;
    font-size: 16px;
    padding: 20px 50px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover, &:focus-visible, &:active{
        outline: 1px solid transparent;
        background-color: var(--color-aquamarine);
        color: #fff;
    }
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
    color: #404342;
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
    color: #4f4f4f;
`


export const ContactPageAddressSVG = styled(LocationSVG)`
    width: 24px;
    height: 24px;
    object-fit: contain;
    fill: var(--color-aquamarine);
`

