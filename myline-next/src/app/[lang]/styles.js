"use client"
import styled from "styled-components"
import Link from "next/link"

export const VideoBackground = styled.video.attrs(() => ({
    src: "/videos/background.mp4"
}))`
    width: 100%;
    height: 100%;
    inset: 0;
    position: absolute;
    object-fit: cover;
    z-index: -1000;
    user-select: none;
    pointer-events: none;
    filter: brightness(60%);
    background-color: #f5f5f5;
`

export const MainPageContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    gap: 30px;
    padding-block: 20px;
    overflow: hidden;
`

export const MainPageHeader = styled.h1`
    font-size: clamp(38px, 19px + 4vw, 70px);
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    max-width: 28ch;
`

export const MainPageStatistics = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: flex-start;
    justify-content: center;
    
    width: 100%;
    gap: 30px;
    @media (max-width: 900px) {
        grid-auto-flow: row;
        grid-template-columns: 1fr 1fr;
        
    }
   
`

export const MainPageStatistic = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 900px) {
        text-align: center;
        align-items: center;
    }
`

export const MainPageStatisticCount = styled.span`
    color: var(--color-aquamarine);
    font-size: clamp(32px, 16px + 3vw, 50px);
    font-weight: 500;
    text-transform: uppercase;

`

export const MainPageStatisticDescription = styled.span`
    color: #fff;
    font-size: clamp(12px, 6px + 1vw, 14px);
    font-weight: 300;
    max-width: 28ch;
`


export const AuthorizationButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: clamp(10px, 5px + 3vw, 20px);
    @media (max-width: 900px) {
        width: 100%;
        flex-direction: column;
    }
    & > *{
        height: 100%;
        flex-basis: 100%;
        width: 100%;
    }
`

export const RegisterLink = styled(Link)`
    white-space: nowrap;
    font-size: 16px;
    background-color: var(--color-aquamarine);
    color: #333;
    text-align: center;
    padding: clamp(20px, 10px + 1vh, 30px) 80px;
    border-radius: 4px;
    font-weight: 600;
    border: 1px solid transparent;
    transition: background-color 0.3s;
    &:hover, &:focus-visible{
        outline: 1px solid transparent;
        background-color: #00C2FF;
        
    }
`

export const LoginLink = styled(Link)`
    white-space: nowrap;
    font-size: 16px;
    border: 2px solid var(--color-aquamarine);
    background-color: transparent;
    color: var(--color-aquamarine);
    text-align: center;
    padding: clamp(20px, 10px + 1vh, 30px) 80px;
    border-radius: 4px;
    font-weight: 600;
    transition: background-color 0.3s, color 0.3s;
    &:hover, &:focus-visible{
        outline: 1px solid transparent;
        background-color: var(--color-aquamarine);
        color: #fff;
    }

`