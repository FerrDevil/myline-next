"use client"
import styled from "styled-components"
import Image from "next/image"

export const LanguageChangerWrapper = styled.div`
    display: ${props => props.$isInMenu ? "none" : "grid"};
    position: relative;
    @media (max-width: 768px) {
        display: ${props => props.$isInMenu ? "grid" : "none"};
        margin-bottom: -10px;
    }
`

export const LanguageChangerButton = styled.button`
    user-select: none;
    width: 120px;
    border: 1px solid transparent;
    background-color: transparent;
    display: flex;
    align-items: center;
    position: relative;
    gap: 10px;
    font-size: clamp(12px, 6px + 1vh, 16px);
    font-weight: 400;
    
    cursor: pointer;
    padding: 5px 10px;
    & > span {
        color: ${props => props.$shouldTextColorChange ? "#333" : "#fff"};
    }
`

export const LanguageChangerButtonImageWrapper = styled.div`
    width: clamp(18px, 9px + 1vh, 24px);
    aspect-ratio: 1;
`

export const LanguageChangerButtonImage = styled(Image).attrs(() => ({
    width: 0,
    height: 0,
    sizes: "100vw",
    priority: true,
    loading: "eager",
    alt: "languageIcon"
}))`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const LanguageChangerSelectContainer = styled.div`
    display: grid;
    width: 100%;
    position: absolute;
    top: 100%;
    background-color: #333;
    border-radius: 8px;
    opacity: ${props => props.$isShown? 1 : 0};
    pointer-events: ${props => props.$isShown? "all" : "none"};
    user-select: ${props => props.$isShown? "all" : "none"};
`