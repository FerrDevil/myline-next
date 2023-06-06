import { AnnouncementDog, AnnouncementDogWrapper, AnnouncementImage, AnnouncementImageWrapper, AnnouncementLogo, AnnouncementLogoWrapper, AnnouncementMobileImage, AnnouncementSecondText, AnnouncementText, AnnouncementWrapper } from "./styles"

const Announcement = () => {
    return(
        <AnnouncementWrapper>
            <AnnouncementText>Скоро увидимся!</AnnouncementText>
            <AnnouncementImageWrapper>
                <AnnouncementImage src="/images/announcement-bg.png"/>
                <AnnouncementMobileImage src="/images/announcement-bg-mobile.png"/>
            </AnnouncementImageWrapper>
        </AnnouncementWrapper>
    )
}


export default Announcement