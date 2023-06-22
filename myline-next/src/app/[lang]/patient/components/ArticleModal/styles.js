"use client"

import Link from "next/link"
import styled from "styled-components"

export const ArticleModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 2px 2px 10px 0px #00000026;
    text-align: center;
    max-width: 700px;
    width: 100%;
    
    user-select: none;
    @media (max-width: 550px) {
        
    }
`


export const ArticleModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    gap: 25px;
    user-select: text;
`

export const ArticleModalHeader = styled.h2`
    font-size: clamp(16px, 9px + 1vw, 22px);
    font-weight: 700;
    color: var(--color-main-gray);
    width: 100%;
    padding: clamp(15px, 8px + 1vw, 25px);
    border-bottom: 1px solid #D9D9D9;
`

export const ArticleModalContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(10px, 5px + 1vw, 20px);
    font-size: clamp(12px, 6px + 1vw, 16px);
    font-weight: 400;
    color: var(--color-light-gray);
    text-align: justify;
    
`

export const ArticleModalParagraph = styled.p`
    width: 100%;
    display: block;
    
`

export const ArticleModalOrderedList = styled.ol`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 1em;
    gap: clamp(10px, 5px + 1vw, 20px);
    
`

export const ArticleModalUnorderedList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 1em;
    gap: clamp(10px, 5px + 1vw, 20px);
    
`


