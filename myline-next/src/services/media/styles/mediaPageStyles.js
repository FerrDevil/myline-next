"use client"
import styled from "styled-components"
import Image from "next/image"

import YoutubeSVG from "@/services/media/public/youtube.svg"

export const MediaPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    padding-top: clamp(40px, 20px + 3vw, 80px);
    gap: 20px;
    

    @media (min-width: 1000px) {
        width: 100%;
        height: 100%;
    }
`
export const MediaPageHeader = styled.h2`
    font-size: clamp(30px, 15px + 3vw, 60px);
    font-weight: 700;
    text-transform: uppercase;
    color: #404342;
`

export const MediaPageVideoBlock = styled.div`
    display: flex;
    flex-direction: column;
    
    column-gap: clamp(30px, 15px + 5vw, 100px);
    row-gap: 30px;
    @media (min-width: 1000px) {
        display: grid;
        grid-template-columns: 1fr 1fr;

    }
`
export const MediaPageVideoBlockDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap:  clamp(25px, 13px + 1vw, 30px);
`
export const MediaPageVideoBlockDescriptionTexts = styled.section`
    display: grid;
    gap: clamp(10px, 5px + 1vw, 20px);
`
export const MediaPageVideoBlockDescriptionText = styled.p`
    font-weight: 400;
    font-size: clamp(16px, 8px + 1vw, 18px);
    max-width: 53ch;
    color: #4f4f4f; 
`

export const YouTubeLink = styled.a`
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    background-image: linear-gradient(266.6deg, #51CACD 0%, #48D8FF 27.6%, #0ACAFF 47.92%, #48D8FF 65.1%, #51CACD 100%);
    box-shadow: 0px 25px 45px -20px rgba(97, 218, 251, 0.65), 0px 3px 0px 1px rgba(97, 218, 251, 0.5), inset 0px 0px 10px rgba(255, 255, 255, 0.35);
    color: #404342;
    text-align: center;
    padding: 30px clamp(75px, 38px + 3vw, 80px);
   
    border-radius: 4px;
    font-weight: 600;
    border: 1px solid transparent;
    transition: background-image 0.3s;
    &:hover, &:focus-visible{
        outline: 1px solid transparent;
        background-image: linear-gradient(266.6deg, #00C2FF, #00C2FF);
        
    }
`
export const YouTubeLinkSVG = styled(YoutubeSVG)`
    width: 24px;
    aspect-ratio: 1;
    object-fit: contain;
`

export const MediaPageSliderBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    padding-bottom: 20px;
`

export const SliderImageWrapper = styled.div`
    width: 100%;
    height: 100%;
`
export const SliderImage = styled(Image).attrs(() => ({
    width: 0,
    height: 0,
    sizes: "100vw",
    alt: "sliderImage"
  }))`
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: 16 / 9;
      border-radius: 6px;
  `