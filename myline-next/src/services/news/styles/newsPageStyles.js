"use client"
import styled from "styled-components"
import Image from "next/image"


export const NewsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding-top: 80px;
    row-gap: 30px;
    @media (max-width: 1000px){
        display: grid;
    }
`
export const NewsPageHeader = styled.h2`
    font-size: clamp(30px, 15px + 5vw, 60px);
    font-weight: 700;
    text-transform: uppercase;
    color: #404342;
    
`
export const NewsPageDescriptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

`
export const NewsPageDescription = styled.p`
    font-weight: 400;
    font-size: clamp(16px, 8px + 1vw, 18px);
    max-width: 53ch;
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
    max-height: 100%;
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
    gap: 15px;
    padding: 20px;
`

export const NewsPageLinkTitle = styled.h2`
    font-weight: 700;
    font-size: clamp(20px, 10px + 1vw, 22px);
    color: #404342; 
   
`

export const NewsPageLinkSocialsLink = styled.a`
    font-weight: 600;
    
    font-size: clamp(14px, 7px + 1vw, 16px);
    color: var(--color-aquamarine);
    &:hover, &:focus-visible, &:active{
        text-decoration: underline;
    } 
    
`