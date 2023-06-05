"use client"
import { YMaps } from "@pbe/react-yandex-maps"

const Providers = ({children, lang}) => {
    return(
        <YMaps version={ '2.1.79' } query={{ lang: lang === "ru"? "ru_RU" : 'en_US' , apikey: "a74a7321-d10b-4fc2-b9ca-8dfeed91f5c5"}} >
            {children}
        </YMaps>
    )
}

export default Providers