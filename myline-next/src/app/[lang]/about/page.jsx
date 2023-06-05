
import CallMeModal from "./components/CallMeModal/CallMeModal"
import JoinUsModal from "./components/JoinUsModal/JoinUsModal"
import { getAboutDictionary } from "./dictionaries/dictionaries"
import { AboutPageCard, AboutPageCardDescription, AboutPageCardHeader, AboutPageCardIconWrapper, AboutPageCards, AboutPageContainer, AboutPageDecriptionList, AboutPageDescription, AboutPageDescriptions, AboutPageHeader, AboutPageJoinUsMessage, AboutPageJoinUsWrapper, AboutPageMainContent, AboutPageMainContentWrapper, HeadsetIconSVG, LikeIconSVG, TimeManagementIconSVG, ToothBracesIconSVG } from "./styles"

export default async function AboutPage({params: { lang }}) {

  const dictionary = await getAboutDictionary(lang)

  return (
    <AboutPageContainer>
      <CallMeModal dictionary={dictionary.callMeForm}/>
      <AboutPageMainContentWrapper>
        <AboutPageHeader>{dictionary.pageTitle}</AboutPageHeader>
        <AboutPageMainContent>
          <AboutPageDescriptions>
            <AboutPageDescription $isBold={true}>
              {dictionary.mainDescription}
            </AboutPageDescription>

            <AboutPageDecriptionList>
              <li>
                <span>{dictionary.descriptionListFirstItem}</span>
              </li>
              <li>
                <span>
                  {dictionary.descriptionListSecondItem}
                </span>
              </li>
            </AboutPageDecriptionList>
            <AboutPageDescription>
              {dictionary.secondDescription}
            </AboutPageDescription>
          </AboutPageDescriptions>

          <AboutPageJoinUsWrapper>
            <AboutPageJoinUsMessage>
              Чтобы стать частью нашей команды, оставьте заявку и мы свяжемся с вами!
            </AboutPageJoinUsMessage>
            <JoinUsModal dictionary={dictionary.joinUsForm}/>
          </AboutPageJoinUsWrapper>
        </AboutPageMainContent>
        

      </AboutPageMainContentWrapper>
      <AboutPageCards>
        <AboutPageCard>
            <AboutPageCardIconWrapper>
              <ToothBracesIconSVG/>
            </AboutPageCardIconWrapper>
            <AboutPageCardHeader> {dictionary.firstCardTitle} </AboutPageCardHeader>
            <AboutPageCardDescription> {dictionary.firstCardDescription} </AboutPageCardDescription>
          </AboutPageCard>

          <AboutPageCard>
            <AboutPageCardIconWrapper>
              <LikeIconSVG/>
            </AboutPageCardIconWrapper>
            <AboutPageCardHeader> {dictionary.secondCardTitle} </AboutPageCardHeader>
            <AboutPageCardDescription> {dictionary.secondCardDescription} </AboutPageCardDescription>
          </AboutPageCard>

          <AboutPageCard>
            <AboutPageCardIconWrapper>
              <TimeManagementIconSVG/>
            </AboutPageCardIconWrapper>
            <AboutPageCardHeader> {dictionary.thirdCardTitle} </AboutPageCardHeader>
            <AboutPageCardDescription> {dictionary.thirdCardDescription} </AboutPageCardDescription>
          </AboutPageCard>

          <AboutPageCard $isAlternated={true}>
            <AboutPageCardIconWrapper>
              <HeadsetIconSVG/>
            </AboutPageCardIconWrapper>
            <AboutPageCardHeader> {dictionary.fourthCardTitle} </AboutPageCardHeader>
            <AboutPageCardDescription> {dictionary.fourthCardDescription} </AboutPageCardDescription>
          </AboutPageCard>
      </AboutPageCards>
    </AboutPageContainer>
  )
} 