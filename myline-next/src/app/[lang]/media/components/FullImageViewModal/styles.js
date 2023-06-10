"use client"

import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

export const FullImageViewModalWrapper = styled.div`
    max-width: 700px;
    width: 100%;
    user-select: none;
    
`

export const FullImageViewModalImage = styled(Image).attrs(() => ({
    width: 0,
    height: 0,
    sizes: "100vw",
    alt: "sliderImage"
  }))`
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      
      border-radius: 6px;
  `


