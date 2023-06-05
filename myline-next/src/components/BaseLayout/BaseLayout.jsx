import { DogGif, DogGifWrapper } from "./styles"
import Header from "./Header/Header"
import PageSlider from "../PageSlider/PageSlider"
import LoadingScreen from "./LoadingScreen/LoadingScreen"
import { cookies } from "next/dist/client/components/headers"


const BaseLayout = ({ children }) => {
    const lang = cookies().get("MYLINE-LOCALE-COOKIE")?.value 
    return (
        <>
            <Header isAuthorized={true}/>
            <PageSlider lang={lang}>
                {children}
            </PageSlider>
            <DogGifWrapper>
                <DogGif src="/images/dog.gif"/>
            </DogGifWrapper>
             
        </>
        
    )
}

export default BaseLayout