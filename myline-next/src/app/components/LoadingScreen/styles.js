"use client"
import styled from "styled-components"

export const LoadingScreenBackdrop = styled.div`
    position: fixed;
    inset: 0;
    background-color: #ccc;
    background-size: 100% 100%;
    

    &::after{
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, transparent 0, #ffffff23 75%, #ffffff99 90%, transparent);
        animation: skeleton 2000ms infinite;
    }
    @keyframes skeleton {
        from{
           transform: translateX(-100%);
        }

        to{
            transform: translateX(100%);
        }
    }
`