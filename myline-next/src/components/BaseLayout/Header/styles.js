"use client"
import styled from "styled-components"

export const HeaderWrapper = styled.header`
    
    display: flex;
    justify-content: space-between;
    place-items: center;
    padding-inline: var(--page-padding-inline);
    width: 100%;
    height: var(--header-height);
    background-color: ${props => props.$shouldDisplayBackground ? "var(--color-bg)": "transparent"};
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    
`

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    gap: clamp(18px, 9px + 2vw, 20px);
    
`

export const DoctorLink = styled.a`
    font-size: clamp(14px, 7px + 1vw, 16px);
    border: 1px solid ${props => props.$shouldAlternate? "var(--color-main-gray)" : "var(--color-aquamarine)"};
    background-color: transparent;
    color: ${props => props.$shouldAlternate? "var(--color-main-gray)" : "var(--color-aquamarine)"};
    text-align: center;
    padding: 5px 20px;
    border-radius: 4px;
    font-weight: 400;
    white-space: nowrap;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    &:hover, &:focus-visible, &:active{
        outline: 1px solid transparent;
        border-color: ${props => props.$shouldAlternate? "var(--color-aquamarine)" : "transparent"};
        background-color: var(--color-aquamarine);
        color: #fff;
    }

`
