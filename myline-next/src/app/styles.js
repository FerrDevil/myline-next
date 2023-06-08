"use client"
import Link from "next/link"
import styled from "styled-components"


export const NotFoundMain = styled.main`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    gap: 30px;
    overflow: hidden;
    text-align: center;
`

export const NotFoundErrorHeader = styled.h1`
    font-weight: 500;
    font-size: clamp(100px, 50px + 6vw, 200px);
    line-height: 115%;
    text-transform: uppercase;

    color: var(--color-main-gray);
`

export const NotFoundErrorMessage = styled.p`
    font-weight: 500;
    font-size: clamp(16px, 8px + 1vw, 22px);
    line-height: 135%;

    text-transform: uppercase;

    color: var(--color-light-gray);
`

export const NotFoundErrorAdditionalMessage = styled.p`
    font-weight: 400;
    font-size: clamp(16px, 8px + 1vw, 22px);
    line-height: 135%;

    display: flex;
    align-items: center;
    text-align: center;

    color: #8A8A8A;
`

export const NotFoundBackLink = styled.button`
    font-weight: 600;
    font-size: clamp(14px, 7px + 1vw, 16px);
    line-height: 113%;

    letter-spacing: 0.01em;

    color: #FFFFFF;
    padding: clamp(10px, 5px + 2vw, 30px) 80px;
    background: var(--color-aquamarine);
    border-radius: 8px;

    border: 1px solid transparent;
    cursor: pointer;
`

