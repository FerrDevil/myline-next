"use client"
import styled from "styled-components"
import Image from "next/image"

import YoutubeSVG from "./public/youtube.svg"
import ZoomInSVG from "@/app/[lang]/media/public/zoom-in.svg"

export const MediaPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: clamp(40px, 20px + 3vw, 80px);
    padding-bottom: 20px;
    gap: 20px;
    width: 100%;
    

    @media (min-width: 1000px) {
        width: 100%;
        height: 100%;
    }
`
export const MediaPageHeader = styled.h2`
    font-size: clamp(30px, 15px + 3vw, 60px);
    font-weight: 700;
    text-transform: uppercase;
    color: var(--color-main-gray);
`

export const MediaPageVideoBlock = styled.div`
    display: flex;
    flex-direction: column;
    
    column-gap: clamp(30px, 15px + 5vw, 100px);
    row-gap: 30px;
    @media (min-width: 1000px) {
        display: grid;
        grid-template-columns: 3fr 2fr;

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
    color: var(--color-light-gray); 
`

export const YouTubeLink = styled.a`
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    background-color: var(--color-aquamarine);
    color: var(--color-main-gray);
    text-align: center;
    padding: 30px 0;
    width: 100%;
    justify-content: center;
    max-width: 320px;
   
    border-radius: 4px;
    font-weight: 600;
    border: 1px solid transparent;
    transition: background-color 0.3s, border-color 0.3s;
    &:hover, &:focus-visible, &:active{
        outline: 1px solid transparent;
        border-color: var(--color-aquamarine);
        background-color: transparent;
        
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
    width: 100%;
    
`

export const SliderItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    gap: 10px;

`

export const SliderImageWrapper = styled.div`
    position: relative;
    width: 100%;
    &:hover > button, &:focus-visible > button, &:active > button{
        opacity: 1;
        pointer-events: all;
        user-select: all;
    }

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
      
      border-radius: 6px;
  `

export const SliderImageFullViewButton = styled.button`
    display: grid;
    place-items: center;
    position: absolute;
    inset: 0;
    opacity: 0;
    pointer-events: none;
    user-select: none;
    transition: opacity 0.5s;

    background-color: #00000066;
    border: 1px solid transparent;

    cursor: pointer;
  `


export const ZoomInIconSVG = styled(ZoomInSVG)`
    width: 60px;
    height: 60px;
    object-fit: cover;

`

export const SliderItemTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
    width: 100%;
    max-width: 100%;
    height: 100%;

`

export const SliderItemTitle = styled.h2`
    display: block;
    max-width: 33ch;
    color: var(--color-main-gray);
    font-size: clamp(10px, 8px + 1vw, 18px);
    font-style: italic;
    font-weight: 600;

`

export const SliderItemDescription = styled.p`
    display: block;
    color: var(--color-light-gray);
    font-size: clamp(10px, 8px + 1vw, 18px);
    font-style: italic;
`