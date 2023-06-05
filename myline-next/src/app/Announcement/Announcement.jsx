import { AnnouncementDog, AnnouncementDogWrapper, AnnouncementLogo, AnnouncementLogoWrapper, AnnouncementSecondText, AnnouncementText, AnnouncementWrapper } from "./styles"

const Announcement = () => {
    return(
        <AnnouncementWrapper>
            <AnnouncementText>
                Привет, я Кери!
            </AnnouncementText>
            <AnnouncementDogWrapper>
                <AnnouncementDog src="/images/dog.gif"/>
            </AnnouncementDogWrapper>
            <AnnouncementLogoWrapper>
                <AnnouncementLogo src="/myline-logo.png"/>
            </AnnouncementLogoWrapper>
           <AnnouncementSecondText>
                Скоро увидимся!
           </AnnouncementSecondText>
        </AnnouncementWrapper>
    )
}


export default Announcement