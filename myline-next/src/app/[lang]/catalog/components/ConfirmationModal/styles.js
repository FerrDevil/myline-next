"use client"

import Link from "next/link"
import styled from "styled-components"

export const ConfirmationModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 2px 2px 10px 0px #00000026;
    text-align: center;
    
    user-select: none;
    @media (max-width: 550px) {
        width: 100%;
    }
`


export const ConfirmationModalHeader = styled.h2`
    font-size: clamp(20px, 10px + 1vw, 22px);
    font-weight: 700;
    color: var(--color-main-gray);
    width: 100%;
    padding: 25px;
    border-bottom: 1px solid #D9D9D9;
    text-align: left;
`

export const ConfirmationModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    gap: 25px;
`

export const ConfirmationModalDescriptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const ConfirmationModalDescription = styled.p`
    display: block;
    font-size: clamp(16px, 8px + 1vw, 18px);
    font-weight: 400;
    color: var(--color-light-gray);
    text-align: left;
    max-width: 41ch;
`

export const ConfirmationModalRemark = styled.p`
    display: block;
    font-size: clamp(16px, 8px + 1vw, 18px);
    font-weight: 500;
    font-style: italic;
    color: var(--color-light-gray);
    text-align: left;
    max-width: 41ch;
`

export const ProcedeButtons = styled.div`
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

export const ProcedeLink = styled(Link)`
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

export const CloseButton = styled.button`
    white-space: nowrap;
    font-size: 16px;
    font-weight: 600;
    color: var(--color-aquamarine);
    text-align: center;

    background-color: transparent;

    padding: clamp(15px, 8px + 1vh, 20px);

    border: 2px solid var(--color-aquamarine);
    border-radius: 4px;
    
    transition: background-color 0.3s, color 0.3s;

    cursor: pointer;
    &:hover, &:focus-visible{
        outline: 1px solid transparent;
        background-color: var(--color-aquamarine);
        color: #fff;
    }

`