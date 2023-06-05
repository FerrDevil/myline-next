"use client"
import styled from "styled-components"
import Link from "next/link"

export const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    inset: 0;
    position: absolute;
    object-fit: cover;
    margin: auto;
    z-index: -1000;
    user-select: none;
    pointer-events: none;
    filter: brightness(60%);
`

export const MainPageContainer = styled.div`
    width: 80svw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    gap: 30px;
`

export const MainPageHeader = styled.h1`
    font-size: 70px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    max-width: 28ch;
`

export const MainPageStatistics = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    width: 100%;
    gap: 20px;
`

export const MainPageStatistic = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const MainPageStatisticCount = styled.span`
    color: #51CACD;
    font-size: 50px;
    font-weight: 400;
    text-transform: uppercase;

`

export const MainPageStatisticDescription = styled.span`
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    max-width: 28ch;
`


export const AuthorizationButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

`

export const RegisterLink = styled(Link)`
    
    font-size: 16px;
    background-image: linear-gradient(266.6deg, #61DAFB 0%, #48D8FF 27.6%, #0ACAFF 47.92%, #48D8FF 65.1%, #61DAFB 100%);
    box-shadow: 0px 25px 45px -20px rgba(97, 218, 251, 0.65), 0px 3px 0px 1px rgba(97, 218, 251, 0.5), inset 0px 0px 10px rgba(255, 255, 255, 0.35);
    color: #333;
    text-align: center;
    padding: 30px 80px;
    border-radius: 4px;
    font-weight: 600;
    border: 1px solid transparent;
    transition: background-image 0.3s;
    &:hover, &:focus-visible{
        outline: 1px solid transparent;
        background-image: linear-gradient(266.6deg, #00C2FF, #00C2FF);
        
    }
`

export const LoginLink = styled(Link)`
    font-size: 16px;
    border: 2px solid #61DAFB;
    background-color: transparent;
    color: #61DAFB;
    text-align: center;
    padding: 30px 80px;
    border-radius: 4px;
    font-weight: 600;
    transition: background-color 0.3s, color 0.3s;
    &:hover, &:focus-visible{
        outline: 1px solid transparent;
        background-color: #61DAFB;
        color: #fff;
    }

`