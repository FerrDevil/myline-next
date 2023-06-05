"use client"

import styled from "styled-components"

import PasswordHiddenSVG from "@/services/auth/public/hidden.svg"
import PasswordVisibleSVG from "@/services/auth/public/visible.svg"


export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    width: 100%;
`

export const Input = styled.input`
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    color: #4F4F4F;
    padding: 18px;
    border: 1px solid #D9D9D9;
    background-color: #FFFFFF;
    border-radius: 4px;
    outline: 1px solid ${props=> !props.$isValid? "#F9453A" : "transparent"};
    &::placeholder{
        color: #4F4F4F;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus {
        -webkit-text-fill-color: #4F4F4F;
        -webkit-box-shadow: 0 0 0px 40rem #ffff inset;
    }

    &:focus-visible, &:active{
        outline: 1px solid var(--color-aquamarine);
    }
`


export const InputPasswordWrapper = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   width: 100%;
`

export const InputPasswordSwitchButton = styled.button`
    display: block;
    position: absolute;
    right: 10px;
    border: 1px solid transparent;
    background-color: transparent;
    width: 30px;
    aspect-ratio: 1;
    cursor: pointer;
    &:hover > svg, &:focus-visible > svg, &:active > svg{
            fill: var(--color-aquamarine);
    }
`

export const InputPasswordHiddenSVG = styled(PasswordHiddenSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #4f4f4f;
    transition: fill 0.2s;
`

export const InputPasswordVisibleSVG = styled(PasswordVisibleSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #4f4f4f;
    transition: fill 0.2s;
`


export const ErrorMessage = styled.span`
    margin-left: 18px;
    font-size: 12px;
    
    color: #F9453A;
`