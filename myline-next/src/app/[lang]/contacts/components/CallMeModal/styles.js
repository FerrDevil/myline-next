"use client"
import styled from "styled-components"

export const ContactPageFreePhoneCall = styled.button`
    border: 2px solid transparent;
    background-color: #CE5250;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    padding: 20px 50px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover, &:focus-visible, &:active{
        outline: 1px solid transparent;
        background-color: transparent;
        border-color: #CE5250;
        color: #CE5250;
    }
`