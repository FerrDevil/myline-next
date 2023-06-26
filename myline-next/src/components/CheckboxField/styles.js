"use client"

import styled from "styled-components"

import CheckedCheckboxSVG from "@/services/auth/public/checked-checkbox.svg"
import DefaultCheckboxSVG from "@/services/auth/public/default-checkbox.svg"

export const CheckboxLabel = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: clamp(13px, 7px + 1vw, 20px);
    text-align: center;
    user-select: none;
    cursor: pointer;
`

export const CheckboxWrapper = styled.div`
    width: 20px;
    aspect-ratio: 1;
    display: grid;
    grid-template-columns: 1fr;
    
`

export const CheckedCheckboxIconSVG = styled(CheckedCheckboxSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const DefaultCheckboxIconSVG = styled(DefaultCheckboxSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const Checkbox = styled.input.attrs(() => ({
    type: "checkbox"
}))`
    appearance: none;
`

export const CheckboxDescription = styled.span`
    font-size: clamp(14px, 7px + 1vw, 18px);
    font-weight: 400;
    color: var(--color-main-gray);
    text-align: left;
    
`