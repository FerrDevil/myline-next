"use client"

import { useOpenCallMeModal } from "@/components/CallMeModal/CallMeModal"
import { AboutPageCallMeButton } from "../../styles"


export default function JoinUsModal() {
    const setOpen = useOpenCallMeModal()
    return(
        <>
             <AboutPageCallMeButton onClick={() => setOpen()}>Получить консультацию</AboutPageCallMeButton>
        </>
    )
}