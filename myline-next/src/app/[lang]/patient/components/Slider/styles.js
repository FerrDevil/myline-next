"use client"

import styled from "styled-components"


export const SliderWrapper = styled.div`
    
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    @media (max-width: 1000px){
        padding-bottom: 20px;
    }
`

export const SliderContainer = styled.div`
    display: grid;
    grid-auto-columns: 100%;
    grid-auto-flow: column;
`
export const SliderGroupContainer = styled.div`
    display: grid;
    
    @media (min-width: 1280px) {
        grid-template-columns: repeat(4, 1fr);  
    }
    @media (max-width: 1280px) {
        grid-template-columns: repeat(2, 1fr);  
    }
    @media (max-width: 600px) {
        grid-template-columns: 1fr;  
    }
    gap: 20px;
`

export const SliderToggleGroupButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const SliderToggleGroupButton = styled.button`
    border: 1px solid transparent;
    font-size: 20px;
    font-weight: 600;
    border-radius: 4px;
    padding: 10px 15px;
    color:  ${props => props.$isActive ? "#fff" : "var(--color-main-gray)"};
    background-color: ${props => props.$isActive ? "var(--color-aquamarine)" : "transparent"};
    cursor: pointer;
`

