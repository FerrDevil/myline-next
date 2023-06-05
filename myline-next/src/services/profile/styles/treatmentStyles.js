"use client"
import styled from "styled-components"

export const TreatmentPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    gap: 20px;
`

export const TreatmentPageHeader = styled.h2`
    font-weight: 700;
    font-size: 22px;
    line-height: 100%;
    color: var(--color-main-gray);
    @media (max-width: 600px) {
        display: none;
    }
`

export const TreatmentPageDescription = styled.p`
    font-weight: 400;
    font-size: clamp(16px, 8px + 1vw, 18px);
    line-height: 135%;
    color: #4F4F4F;
`

export const TreatmentCard = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 4px;
    padding: 20px;
    gap: 15px;
    max-height: 150px;
    @media (max-width: 600px) {
        width: 100%;  
    }
`

export const TreatmentCardHeaders = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const TreatmentCardHeadersDay = styled.span`
    font-weight: 600;
    font-size: clamp(16px, 8px + 1vw, 18px);
    line-height: 135%;

    color: var(--color-main-gray);
`

export const TreatmentCardHeadersDate = styled.span`
    font-weight: 600;
    font-size: clamp(16px, 8px + 1vw, 18px);
    line-height: 135%;

    color: var(--color-main-gray);
`

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