"use client"

import { Placemark } from "@pbe/react-yandex-maps"
import { DoctorAddress, DoctorContent, DoctorName, DoctorWrapper, YandexMap, YandexMapWrapper } from "./styles"
import { useEffect, useRef, useState } from "react"
import Portal from "./Portal"
import { rubik } from "@/app/font"


const PartnersMaps = () => {
    const currentUserGeolocationInfo = [56.85235931108874,53.19983949999994]

    const partners = [
        {
            id: 1,
            name: "Стоматология «Ресто»",
            address: "г. Ижевск, ул. Удмуртская 304н, офис 307",
            geolocation: [56.86126240383427, 53.222655556378946]
        },
        {
            id: 2,
            name: "Стоматология «Ресто»",
            address: "г. Ижевск, ул. К. Либкнехта, д. 26",
            geolocation: [56.83772390210355, 53.22638140112073]
        },
        {
            id: 3,
            name: "Детская стоматология «Ресто»",
            address: "г. Ижевск, ул. Пушкинская, д. 221В",
            geolocation: [56.85228477224477, 53.21063318650822]
        },
        {
            id: 4,
            name: "Клиника «WHITE»",
            address: "г. Ижевск, ул. 40 лет Победы, д. 138",
            geolocation: [56.840577067866334, 53.281702499999994]
        },
    ]
    

    const [currentPartnerIndex, setCurrentPartnerIndex] = useState(-1)

    const map = useRef(null);
    
    useEffect(() => {
        
        if (!map.current ) {
            return;
        }
        
        map.current.events.add('click', () => { 
            map.current.balloon.close();
            setTimeout(() => { setCurrentPartnerIndex(-1)}, 0)
        });
        
    }, [map.current]);

    return (
        <YandexMapWrapper onWheel={(event) => {
            event.stopPropagation()
        }}>
            <YandexMap 
                instanceRef={map}
                state={{ center: currentUserGeolocationInfo, zoom: 11 }} 
                modules={ [ 'geoObject.addon.balloon', 'geoObject.addon.hint' ] }
                
                
            >
                {
                    partners.map((partner, partnerIndex) => (
                        <Placemark
                            key={partner.id}
                            geometry={partner.geolocation}
                            properties={{
                                balloonContent: `<div id="partners${partner.id}" style="width: 100%; height: 100%;"></div>`,
                                
                            }}
                            options={{
                                iconColor: '#51CACD',
                                preset: "islands",
                                hideIconOnBalloonOpen: false,
                                balloonMinWidth: 300,
                                balloonMaxWidth: 320,
                                balloonMaxHeight: 200,
                                balloonMinHeight: 100,
                                balloonCloseButton: false,
                                balloonOffset: [0, -30]
                                
                            }}
                            onClick={() => {
                                setTimeout(() => { setCurrentPartnerIndex(prev => prev === partnerIndex ? -1 : partnerIndex )}, 0)
                            }}
                        />
                    ))
                }
                
            </YandexMap>
            {   currentPartnerIndex !== -1 &&
                <Portal key={partners[currentPartnerIndex].id} getHTMLElementId={ `partners${partners[currentPartnerIndex].id}` }>
                    <DoctorWrapper className={rubik.className}>
                        <DoctorContent>
                            <DoctorName>{partners[currentPartnerIndex].name}</DoctorName>
                            <DoctorAddress>{partners[currentPartnerIndex].address}</DoctorAddress>
                        </DoctorContent>
                    </DoctorWrapper>
                </Portal>
            }
        </YandexMapWrapper>
        
    )
}



export default PartnersMaps