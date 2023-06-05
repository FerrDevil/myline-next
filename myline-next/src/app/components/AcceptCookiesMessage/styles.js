"use client"
import styled from "styled-components"

export const AcceptCookiesMessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    position: fixed;
    z-index: 1000;
    left: 0;
    bottom: 0;
    background-color: var(--color-main-gray);
    max-width: 600px;
    font-size: 10px;
    font-weight: 400;
    color: #fff;
    padding: 20px;
    opacity: ${props => props.$isShown ? 1 : 0};
    pointer-events: ${props => props.$isShown ? "all" : "none"};
    user-select: ${props => props.$isShown ? "all" : "none"};
    transition: opacity 0.4s;
`

export const AcceptCookiesMessageButton = styled.button`
    padding: 10px;
    width: 50%;
    background-color: var(--color-aquamarine);
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
`