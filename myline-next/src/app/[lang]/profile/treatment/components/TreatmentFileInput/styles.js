"use client"
import styled from "styled-components"

export const TreatmentCardFileInputLabel = styled.label`
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    background-color: var(--color-aquamarine);
    text-align: center;

    padding: 20px 50px;
    border-radius: 4px;

    cursor: pointer;
    color: var(--color-main-gray);
`

export const TreatmentCardFileInput = styled.input.attrs(() => ({
    type: "file"
}))`
    appearance: none;
    visibility: hidden;
    position: absolute;
    inset: 0;
`