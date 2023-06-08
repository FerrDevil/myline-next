"use client"

import styled from "styled-components"


export const AuthPageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-block: 20px;
`

export const AuthPageForm = styled.form`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 2px 2px 10px 0px #00000026;
    text-align: center;
    width: 500px;
    @media (max-width: 510px) {
        width: 100%;
    }
`

export const AuthPageFormHeader = styled.h1`
    font-size: 22px;
    font-weight: 700;
    color: #404342;
    width: 100%;
    padding: 25px;
    border-bottom: 1px solid #D9D9D9;
`

export const AuthPageFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    gap: 15px;
`

export const AuthPageFormSubmitButton = styled.button`
    background-color: var(--color-aquamarine);
    border: 1px solid var(--color-aquamarine);
    padding: 20px;
    width: 100%;
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

