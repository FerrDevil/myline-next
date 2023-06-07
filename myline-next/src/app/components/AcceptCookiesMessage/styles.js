"use client"
import styled from "styled-components"

export const AcceptCookiesMessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-main-gray);
    font-size: clamp(10px, 5px + 1vw, 14px);
    font-weight: 400;
    color: #fff;
    padding: 20px;
    opacity: ${props => props.$isShown ? 1 : 0};
    pointer-events: ${props => props.$isShown ? "all" : "none"};
    user-select: ${props => props.$isShown ? "all" : "none"};
    transition: opacity 0.4s;
    text-align: justify;
`

export const AcceptCookiesMessageButton = styled.button`
    padding: 10px;
    max-width: 300px;
    width: 100%;
    background-color: var(--color-aquamarine);
    border: 1px solid transparent;
    cursor: pointer;
    font-size: clamp(14px, 7px + 1vw, 18px);
    font-weight: 400;
    border-radius: 4px;
    transition: border-color 0.3s, color 0.3s, background-color 0.3s;

    &:hover, &:focus-visible, &:active{
        border-color: var(--color-aquamarine);
        background-color: transparent;
        color: var(--color-aquamarine);
    }
`