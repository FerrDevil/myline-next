"use client"

import { Map } from "@pbe/react-yandex-maps"
import styled from "styled-components"

export const YandexMapWrapper = styled.div`
    display: block;
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
    margin-block: 20px;
    
    overflow: hidden;
`

export const YandexMap = styled(Map).attrs(() => ({
    width: 0,
    height: 0,
}))`
    display: block;
    object-fit: contain;
    width: 100%;
    height: 100%;
`