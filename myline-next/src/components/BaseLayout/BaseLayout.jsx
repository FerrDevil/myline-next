import { DogGif, DogGifWrapper } from "./styles"
import Header from "./Header/Header"
import PageSlider from "../PageSlider/PageSlider"
import LoadingScreen from "./LoadingScreen/LoadingScreen"
import { cookies } from "next/dist/client/components/headers"
import CallMeModal from "@/components/CallMeModal/CallMeModal"
import ToastMessage from "../ToastMessage/ToastMessage"


const BaseLayout = ({ children }) => {
    const lang = cookies().get("MYLINE-LOCALE-COOKIE")?.value 
    return (
        <>
            <Header isAuthorized={true}/>
            <PageSlider lang={lang}>
                {children}
                <CallMeModal/>
            </PageSlider>
            <ToastMessage/>
            
             
        </>
        
    )
}

export default BaseLayout