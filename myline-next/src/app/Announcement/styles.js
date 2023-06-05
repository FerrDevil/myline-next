"use client"

import Image from "next/image"
import styled from "styled-components"

export const AnnouncementWrapper = styled.div`
    position: fixed;
    inset: 0;
    background-color: #f5f5f5;
    
    z-index: 9999;
`

export const AnnouncementText = styled.span`
    position: absolute;
    left: 40%;
    top: 20%;
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;

`
export const AnnouncementSecondText = styled.span`
    position: absolute;
    left: 20%;
    bottom: 20%;
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;

`


export const AnnouncementLogoWrapper = styled.div`
    position: absolute;
    width: 20%;

    
    top: 45%;
    left: 20%;

`

export const AnnouncementLogo = styled(Image).attrs(() => ({
    width: 0,
    height: 0,
    alt: "dog",
    sizes: "100vw"
}))`
    width: 100%;
    height: 100%;
    object-fit: contain;
    
    
`

export const AnnouncementDogWrapper = styled.div`
    position: absolute;
    width: 50%;
    aspect-ratio: 1;
    
    bottom: 0;
    right: 0;

`

export const AnnouncementDog = styled(Image).attrs(() => ({
    width: 0,
    height: 0,
    alt: "dog",
    sizes: "100vw"
}))`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    
`