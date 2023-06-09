"use client"
import styled from "styled-components"

import dynamic from "next/dynamic"
const ReactPlayer = dynamic(() => import("react-player"), {"ssr": false}) 

export const VideoWrapper = styled.div`
    display: block;
    max-width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 8px;
    overflow: hidden;
    background-color: #ccc;
    position: relative;

    @media (min-width: 1300px) {
        max-height: 230px;
    }

    @media (max-width: 768px) {
        aspect-ratio: 4 / 3;
    }
`

export const Video = styled(ReactPlayer).attrs(props => ({
    width: '100%',
    height: '100%',
    url: props.url
}))`
    position: absolute;
    inset: 0;
    margin: auto;
    object-fit: contain;
`