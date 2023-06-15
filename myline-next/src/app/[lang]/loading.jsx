"use client"

import { pageStore } from "@/components/PageSlider/PageSlider"
import { useContext, useEffect } from "react"
import LoadingScreen from "../components/LoadingScreen/LoadingScreen"

export default function Loading() {

   /*  const transitionParams = useContext(pageStore)
    useEffect(() => {
        transitionParams.loading.setter(true)

        return () => {
            transitionParams.loading.setter(false)
        }
    }, []) */
    return(
        <LoadingScreen/>
    )
}