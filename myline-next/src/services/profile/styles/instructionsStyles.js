"use client"
import styled from "styled-components"

export const InstructionsPageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    gap: 20px;
`

export const InstructionsPageVideoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 44%;
    gap: 20px;
    @media (max-width: 999px) {
        width: 100%;
    }
`

export const InstructionsPageVideoTitle = styled.h2`
    font-weight: 700;
    font-size: 22px;
    line-height: 100%;
    color: var(--color-main-gray);
`


