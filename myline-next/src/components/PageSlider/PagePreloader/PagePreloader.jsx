"use client"

import { useContext, useEffect, useRef } from "react"
import { pageStore } from "../PageSlider"

export default function PagePreloader({children}) {
    const transitionParams = useContext(pageStore)
    useEffect(() => {
        if (transitionParams.loading.value){
            /* transitionParams.loading.setter(false) */
        }
    }, [children])

    return <>{children}</>
}