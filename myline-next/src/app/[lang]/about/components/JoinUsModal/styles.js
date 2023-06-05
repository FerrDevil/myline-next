"use client"
import styled from "styled-components"

export const AboutPageJoinUsPopupButton = styled.button`
    display: block;
    font-size: 16px;
    white-space: nowrap;
    background-color: var(--color-aquamarine);
    box-shadow: 0px 25px 45px -20px rgba(97, 218, 251, 0.65), 0px 3px 0px 1px rgba(97, 218, 251, 0.5), inset 0px 0px 10px rgba(255, 255, 255, 0.35);
    color:var(--color-main-gray);
    text-align: center;
    padding: 30px;
    width: 100%;
    border-radius: 4px;
    font-weight: 600;
    border: 1px solid transparent;
    transition: background-color 0.3s;
    cursor: pointer;
    &:hover, &:focus-visible, &:active{
        outline: 1px solid transparent;
        background-color: #00C2FF ;  
    }
    @media (max-width: 620px) {
       width: 100%;
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
    color: #404342;
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