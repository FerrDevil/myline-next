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

export const JoinUsForm = styled.form`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 2px 2px 10px 0px #00000026;
    text-align: center;
    width: 500px;
    user-select: none;
    @media (max-width: 510px) {
        width: 100%;
    }
`

export const JoinUsFormHeader = styled.h2`
    font-size: 22px;
    font-weight: 700;
    color: var(--color-main-gray);
    width: 100%;
    padding: 25px;
    border-bottom: 1px solid #D9D9D9;
`

export const JoinUsFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    gap: 15px;
`

export const JoinUsFormSubmitButton = styled.button`
    background-color: var(--color-aquamarine);
    border: 1px solid var(--color-aquamarine);
    padding: 20px 90px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
    &:focus-visible, &:hover, &:active{
        background-color: #fff;
    }
    &:disabled{
        background-color: #15b8bc;
        cursor: default;
    }
`