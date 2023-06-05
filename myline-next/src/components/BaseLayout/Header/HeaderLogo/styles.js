"use client"

import styled from "styled-components"
import Image from "next/image"

export const HeaderLogoWrapper = styled.div`
    aspect-ratio: 2/1;
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);

    
`

export const HeaderLogoImage = styled(Image).attrs(props => ({
    src: props.src,
    width: 0,
    height: 0,
    alt: "logo",
    priority: true,
    loading: "eager",
    sizes: "100vw"
}))`
    object-fit: contain;
    display: block;
    width: 100%;
    height: 100%;
`
