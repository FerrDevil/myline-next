"use client"
import Link from "next/link"
import styled from "styled-components"

export const ProfileLayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding-top: clamp(40px, 20px + 3vw, 80px);
    gap: 20px;
`

export const ProfileLayoutHeader = styled.h1`
    font-size: clamp(30px, 15px + 5vw, 60px);
    font-weight: 700;
    color: var(--color-main-gray);
    text-transform: uppercase;
    
`


export const ProfileLayoutDescription = styled.p`
    font-size: clamp(16px, 8px + 2vw, 18px);
    font-weight: 500;
    max-width: 55ch;
    color: var(--color-light-gray);
`

export const ProfileLayoutLinksWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: clamp(5px, 1vw, 10px);
    min-width: 100%;
`

export const ProfileLayoutLink = styled(Link)`
    display: block;
    font-size: clamp(16px, 8px + 2vw, 18px);
    font-weight: 500;
    color: var(--color-light-gray);
    background-color: ${props => props.$isActive ? "var(--color-aquamarine)" : "#fff"};
    padding: clamp(15px, 8px + 1vw, 20px) clamp(15px, 8px + 1vw, 60px);
    border-radius: 4px;
    
`

export const ProfileLayoutPageWrapper = styled.div`
    padding: 10px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`