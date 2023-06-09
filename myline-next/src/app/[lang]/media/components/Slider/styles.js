"use client"

import styled from "styled-components"

import LeftArrowSVG from "@/app/[lang]/media/public/left-arrow.svg"
import RightArrowSVG from "@/app/[lang]/media/public/right-arrow.svg"


export const SliderWrapper = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    user-select: none;
`

export const SliderContainerWrapper = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const SliderArrowButton = styled.button`
    border: 1px solid transparent;
    background-color: transparent;
    padding: 5px;
    width: 40px;
    aspect-ratio: 1;
    cursor: pointer;
    &:hover  > svg, &:focus-visible  > svg, &:active  > svg {
        fill: var(--color-aquamarine);
    }
    @media (max-width: 1024px) {
        display: none;
    }

`


export const SliderLeftArrowButtonSVG = styled(LeftArrowSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #293241;
    transition: fill 0.3s;
`

export const SliderRightArrowButtonSVG = styled(RightArrowSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #293241;
    transition: fill 0.3s;
`

export const SliderContainer = styled.div`
    
    overflow: hidden;
    width: 100%;
`

export const SliderItems = styled.div`
    display: flex;
    flex-grow: 1;
    --_gap: 20px;
    gap: var(--_gap);
    --_one-element: calc((100% - (var(--_gap) * 4)) / 5 );

    transform: translateX(calc( -1 * (var(--_one-element) + var(--_gap)) * ${props => props.$currentGroupIndex }));
    transition: transform 0.8s;
    & > * {
        flex: 0 0 calc((100% - (var(--_gap) * 4)) / 5 );
    }
    @media (max-width: 1024px) {
        transform: translateX(${props => -100 / 2.5 * props.$currentGroupIndex}%);
        & > *{
            flex: 0 0 calc((100% - (var(--_gap) * 2.5)) / 2.5 );
        }
    }

    @media (max-width: 600px) {
        transform: translateX(${props => -100 / 1.1 * props.$currentGroupIndex}%);
        & > *{
            flex: 0 0 calc(${100 / 1.1}% - var(--_gap)) ;
        }
    }
`

export const SliderButtons = styled.div`
    display: flex;
    align-items: center;
    gap: clamp(10px, 1vw, 15px);
`

export const SliderDot = styled.button`
    border: 1px solid transparent;
    width: clamp(10px, 1vw, 15px);
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: ${props => props.$isActive ? "var(--color-aquamarine)" : "#D9D9D9"};
    cursor: pointer;
`
