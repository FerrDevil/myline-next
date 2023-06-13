"use client"
import { createContext, useEffect, useState } from "react"
import { Main } from "./styles"
import { useParams, usePathname, useRouter } from "next/navigation"
import PagePreloader from "./PagePreloader/PagePreloader"

export const pageStore = createContext()

const PageSlider = ({children, lang="ru"}) => {
    const pathname = usePathname()
    

    const transitionParams = usePageTransition(lang)
    return (
        <pageStore.Provider value={transitionParams}>
            <Main $shouldRemoveBG={`/${lang}` === pathname}>
                <PagePreloader>
                    {children}
                </PagePreloader>
                
            </Main>
        </pageStore.Provider>
        
    )
}

export default PageSlider


const usePageTransition = (lang="ru") => {
    const pathname = usePathname()
    const links = [`/${lang}`, `/${lang}/catalog`, `/${lang}/articles`, `/${lang}/media`, `/${lang}/news`, `/${lang}/about`, `/${lang}/contacts`]
    const currentLinkId = links.findIndex(link => link === pathname)
    const [linkId, setLinkId] = useState(currentLinkId)
    const [isLoading, setLoading] = useState(false)
    const router = useRouter()
    
    
    const changePage = (event) => {
        if(isLoading) return
        if (event.wheelDelta > 0){
            console.log(links[currentLinkId === 0 ? 0 : currentLinkId - 1])
            router.push(links[linkId === 0 ? 0 : linkId - 1])
            /* setLinkId(prev => prev === 0 ? 0 : prev - 1)  */
        }                            
        else if (event.wheelDelta < 0){
            /* setLinkId(prev => prev === links.length-1 ? links.length-1 : prev + 1) */
            console.log(links[linkId === links.length-1 ? links.length-1 : linkId + 1])
            router.push(links[linkId === links.length-1 ? links.length-1 : linkId + 1])
        }
        setLoading(true)
        console.log("handle")
    }

/*     useEffect(() => {
        if (currentLinkId === -1){
            return
        }
        if (currentLinkId !== linkId){
            setLoading(true)
            console.log("loading", currentLinkId, linkId)
        }
    }, [linkId])
    

     */

    useEffect(() => {
        if (isLoading){
            console.log("net")
            window.removeEventListener("wheel", changePage)
            return
        } 
        window.addEventListener("wheel", changePage)
        /* console.log("da") */
    }, [isLoading])

    useEffect(() => {
        console.log(links[currentLinkId], pathname)
        setLoading(false)
        setLinkId(links.findIndex(link => link === pathname))
    }, [pathname])

    return {
        loading: {
            value: isLoading,
            setter: setLoading
        }
    }
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