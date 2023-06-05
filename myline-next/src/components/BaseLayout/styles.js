"use client"
import styled from "styled-components"
import Image from "next/image"


export const DogGifWrapper = styled.div`
    display: block;
    position: fixed;
    bottom: 0;
    right: 0;
    
    width: clamp(133px, 66px + 10vw, 206px);
    aspect-ratio: 1;
    pointer-events: none;
    user-select: none;
    @media (max-width: 600px) {
        display: none;
    }
`

export const DogGif = styled(Image).attrs(() => ({
    width: 0,
    height: 0,
    sizes: "100vw",
    priority: true,
    loading: "eager",
    alt: "dogGif"
}))`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    

    
`