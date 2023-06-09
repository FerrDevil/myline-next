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
    width: 100%;
`

export const SliderContainer = styled.div`
    display: grid;
    width: 100%;
    @media (min-width: 1000px) {
        
        grid-auto-columns: 100%;
        grid-auto-flow: column;
       
        transform: translate(${props => -100 * props.$currentGroupIndex}%);
    }
    @media (max-width: 1000px) {
        
        gap: 10px;
    }
    
`

export const SliderGroupContainer = styled.div`
    display: grid;
    
    @media (min-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));  
    }
    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);  
    }
    @media (max-width: 600px) {
        grid-template-columns: 1fr;  
    }
    
    gap: 10px;
    width: 100%;
`

export const SliderToggleGroupButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    @media (max-width: 1000px) {
        
        display: none;
    }
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

