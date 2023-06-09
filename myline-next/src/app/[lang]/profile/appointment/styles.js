"use client"
import Image from "next/image"
import styled from "styled-components"


export const AppointmentPageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    
`

export const AppointmentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: clamp(10px, 1vw, 20px);
    background: #FFFFFF;
    border-radius: 8px;
    gap: clamp(15px, 1vw, 20px);
    

    @media (max-width: 500px) {
        width: 100%;
        max-width: 100%;
    }
`

export const AppointmentUpperInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const AppointmentUpperInfoImageWrapper = styled.div`
    width: 100%;
    max-width: 90px;
    max-height: 100px;
    aspect-ratio: 2 / 3;
    overflow: hidden;
    border-radius: 4px;
    @media (max-width: 500px) {
        max-width: 80px;
        max-height: 100px;
    }
`

export const AppointmentUpperInfoImage = styled(Image).attrs(() => ({
    width: 0,
    height: 0,
    sizes: "100vw",
    alt: "doctorImage"
}))`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const AppointmentUpperInfoNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const AppointmentUpperInfoNameDescription = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: var(--color-aquamarine);
`

export const AppointmentUpperInfoName = styled.h2`
    font-weight: 700;
    font-size: clamp(20px, 10px + 1vw, 22px);
    line-height: 115%;
    color: var(--color-main-gray);
`

export const AppointmentLowerInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`

export const AppointmentLowerInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    width: 100%;
    
`

export const AppointmentLowerInfoParameter = styled.span`
    font-weight: 400;
    font-size: clamp(16px, 8px + 1vw, 18px);
    line-height: 135%;
    white-space: nowrap;
    color: var(--color-light-gray);
    
`

export const AppointmentLowerInfoValue = styled.span`
    font-weight: 500;
    font-size: clamp(16px, 8px + 1vw, 18px);
    line-height: 135%;
    
    text-align: right;
    white-space: nowrap;
    color: var(--color-main-gray);
    
`

