"use client"
import styled from "styled-components"


import TechnologiesSVG from "@/app/[lang]/about/public/technologies.svg"
import TimeSVG from "@/app/[lang]/about/public/time.svg"
import LikeSVG from "@/app/[lang]/about/public/like.svg"
import JoySVG from "@/app/[lang]/about/public/joy.svg"
import Image from "next/image"


export const AboutPageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    width: 100%;
    
    padding-block: clamp(40px, 20px + 3vw, 80px) 20px;
    gap: 40px;
    @media (max-width: 1366px) {
        display: flex;
        flex-direction: column;
        
    }
`

export const AboutPageMainContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(25px, 13px + 1vw, 30px);
    height: 100%;
    
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
    height: 100%;
`

export const AboutPageDescriptions = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(10px, 5px + 1vw, 20px);
    padding-inline-end: 40px;
    
`

export const AboutPageDescription = styled.p`
    font-size: clamp(16px, 8px + 1vw, 18px);
    font-weight: ${props => props.$isBold ? 500 : 400};
    color: var(--color-light-gray);
`

export const AboutPageDecriptionList = styled.ul`
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
    display: ${props => props.$isMobile ? "none" : "flex" };
    flex-direction: column;
    align-items: flex-start;
    isolation: isolate;
    height: 100%;

    @media (max-width: 1366px) {
        min-height: 200px;
        display: ${props => props.$isMobile ? "flex" : "none" };
    }
    @media (max-width: 768px) {
        min-height: 250px;
        
    }
`

export const AboutPageCallMeButton = styled.button`
    font-size: clamp(14px, 7px + 1vw, 16px);
    background-color: var(--color-aquamarine);
    color: #404342;
    text-align: center;
    padding: clamp(20px, 10px + 1vw, 30px) 0;
    border-radius: 4px;
    font-weight: 600;
    border: 1px solid transparent;
    transition: background-color 0.3s, border-color 0.3s;
    max-width: 360px;
    width: 100%;
    cursor: pointer;
    &:hover, &:focus-visible, &:active{
        outline: 1px solid transparent;
        background-color: #fff;
        border-color: var(--color-aquamarine);
    }
    @media (max-width: 768px) {
        max-width: unset; 
    }
` 

export const AboutPageAlignerBGWrapper = styled.div`
    position: absolute;
    
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    user-select: none;
    
    @media (min-width: 1366px) {
        max-height: 300px;
        top: 0;
        
    }

    @media (max-width: 1366px) {
        width: 50%;
        bottom: 0;
        
    }
    @media (max-width: 600px) {
        width: unset;
    }
`
export const AboutPageAlignerBG = styled(Image).attrs({
    width: 0,
    height: 0,
    sizes: "100vw",
    src: "/images/aligner-bg.png",
    loading: "eager",
    alt: "bgAligner"
})`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: visible;

`


export const AboutPageJoinUsWrapper = styled.div`
    display: flex;
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
    gap: clamp(10px, 5px + 2vw, 30px);
    
    @media (max-width: 620px) {
        grid-template-columns: unset;
       
        
    }
`

export const AboutPageCard = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
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
    width: clamp(70px, 35px + 4vw, 80px);
    height: clamp(70px, 35px + 4vw, 80px);
    aspect-ratio: 1;
    border-radius: 1000vw;
    background-color: var(--color-aquamarine);
    padding: 25px;
`

export const TechnologiesIconSVG = styled(TechnologiesSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #fff;
`
export const TimeIconSVG = styled(TimeSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: var(--color-aquamarine);
`
export const LikeIconSVG = styled(LikeSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #fff;
`
export const JoyIconSVG = styled(JoySVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #fff;
`


export const AboutPageCardHeader = styled.h2`
    font-size: clamp(20px, 10px + 1vw, 22px);
    font-weight: 700;
    color: var(--color-main-gray);
`

export const AboutPageCardDescription = styled.p`
    font-size: clamp(16px, 8px + 1vw, 18px);
    font-weight: 400;
    color: var(--color-light-gray);
`



