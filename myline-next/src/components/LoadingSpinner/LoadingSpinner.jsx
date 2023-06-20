"use client"
import styled from "styled-components"

export const SpinnerWrapper = styled.div`
    width: 20px;
    height: 20px;

`


const Spinner = styled.div`
    width: 100%;
    height: 100%;
    object-fit: contain;
    clip-path: polygon(48% 0, 100% 0, 100% 35%, 100% 100%, 80% 100%, 50% 50%, 20% 100%, 0 100%, 0% 35%, 0 0);
    border-radius: 1000vw;
    border: 2px solid var(--color-aquamarine);
    animation: spin 1.5s linear infinite forwards;
    @keyframes spin {
        from{
            transform: rotate(0);
        }
        to{
            transform: rotate(360deg);
        }
    }
`

const LoadingSpinner = () => {
    return (
        <SpinnerWrapper>
            <Spinner/>
        </SpinnerWrapper>
        
    )
}

export default LoadingSpinner