"use client"
import styled from "styled-components"

import TwitterSVG from "@/services/contacts/public/twitter.svg"
import YoutubeSVG from "@/services/contacts/public/youtube.svg"
import InstagramSVG from "@/services/contacts/public/instagram.svg"
import VKSVG from "@/services/contacts/public/vk.svg"
import FacebookSVG from "@/services/contacts/public/facebook.svg"

import EmailSVG from "@/services/contacts/public/email.svg"
import PhoneCallSVG from "@/services/contacts/public/phone-call.svg"
import LocationSVG from "@/services/contacts/public/location.svg"



export const ContactPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: clamp(40px, 20px + 3vw, 80px);
    width: 100%;
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
    
    @media (min-width: 1280px) {
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
    gap: clamp(10px, 5px + 2vw, 27px);
    flex-wrap: wrap;
    
`

export const ContactPageSocialsText = styled.span`
    font-weight: 500;
    font-size: clamp(16px, 8px + 1vw, 18px);
    color: #4f4f4f;
`

export const ContactPageSocialsLinksContainer = styled.div`
    display: flex;  
    gap: 10px;
`
export const ContactPageSocialsLink = styled.a`
    display: block;
    width: 24px;
    height: 24px;
`

export const ContactPageTwitterLinkSVG = styled(TwitterSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: var(--color-aquamarine);
`
export const ContactPageYoutubeLinkSVG = styled(YoutubeSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: var(--color-aquamarine);
`
export const ContactPageInstagramLinkSVG = styled(InstagramSVG)`
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
export const ContactPageFacebookLinkSVG = styled(FacebookSVG)`
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
    justify-content: space-between;
    gap: 20px;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`
export const ContactPageContactInformationContactWrapper = styled.span`
    display: grid;
    gap: 10px;
`
export const ContactPageContactInformationContact = styled.span`
    font-size: 20px;
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

