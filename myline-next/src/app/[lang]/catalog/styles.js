"use client"
import styled from "styled-components"
import Image from "next/image"

export const CatalogPageContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-block: clamp(40px, 20px + 3vw, 80px) 20px;
    gap: 30px;
    
`
export const CatalogPageHeader = styled.h1`
    font-size: clamp(30px, 15px + 5vw, 60px);
    font-weight: 700;
    color: var(--color-main-gray);
    text-transform: uppercase;
    
`

export const CatalogPageDescription = styled.p`
    font-size: clamp(16px, 8px + 2vw, 18px);
    font-weight: 400;
    max-width: 55ch;
    color: var(--color-light-gray);
`

export const CatalogPageProducts = styled.div`
    align-self: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: column;
    align-items: flex-start;
    gap: clamp(20px, 10px + 1vw, 30px);
    
    @media (max-width: 1280px) {
        
    }
    @media (max-width: 900px) {
        grid-template-columns: unset;
        grid-auto-flow: row;
        width: 100%;
        & > *{
            width: 100%;
        }
    }
    
`

export const CatalogPageProduct = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #fff;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.15);
    gap: 10px;
    padding: clamp(10px, 5px + 1vw, 20px);
    border-radius: 8px;
    height: 100%;
`

export const CatalogPageProductImageWrapper = styled.div`
    width: 100%;
    
    height: clamp(200px, 100px + 10vw, 300px);
    
    border-radius: 8px;
    overflow: hidden;
    @media (max-width: 900px) {
        height: auto;
        max-height: 450px;
    }

    @media (max-width: 400px) {
        max-height: 300px;
    }
  `

export const CatalogPageProductImage = styled(Image).attrs(() => ({
    width: 0,
    height: 0,
    alt: "productimage",
    sizes: "100vw"
  }))`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `

export const CatalogPageProductHeader = styled.h2`
    font-size: clamp(18px, 9px + 1vw, 20px);
    font-weight: 700;
    color: var(--color-main-gray);
    white-space: nowrap;
`

export const CatalogPageProductDescription = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #8a8a8a;
`

export const CatalogPageProductPriceWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 15px;
`

export const CatalogPageProductPriceText = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: var(--color-light-gray);
`

export const CatalogPageProductPrice = styled.span`
    font-size: clamp(20px, 10px + 1vw, 24px);
    font-weight: 700;
    color: var(--color-aquamarine);
`

export const CatalogPageProductDetails = styled.button`
    margin-top: clamp(15px, 8px + 1vw, 20px);
    color: var(--color-main-gray);
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    width: 100%;
    padding: clamp(15px, 8px + 1vw, 20px) clamp(55px, 28px + 3vw, 90px);
    background-color: var(--color-aquamarine);
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    transition: border-color 0.3s,
        background-color 0.3s;

    &:hover, &:focus-visible, &:active{
        border-color: var(--color-aquamarine);
        background-color: transparent;
    }
`