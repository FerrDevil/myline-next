"use client"

import { useOpenCallMeModal } from "@/components/CallMeModal/CallMeModal"
import { ContactPageFreePhoneCall } from "./styles"

export default function CallMeModal({dictionary}) {
    const setOpen = useOpenCallMeModal()

    return(
        <>
           <ContactPageFreePhoneCall onClick={() => {setOpen()}}>{dictionary.freeCall}</ContactPageFreePhoneCall>
        </>
    )
}