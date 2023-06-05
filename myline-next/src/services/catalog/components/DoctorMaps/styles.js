"use client"

import { Map } from "@pbe/react-yandex-maps"
import Image from "next/image"
import styled from "styled-components"

export const YandexMapWrapper = styled.div`
    display: block;
    max-width: 100%;
    border-radius: 8px;
    overflow: hidden;

    @media (max-width: 600px) {
        height: 100%;
    }
    
`

export const YandexMap = styled(Map).attrs(() => ({
    width: 0,
    height: 0,
}))`
    display: block;
    object-fit: contain;
    max-width: 100%;
    height: 600px;
    max-height: 600px;
`

export const DoctorWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
    gap: 15px;
`
export const DoctorImageWrapper = styled.div`
    
    max-width: 80px;
    width: 100%;
    aspect-ratio: 2 / 3;

    border-radius: 4px;
    background-color: #ccc;
    
    overflow: hidden;
`

export const DoctorImage = styled(Image).attrs(() => ({
    width: 0,
    height: 0,
    sizes: "100vw",
    alt: "mainSliderImage"
}))`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const DoctorContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    
    overflow: hidden;
`

export const DoctorName = styled.h2`
    font-size: clamp(20px, 10px + 1vw, 22px);
    line-height: 115%;
    font-weight: 700;
    color: #404342;
    margin-bottom: 5px;
`

export const DoctorAddress = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 135%;
    color: #4F4F4F;
    margin-bottom: 10px;
`

export const DoctorChooseButton = styled.button`
    white-space: nowrap;
    font-size: clamp(14px, 7px + 1vw, 16px);
    font-weight: 600;
    width: 100%;
    color: #404342;
    padding: 10px 40px;
    background-color: var(--color-aquamarine);
    border: 1px solid transparent;
    border-radius: 4px;
    transition: background-color 0.3s, border-color 0.3s;
    &:hover,&:focus-visible, &:active{
        border-color: var(--color-aquamarine);
        background-color: transparent;
    }    
    cursor: pointer;
`