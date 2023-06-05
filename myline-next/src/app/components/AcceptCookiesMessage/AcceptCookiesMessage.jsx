"use client"
import { useState } from "react";
import { AcceptCookiesMessageButton, AcceptCookiesMessageWrapper } from "./styles";


export default function AcceptCookiesMessage({acceptCookies}) {
    const [areCookiesNotAcceptable, setCookiesNotAcceptable] = useState(!acceptCookies)

    const acceptCookiesRequest = async () => {
        const response = await fetch("/api/setAcceptCookies", {credentials: "include"})
        if(response.ok){
            setCookiesNotAcceptable(false)
        }
        
    }
    return(
        <AcceptCookiesMessageWrapper $isShown={areCookiesNotAcceptable}>
            <p>{"Этот сайт использует файлы cookies и сервисы сбора технических данных посетителей (данные об IP-адресе, местоположении и др.) для обеспечения работоспособности и улучшения качества обслуживания. Продолжая использовать наш сайт, вы автоматически соглашаетесь с использованием данных технологий."}</p>
           < AcceptCookiesMessageButton onClick={acceptCookiesRequest}>Подтвердить</AcceptCookiesMessageButton>
        </AcceptCookiesMessageWrapper>
    )
}