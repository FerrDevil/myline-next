"use client"

import Link from "next/link"
import styled from "styled-components"
import DocumentSVG from "@/public/document.svg"


export const DocumentsModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 2px 2px 10px 0px #00000026;
    text-align: center;
    
    user-select: none;
    width: 100%;
    max-width: 700px;
`


export const DocumentsModalHeader = styled.h2`
    font-size: 22px;
    font-weight: 700;
    color: var(--color-main-gray);
    width: 100%;
    padding: 25px;
    border-bottom: 1px solid #D9D9D9;
    text-align: left;
`

export const DocumentsModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    gap: 20px;
    text-align: unset;
`


export const DocumentsModalLink = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: clamp(10px, 5px + 1vw, 15px);
    font-size: clamp(14px, 7px + 1vw, 18px);
    font-weight: 400;
    color: var(--color-light-gray);
    text-decoration: underline;
    transition: text-decoration 0.3s;
    
    &:hover, &:focus-visible, &:active{
        text-decoration: none;
    }
`

export const DocumentsModalIconWrapper = styled.div`
    width: 30px;
    aspect-ratio: 1;
`

export const DocumentsModalIconSVG = styled(DocumentSVG)`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const AuthorizationButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: clamp(10px, 5px + 3vw, 20px);
    width: 100%;
    @media (max-width: 550px) {
        
        flex-direction: column;
    }
    & > *{
        height: 100%;
        flex-basis: 100%;
        width: 100%;
    }
`

export const LoginLink = styled(Link)`
    white-space: nowrap;
    font-size: 16px;
    background-color: var(--color-aquamarine);
    color: var(--color-main-gray);
    text-align: center;
    padding: clamp(15px, 8px + 1vh, 20px);
    border-radius: 4px;
    font-weight: 600;
    border: 1px solid transparent;
    transition: background-color 0.3s, border-color 0.3s;
    &:hover, &:focus-visible{
        outline: 1px solid transparent;
        background-color: transparent;
        border-color: var(--color-aquamarine);
    }
`

export const RegisterLink = styled(Link)`
    white-space: nowrap;
    font-size: 16px;
    border: 2px solid var(--color-aquamarine);
    background-color: transparent;
    color: var(--color-aquamarine);
    text-align: center;
    padding: clamp(15px, 8px + 1vh, 20px);
    border-radius: 4px;
    font-weight: 600;
    transition: background-color 0.3s, color 0.3s;
    &:hover, &:focus-visible{
        outline: 1px solid transparent;
        background-color: var(--color-aquamarine);
        color: #fff;
    }

`