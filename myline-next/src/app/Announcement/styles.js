"use client"

import Image from "next/image"
import styled from "styled-components"

export const AnnouncementWrapper = styled.div`
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: fixed;
    inset: 0;
`

export const AnnouncementText = styled.span`
    font-size: clamp(20px, 10px + 2vw, 40px);
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;

`




export const AnnouncementImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    z-index: -1;

`

export const AnnouncementImage = styled(Image).attrs(() => ({
    width: 0,
    height: 0,
    alt: "family",
    sizes: "100vw"
}))`
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 600px) {
        display: none;
    }
    
`

export const AnnouncementMobileImage = styled(Image).attrs(() => ({
    width: 0,
    height: 0,
    alt: "family",
    sizes: "100vw"
}))`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    @media (min-width: 601px) {
        display: none;
    }
`