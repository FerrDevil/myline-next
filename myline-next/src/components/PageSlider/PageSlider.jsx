"use client"
import { createContext, useEffect, useState } from "react"
import { Main } from "./styles"
import { usePathname, useRouter } from "next/navigation"
import PagePreloader from "./PagePreloader/PagePreloader"

export const pageStore = createContext()


const PageSlider = ({children, lang="ru"}) => {

    const pathname = usePathname()
    const links = [`/${lang}`, `/${lang}/about`, `/${lang}/doctor`, `/${lang}/catalog`, `/${lang}/patient`, `/${lang}/media`, `/${lang}/news`, `/${lang}/contacts`]
    const currentLinkId = links.findIndex(link => link === pathname)
    const [linkId, setLinkId] = useState(currentLinkId)
    const [isLoading, setLoading] = useState(false)
    const router = useRouter()
    
    
    const changePage = (event) => {
        if(isLoading) return

        if (event.deltaY < 0){
            if (linkId !== 0){
                setLinkId(prev => prev - 1) 
                setLoading(true)
            }
            
            
        }                            
        else if (event.deltaY > 0){
            if (linkId !== links.length - 1){
                setLinkId(prev => prev + 1)
                setLoading(true)
            }
        }
       
    }

    useEffect(() => {
        if (currentLinkId === -1){
            return
        }
        router.push(links[linkId])
            

    }, [linkId])
    
    useEffect(() => {
        setLinkId(links.findIndex(link => link === pathname))
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [pathname])
    

    const transitionParams = {
        loading: {
            value: isLoading,
            setter: setLoading
        }
    }
    return (
        <pageStore.Provider value={transitionParams}>
            <Main onWheel={changePage} $shouldRemoveBG={`/${lang}` === pathname}>
                <PagePreloader>
                    {children}
                </PagePreloader>
                
            </Main>
        </pageStore.Provider>
        
    )
}

export default PageSlider

    
    


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