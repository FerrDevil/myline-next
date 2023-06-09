"use client"

import styled from "styled-components"

export const ProductModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 2px 2px 10px 0px #00000026;
    text-align: center;
    padding: 20px;
    user-select: none;
    gap: 15px;
    width: 850px;
    @media (max-width: 900px) {
        width: 100%;
    }
`

export const ProductModalContainer = styled.div`
    display: grid;
    flex-direction: row;
    align-items: center;
    gap: clamp(25px,  13px + 1vw, 45px);
    @media (min-width: 680px) {
        grid-template-columns: 1fr 1fr;
    }
    
`

export const ProductModalProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

export const ProductModalProductTitle = styled.h2`
    font-size: clamp(22px, 11px + 2vw, 30px);
    font-weight: 700;
    color: var(--color-main-gray);
    white-space: nowrap;
    
`
export const ProductModalProductDescriptionList = styled.ul`
    font-size: clamp(14px, 7px + 1vw, 18px);
    font-weight: 400;
    line-height: 135%;
    color: var(--color-light-gray);
    text-align: justify;
    margin-left: 1em;
`

export const ProductModalProductVendorCode = styled.span`
    display: block;
    font-size: clamp(16px, 8px + 1vw, 18px);
    font-weight: 400;
    color: #929292;
    margin-top: clamp(5px,  1vw, 10px);
`

export const ProductModalProductPrice = styled.span`
    font-size: clamp(30px, 15px + 1vw, 40px);
    font-weight: 700;
    color: var(--color-aquamarine);
    margin-top: clamp(10px,  1vw, 15px);
    @media (max-width: 680px) {
        align-self: flex-end;
    }
`

export const ProductModalProductStockWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    margin-top: clamp(5px,  1vw, 15px);
    @media (max-width: 680px) {
        align-self: flex-end;
    }
`

export const ProductModalProductStockHeader = styled.span`
    font-size: clamp(16px, 8px + 1vw, 18px);
    font-weight: 400;
    color: var(--color-light-gray);
    
`
export const ProductModalProductStockCount = styled.span`
    font-size: clamp(16px, 8px + 1vw, 18px);
    font-weight: 500;
    color: var(--color-main-gray);
    
`

export const ProductModalProductSelectButton = styled.button`
    font-size: 16px;
    font-weight: 600;
    color: var(--color-main-gray);
    padding: clamp(15px, 8px + 1vw, 20px) 60px;
    margin-top: 10px;
    border: 1px solid transparent;
    background-color: var(--color-aquamarine);
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;
    transition: background-color 0.3s, border-color 0.3s;
    &:hover, &:focus-visible, &:active{
      outline: 1px solid transparent;
      background-color: transparent;
      border-color: var(--color-aquamarine);
    }
    @media (max-width: 680px) {
        width: 100%;
    }
`

export const ProductModalProductDescription = styled.p`
    font-size: clamp(16px, 8px + 1vw, 18px);
    font-weight: 400;
    color: var(--color-light-gray);
    text-align: left;
    max-width: 61ch;
`

export const ProductModalProductCaution = styled.p`
    font-size: clamp(10px, 5px + 1vw, 12px);
    font-weight: 400;
    color: #929292;
    text-align: left;
`