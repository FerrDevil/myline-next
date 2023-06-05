"use client"

import { Placemark } from "@pbe/react-yandex-maps"
import { YandexMap, YandexMapWrapper } from "./styles"


const Maps = () => {
    return (
        <YandexMapWrapper onWheel={(event) => {event.preventDefault()}}>
            <YandexMap state={{ center: [56.861284602050425, 53.22282552562131], zoom: 18 }}>
                <Placemark geometry={[56.861284602050425, 53.22282552562131]}/>
            </YandexMap>
        </YandexMapWrapper>
        
    )
}



export default Maps