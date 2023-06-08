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
            name: "Серебренников Иван Иванович",
            address: "г. Ижевск, ул. Ленина, д. 1, офис 207",
            geolocation: [56.8663104, 53.234616]
        },
        {
            id: 2,
            name: "Серебренников Иван Иванович",
            address: "г. Ижевск, ул. Ленина, д. 2, офис 207",
            geolocation: [56.8613104, 53.243616]
        },
        {
            id: 3,
            name: "Серебренников Иван Иванович",
            address: "г. Ижевск, ул. Ленина, д. 3, офис 207",
            geolocation: [56.8763104, 53.134616]
        },
        {
            id: 4,
            name: "Серебренников Иван Иванович",
            address: "г. Ижевск, ул. Ленина, д. 4, офис 207",
            geolocation: [56.8723104, 53.124616]
        }
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
        <YandexMapWrapper>
            <YandexMap 
                instanceRef={map}
                state={{ center: currentUserGeolocationInfo, zoom: 14 }} 
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
                                preset: "islands#dotIcon",
                                hideIconOnBalloonOpen: false,
                                balloonMinWidth: 300,
                                balloonMaxWidth: 320,
                                balloonMaxHeigh: 400,
                                balloonMinHeight: 150,
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
                        <DoctorImageWrapper>
                            <DoctorImage src="/images/doctor.png"/>
                        </DoctorImageWrapper>
                        <DoctorContent>
                            <DoctorName>{doctors[currentDoctorIndex].name}</DoctorName>
                            <DoctorAddress>{doctors[currentDoctorIndex].address}</DoctorAddress>
                            <DoctorChooseButton>{lang === "ru"? "Выбрать" : "Select"}</DoctorChooseButton>
                        </DoctorContent>
                    </DoctorWrapper>
                </Portal>
            }
        </YandexMapWrapper>
        
    )
}



export default withYMaps(DoctorMaps, true, ["geolocation"])