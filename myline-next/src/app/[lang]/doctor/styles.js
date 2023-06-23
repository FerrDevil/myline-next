"use client"
import styled from "styled-components"


import ScanSVG from "@/app/[lang]/doctor/public/scan.svg"
import ScheduleSVG from "@/app/[lang]/doctor/public/schedule.svg"
import AlignerSVG from "@/app/[lang]/doctor/public/aligner.svg"
import DeliverySVG from "@/app/[lang]/doctor/public/delivery.svg"
import Image from "next/image"


export const AboutPageContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    padding-block: clamp(40px, 20px + 3vw, 80px) 20px;
    gap: clamp(40px, 20px + 3vw, 80px);
    @media (max-width: 1366px) {
        flex-direction: column;
        gap: 40px;
    }
`

export const AboutPageMainContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(25px, 13px + 1vw, 30px);
    
`
export const AboutPageHeader = styled.h1`
    font-size: clamp(30px, 15px + 5vw, 60px);
    font-weight: 700;
    color: var(--color-main-gray);
    text-transform: uppercase;
    
`

export const AboutPageMainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(25px, 13px + 1vw, 30px);

`

export const AboutPageDescriptions = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(10px, 5px + 1vw, 20px);
    
`

export const AboutPageDescription = styled.p`
    font-size: clamp(16px, 8px + 1vw, 18px);
    font-weight: ${props => props.$isBold ? 500 : 400};
    color: var(--color-light-gray);
`

export const AboutPageDecriptionList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: clamp(16px, 8px + 1vw, 18px);
    font-weight: ${props => props.$isBold ? 500 : 400};
    list-style: none;
    color: var(--color-light-gray);
    margin-left: 1em;
    & > li::before{
        content: "\\2022";  
        color: var(--color-light-gray); 
        font-weight: bold; 
        display: inline-block; 
        width: 1em; 
        margin-left: -1em;
    }
`

export const AboutPageLinkWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    isolation: isolate;
`


export const AboutPageJoinUsWrapper = styled.div`
    display: ${props => props.$isMobile ? "none": "flex"};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 2px dashed var(--color-aquamarine);
    gap: clamp(30px, 15px + 2vw, 50px);
    padding: clamp(15px, 8px + 1vw, 30px);
    border-radius: 10px;
    width: 100%;
    @media (max-width: 1250px) {
        flex-direction: column;
    }
    @media (max-width: 1366px) {
        display: ${props => props.$isMobile ? "flex": "none"};
    }
    
`
export const AboutPageJoinUsMessage = styled.div`
    font-weight: 400;
    font-size: clamp(18px, 9px + 1vw, 22px);
    line-height: 115%;

    color: var(--color-main-gray);

    display: flex;
    flex-direction: column;
    align-items: center;

    & > p {
        white-space: nowrap;
    }
`

export const AboutPageJoinUsLogoWrapper = styled.div`
    width: 100%;
    aspect-ratio: 2 / 1;
`

export const AboutPageJoinUsLogo = styled(Image).attrs({
    width: 0,
    height: 0,
    sizes: "100vw",
    src: "/myline-logo.png",
    alt: "joinUsLogo"
})`
    width: 100%;
    height: 100%;
    object-fit: contain;
`




export const AboutPageCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(10px, 5px + 1vw, 30px);
    
    @media (max-width: 620px) {
        grid-template-columns: unset; 
    }
`

export const AboutPageCard = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    background-color: ${props => props.$isAlternated ? "var(--color-aquamarine)" : "#fff" };
    & > div {
        background-color: ${props => props.$isAlternated ? "#fff" : "var(--color-aquamarine)" };
    }
    & > h2 {
        color: ${props => props.$isAlternated ? "#fff" : "var(--color-main-gray)" };
    }
    & > p {
        color: ${props => props.$isAlternated ? "#fff" : "var(--color-light-gray)" };
    }
`

export const AboutPageCardIconWrapper = styled.div`
    width: clamp(70px, 35px + 2vw, 80px);
    height: clamp(70px, 35px + 2vw, 80px);
    aspect-ratio: 1;
    border-radius: 1000vw;
    background-color: var(--color-aquamarine);
    padding: 25px;
`

export const ScanIconSVG = styled(ScanSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #fff;
`
export const ScheduleIconSVG = styled(ScheduleSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: var(--color-aquamarine);
`
export const AlignerIconSVG = styled(AlignerSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #fff;
`
export const DeliveryIconSVG = styled(DeliverySVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #fff;
`


export const AboutPageCardHeader = styled.h2`
    font-size: clamp(20px, 1vw, 22px);
    font-weight: 700;
    color: var(--color-main-gray);
`

export const AboutPageCardDescription = styled.p`
    font-size: clamp(16px, 1vw, 18px);
    font-weight: 400;
    color: var(--color-light-gray);
`



