"use client"
import styled from "styled-components"
import Image from "next/image"
import TechnologiesSVG from "@/app/[lang]/about/public/technologies.svg"
import TimeSVG from "@/app/[lang]/about/public/time.svg"
import LikeSVG from "@/app/[lang]/about/public/like.svg"
import JoySVG from "@/app/[lang]/about/public/joy.svg"


export const NewsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding-block: clamp(40px, 20px + 3vw, 80px) 20px;
    row-gap: 30px;
    @media (max-width: 1000px){
        display: grid;
        max-height: 100%;
    }
`
export const NewsPageHeader = styled.h2`
    font-size: clamp(30px, 15px + 5vw, 60px);
    font-weight: 700;
    text-transform: uppercase;
    color: var(--color-main-gray);
    
`

export const NewsPageDescriptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

`
export const NewsPageDescription = styled.p`
    font-weight: 400;
    font-size: clamp(16px, 8px + 1vw, 18px);
    color: var(--color-light-gray); 
`

export const NewsPageAddition = styled.p`
    font-size: clamp(12px, 6px + 1vw, 14px);
    font-weight: 300;
    max-width: 53ch;
    color: var(--color-light-gray); 
`

export const NewsPageLinkWrapper = styled.div`
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    box-shadow: 2px 2px 10px 0px #00000026;

`

export const NewsPageLinkImageWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    
    margin: auto;
    @media (min-width: 1000px) {
        max-height: 350px;
    }
`

export const NewsPageLinkImage = styled(Image).attrs(() => ({
    width: 0,
    height: 0,
    sizes: "100vw",
    alt: "sliderImage"
  }))`
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
  `

export const NewsPageLinkInsidesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    gap: 15px;
    padding: 0 20px 20px 20px;
`

export const NewsPageLinkTitle = styled.h2`
    font-weight: 700;
    font-size: clamp(20px, 10px + 1vw, 22px);
    color: var(--color-main-gray); 
   
`

export const NewsPageLinkSocialsLink = styled.button`
    font-weight: 600;
    font-size: clamp(14px, 7px + 1vw, 16px);
    border: 1px solid transparent;
    background-color: transparent;
    text-align: left;
    align-self: flex-start;
    color: var(--color-aquamarine);

    cursor: pointer;
    &:hover, &:focus-visible, &:active{
        text-decoration: underline;
        outline: 1px solid transparent;
    } 
    
`


export const BenefitCards = styled.div`
    display: grid;
    
    gap: clamp(10px, 5px + 2vw, 30px);
    padding-bottom: 20px;
    

    
    @media (max-width: 1366px) {
        grid-template-columns: 1fr 1fr;
        
    }
    
    @media (min-width: 1366px) {
        grid-template-columns: repeat(4, 1fr);
        
    }
    @media (max-width: 620px) {
        grid-template-columns: unset;
       
        
    }
`

export const BenefitCard = styled.div`
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

export const BenefitCardIconWrapper = styled.div`
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


export const BenefitCardHeader = styled.h2`
    font-size: clamp(20px, 10px + 1vw, 22px);
    font-weight: 700;
    color: var(--color-main-gray);
`

export const BenefitCardDescription = styled.p`
    font-size: clamp(16px, 8px + 1vw, 18px);
    font-weight: 400;
    color: var(--color-light-gray);
`
