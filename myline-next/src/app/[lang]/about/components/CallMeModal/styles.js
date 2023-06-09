"use client"
import styled from "styled-components"

import PhoneCallSVG from "@/app/[lang]/about/public/phone-call.svg"

export const AboutPageCallMeWrapper = styled.button`
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
    transform: translateY(-50%) ;
    
    position: fixed;

    background-color: #CE5250;
    border-radius: 8px 0px 0px 8px;
    right: 0;
    top: 50%;
    
    padding: 10px;
    border: 1px solid transparent;
    cursor: pointer;
`

export const AboutPageCallMeText = styled.span`
    font-size: clamp(10px, 7px + 1vw, 16px);
    font-weight: 600;
    line-height: 120%;
    
    text-transform: uppercase;
    z-index: 1;
    writing-mode: vertical-rl;
    transform: rotate(-180deg);
    color: #FFFFFF;
`

export const AboutPageCallMeSVG = styled(PhoneCallSVG)`
    display: block;
    width: 100%;
    aspect-ratio: 1;
    fill: #fff;
`

export const JoinUsForm = styled.form`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 2px 2px 10px 0px #00000026;
    text-align: center;
    width: 500px;
    user-select: none;
    @media (max-width: 510px) {
        width: 100%;
    }
`

export const JoinUsFormHeader = styled.h2`
    font-size: 22px;
    font-weight: 700;
    color: var(--color-main-gray);
    width: 100%;
    padding: 25px;
    border-bottom: 1px solid #D9D9D9;
`

export const JoinUsFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    gap: 15px;
`

export const JoinUsFormSubmitButton = styled.button`
    background-color: var(--color-aquamarine);
    border: 1px solid var(--color-aquamarine);
    padding: 20px 90px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
    &:focus-visible, &:hover, &:active{
        background-color: #fff;
    }
    &:disabled{
        background-color: #15b8bc;
        cursor: default;
    }
`