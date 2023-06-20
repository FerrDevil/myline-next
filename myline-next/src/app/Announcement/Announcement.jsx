import { VideoBackground } from "../[lang]/styles"
import { AnnouncementDog, AnnouncementDogWrapper, AnnouncementImage, AnnouncementImageWrapper, AnnouncementLogo, AnnouncementLogoWrapper, AnnouncementMobileImage, AnnouncementSecondText, AnnouncementText, AnnouncementWrapper } from "./styles"

const Announcement = () => {
    return(
        <AnnouncementWrapper>
            <AnnouncementText>Скоро увидимся!</AnnouncementText>
            <AnnouncementImageWrapper>
                <VideoBackground autoPlay muted playsInline loop/>
            </AnnouncementImageWrapper>
        </AnnouncementWrapper>
    )
}


export default Announcement