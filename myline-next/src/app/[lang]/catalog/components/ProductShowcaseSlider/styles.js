"use client"

import styled from "styled-components"
import LeftArrowSVG from "@/app/[lang]/catalog/public/left-arrow.svg"
import RightArrowSVG from "@/app/[lang]/catalog/public/right-arrow.svg"
import Image from "next/image"

export const ProductShowcaseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ProductShowcaseUpperPanel = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    align-items: center;
    position: relative;
    overflow: hidden;
`

export const ProductShowcaseMainImageWrapper = styled.div`
    width: 100%;
    max-height: 100%;
    border-radius: 8px;
`

export const ProductShowcaseMainImage = styled(Image).attrs(() => ({
    width: 0,
    height: 0,
    sizes: "100vw",
    alt: "mainSliderImage"
}))`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ProductShowcaseButton = styled.button`
    position: absolute;
    ${props => props.$direction} : 15px;


    width: 20px;
    aspect-ratio: 1;
    background-color: transparent;
    border: 1px solid transparent;
    
    cursor: pointer;

    &:focus-visible, &:hover, &:active{
        outline: 1px solid transparent;
    }
    &:focus-visible > svg, &:hover > svg, &:active > svg{
        fill: var(--color-aquamarine);
    }
`

export const ProductShowcaseButtonLeftArrow = styled(LeftArrowSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #293241;
    transition: fill 0.3s;
`
export const ProductShowcaseButtonRightArrow = styled(RightArrowSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #293241;
    transition: fill 0.3s;
`

export const ProductShowcaseSliderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-x: hidden;
`

export const ProductShowcaseSliderContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: calc(25% - 10px);
    gap: 10px;
    transform: translateX( calc(${props => props.$maxIndex - 3 - props.$currentImageIndex > 0 ? -25 * props.$currentImageIndex : -25 * (props.$maxIndex + 1 >= 4 ? (props.$maxIndex - 3) : 0) }% ));
    transition: transform 1s;
`

export const ProductShowcaseSliderImageWrapper = styled.button`
    width: 100%;
    max-height: 100%;
    border-radius: 4px;
    border: 2px solid ${props => props.$isSelected? "var(--color-aquamarine)" : "transparent"};
    background-color: transparent;
    transition: border-color 0.3s;
    overflow: hidden;
    cursor: pointer;
`

export const ProductShowcaseSliderImage = styled(Image).attrs(() => ({
    width: 0,
    height: 0,
    sizes: "100vw",
    alt: "mainSliderImage"
}))`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`