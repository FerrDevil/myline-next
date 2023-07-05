"use client"

import { Placemark, withYMaps } from "@pbe/react-yandex-maps"
import { DoctorAddress, DoctorChooseButton, DoctorContent, DoctorImage, DoctorImageWrapper, DoctorName, DoctorWrapper, YandexMap, YandexMapWrapper } from "./styles"
import { useEffect, useRef, useState } from "react"
import Portal from "./Portal"
import { rubik } from "@/app/font"



const useUserGeolocation = (ymaps) => {
    const [currentUserGeolocationInfo, setCurrentUserGeolocationInfo] =  useState([55, 55])
    useEffect(() => {
        ymaps.geolocation.get().then( ({geoObjects: { position }}) => {
            
            setCurrentUserGeolocationInfo(position)
        })
        
    }, [ymaps])
    return currentUserGeolocationInfo
}


const DoctorMaps = ({ymaps, lang="ru"}) => {
    const currentUserGeolocationInfo = useUserGeolocation(ymaps)

    const doctors = [
        {
            id: 1,
            name: "Стоматология «Ресто»",
            address: "г. Ижевск, ул. Удмуртская 304н, офис 307",
            geolocation: [56.86126240383427,53.222655556378946]
        },
        {
            id: 2,
            name: "Клиника «WHITE»",
            address: "г. Ижевск, ул. 40 лет Победы, д. 138",
            geolocation: [56.840577067866334,53.281702499999994]
        },
    ]
    

    const [currentDoctorIndex, setCurrentDoctorIndex] = useState(-1)

    const map = useRef(null);
    
    useEffect(() => {
        
        if (!map.current ) {
            return;
        }
        
        map.current.events.add('click', () => { 
            map.current.balloon.close();
            setTimeout(() => { setCurrentDoctorIndex(-1)}, 0)
        });
        
    }, [map.current]);

    return (
        <YandexMapWrapper onWheel={(event) => {
            event.preventDefault()
            event.stopPropagation()
        }}>
            <YandexMap 
                instanceRef={map}
                state={{ center: currentUserGeolocationInfo, zoom: 12 }} 
                modules={ [ 'geoObject.addon.balloon', 'geoObject.addon.hint' ] }
                
                
            >
                {
                    doctors.map((doctor, doctorIndex) => (
                        <Placemark
                            key={doctor.id}
                            geometry={doctor.geolocation}
                            properties={{
                                balloonContent: `<div id="doctor${doctor.id}" style="width: 100%; height: 100%;"></div>`,
                                
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
                                setTimeout(() => { setCurrentDoctorIndex(prev => prev === doctorIndex ? -1 : doctorIndex )}, 0)
                            }}
                        />
                    ))
                }
                
            </YandexMap>
            {   currentDoctorIndex !== -1 &&
                <Portal key={doctors[currentDoctorIndex].id} getHTMLElementId={ `doctor${doctors[currentDoctorIndex].id}` }>
                    <DoctorWrapper className={rubik.className}>
                        <DoctorContent>
                            <DoctorName>{doctors[currentDoctorIndex].name}</DoctorName>
                            <DoctorAddress>{doctors[currentDoctorIndex].address}</DoctorAddress>
                        </DoctorContent>
                    </DoctorWrapper>
                </Portal>
            }
        </YandexMapWrapper>
        
    )
}



export default withYMaps(DoctorMaps, true, ["geolocation"])