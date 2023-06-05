"use client"
import { useEffect, useState } from "react"
import { Main } from "./styles"
import { useParams, usePathname, useRouter } from "next/navigation"

const PageSlider = ({children, lang="ru"}) => {
    const pathname = usePathname()
    usePageTransition(lang)
    return (
        <Main $shouldRemoveBG={`/${lang}` === pathname}>
            {children}
        </Main>
    )
}

export default PageSlider


const usePageTransition = (lang="ru") => {
    const pathname = usePathname()
    const links = [`/${lang}`, `/${lang}/about`, `/${lang}/catalog`, `/${lang}/media`, `/${lang}/news`, `/${lang}/contacts`]
    const currentLinkId = links.findIndex(link => link === pathname)
    const [linkId, setLinkId] = useState(currentLinkId)
    const router = useRouter()
    
    
    const changePage = (event) => {
        if (event.wheelDelta > 0){
            setLinkId(prev => prev === 0 ? 0 : prev - 1)
        }                            
        else if (event.wheelDelta < 0){
            setLinkId(prev => prev === links.length-1 ? links.length-1 : prev + 1)
        }
    }

    useEffect(() => {
        if (currentLinkId === -1){
            return
        }
        router.push(links[linkId])
    }, [linkId])
    

    useEffect(() => {
        window.addEventListener("wheel", changePage)
        
    }, [])

    useEffect(() => {
        setLinkId(links.findIndex(link => link === pathname))
    }, [pathname])
}
    
    
    


/* $slideTo={direction} */
/*  const pathname = usePathname()
    const [previousPathname, setPreviousPathname] = useState(pathname)
    const [direction, setDirection] = useState("left")
    

    useEffect(() => {
        
        if (links.findIndex(link => link === pathname) > links.findIndex(link => link === previousPathname)) {
            setDirection("left")
        }
        else if (links.findIndex(link => link === pathname) < links.findIndex(link => link === previousPathname)) {
            setDirection("right")
        }
        setPreviousPathname(pathname)
    }, [pathname])
 */