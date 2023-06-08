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
            <p>
                Мы используем различные технологии для персонализации функциональных возможностей нашего веб-сайта, определения уровня использования и производительности веб-сайта и предоставления таргетированной рекламы. Дополнительную информацию можно найти в нашем <a href="/cookies">уведомлении о файлах cookie.</a>
            </p>
           < AcceptCookiesMessageButton onClick={acceptCookiesRequest}>Подтвердить</AcceptCookiesMessageButton>
        </AcceptCookiesMessageWrapper>
    )
}