"use client"
import styled from "styled-components"

import Image from "next/image"

export const LoadingScreenWrapper = styled.div`
    position: fixed;
    inset: 0;
    background-color: var(--color-main-gray);
    z-index: 1000;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    animation: hidden 1s 6s forwards;

    @keyframes hidden {
       from{
            opacity: 1;
       }

       to {
            opacity: 0;
            pointer-events: none;
       }


    }
`

export const LoadingScreenContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    isolation: isolate;
`
export const LoadingScreenMotto = styled.h1`
    font-size: 30px;
    color: #fff;
    padding: 10px;
    
    position: absolute;
    inset: 0;
    opacity: 0;
    z-index: -1;

    animation: mottoMovement 2s 2s forwards;

    @keyframes mottoMovement {
       from{
            opacity: 0;
       }

       60% {
            transform: translateX(60%);
            opacity: 1;
       }

       to{
        transform: translateX(60%);
        opacity: 0;
       }


    }
    @media (max-width: 620px) {
        @keyframes mottoMovement {
       from{
            opacity: 0;
       }

       60% {
            transform: translateY(60%);
            opacity: 1;
       }

       to{
        transform: translateY(60%);
        opacity: 0;
       }


    }
    }

    
`


export const LoadingScreenLogoWrapper = styled.div`
    width: 300px;
    height: 100px;
    background-color: var(--color-main-gray);
    
    animation: logoMovement 6s forwards;

    @keyframes logoMovement {
       from{
            transform: translateY(-400%);
            opacity: 0.2;
       }
       
       40% {
            transform:  translateY(0%);
            opacity: 1;
            
       }    
       60% {
            transform: translateX(-50%)
       }
       to{
            transform: translateY(-400%);
       }


    }

    @media (max-width: 620px) {
        @keyframes logoMovement {
            from{
                    transform: translateY(-400%);
                    opacity: 0.2;
            }
            
            40% {
                    transform:  translateY(0%);
                    opacity: 1;
                    
            }    
            60% {
                    transform: translateY(-50%)
            }
            to{
                    transform: translateY(-200%);
            }


        }
    }

    

` 


export const LoadingScreenLogo = styled(Image).attrs(() => ({
    width: 0,
    height: 0,
    sizes: "100vw",
    alt: "loadingLogo"
}))`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    pointer-events: none;
`