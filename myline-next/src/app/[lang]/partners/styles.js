"use client"
import styled from "styled-components"

export const PartnersPageWrapper = styled.div`
    
    display: grid;
    align-items: flex-start;
    width: 100%;
    max-height: 100%;
    padding-block: clamp(40px, 20px + 3vw, 80px) 20px;
    gap: 30px;
    
`
export const PartnersPageHeader = styled.h1`
    font-size: clamp(30px, 15px + 5vw, 60px);
    font-weight: 700;
    color: var(--color-main-gray);
    text-transform: uppercase;
    
`

export const PartnersPageDescription = styled.p`
    display: inline;
    font-size: clamp(16px, 8px + 1vw, 18px);
    font-weight: 500;
    color: var(--color-light-gray);
`

export const PartnersPageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    flex: 0 0 70%;
    gap: 30px;
    
`