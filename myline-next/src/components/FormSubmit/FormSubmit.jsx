"use client"

import styled from "styled-components"
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner"



const FormSubmitButton = styled.button`
    background-color: ${props => props.$isLoading? "#fff" : "var(--color-aquamarine)"};
    border: 1px solid var(--color-aquamarine);
    padding: 20px 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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

const FormSubmit = ({text="", disabled=true, isLoading=false, onClick}) => {
    return (
        <FormSubmitButton disabled={disabled} onClick={onClick} $isLoading={isLoading}>
            {
                !disabled && isLoading ?
                <LoadingSpinner/> :
                <span>{text}</span>
            }
            
            
        </FormSubmitButton>
    )
}

export default FormSubmit