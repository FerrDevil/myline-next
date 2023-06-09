"use client"
import styled from "styled-components"

export const ChooseDoctorPageWrapper = styled.div`
    
    display: grid;
    align-items: flex-start;
    width: 100%;
    max-height: 100%;
    padding-block: clamp(40px, 20px + 3vw, 80px) 20px;
    gap: 30px;
    
`
export const ChooseDoctorPageHeader = styled.h1`
    font-size: clamp(30px, 15px + 5vw, 60px);
    font-weight: 700;
    color: var(--color-main-gray);
    text-transform: uppercase;
    
`

export const ChooseDoctorPageContainer = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    flex: 0 0 70%;
    gap: 30px;
    
`