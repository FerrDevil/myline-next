"use client"
import styled from "styled-components"

export const ControlButtons = styled.div`
    display: flex;
    align-items: center;
    gap: clamp(5px, 1vw, 10px);
    width: 100%;
    flex-direction: column;

    & > *{
        height: 100%;
        flex-basis: 100%;
        width: 100%;
    }
`

export const SelectNewTimeButton = styled.button`
    white-space: nowrap;
    font-size: 16px;
    background-color: var(--color-aquamarine);
    color: var(--color-main-gray);
    text-align: center;
    padding: clamp(15px, 8px + 1vh, 20px);
    border-radius: 4px;
    font-weight: 600;
    border: 1px solid transparent;
    transition: background-color 0.3s, border-color 0.3s;
    cursor: pointer;
    &:hover, &:focus-visible{
        outline: 1px solid transparent;
        background-color: transparent;
        border-color: var(--color-aquamarine);
    }
`

export const CancelAppointmentButton = styled.button`
    white-space: nowrap;
    font-size: 16px;
    font-weight: 600;
    color: var(--color-aquamarine);
    text-align: center;

    background-color: transparent;

    padding: clamp(15px, 8px + 1vh, 20px);

    border: 2px solid var(--color-aquamarine);
    border-radius: 4px;
    
    transition: background-color 0.3s, color 0.3s;

    cursor: pointer;
    &:hover, &:focus-visible{
        outline: 1px solid transparent;
        background-color: var(--color-aquamarine);
        color: #fff;
    }

`