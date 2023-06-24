"use client"
import styled from "styled-components"

export const YandexMapWrapper = styled.iframe`
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    
    @media (max-width: 1280px) {
        max-height: 100vh;
    }
    overflow: hidden;
`

