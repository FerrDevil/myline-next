
import JoinUsModal from "./components/JoinUsModal/JoinUsModal"
import { getAboutDictionary } from "./dictionaries/dictionaries"
import { AboutPageCard, AboutPageCardDescription, AboutPageCardHeader, AboutPageCardIconWrapper, AboutPageCards, AboutPageContainer, AboutPageDecriptionList, AboutPageDescription, AboutPageDescriptions, AboutPageHeader, AboutPageJoinUsLogo, AboutPageJoinUsLogoWrapper, AboutPageJoinUsMessage, AboutPageJoinUsWrapper, AboutPageMainContent, AboutPageMainContentWrapper, HeadsetIconSVG, JoyIconSVG, LikeIconSVG, TechnologiesIconSVG, TimeIconSVG, TimeManagementIconSVG, ToothBracesIconSVG } from "./styles"

export default async function AboutPage({params: { lang }}) {

  const dictionary = await getAboutDictionary(lang)

  return (
    <AboutPageContainer>
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
              <p>сотрудничество с</p>
              <AboutPageJoinUsLogoWrapper>
                <AboutPageJoinUsLogo/>
              </AboutPageJoinUsLogoWrapper>
            </AboutPageJoinUsMessage>
            <JoinUsModal dictionary={dictionary.joinUsForm}/>
          </AboutPageJoinUsWrapper>
        </AboutPageMainContent>
        

      </AboutPageMainContentWrapper>
      <AboutPageCards>
        <AboutPageCard>
            <AboutPageCardIconWrapper>
              <TechnologiesIconSVG/>
            </AboutPageCardIconWrapper>
            <AboutPageCardHeader> {dictionary.firstCardTitle} </AboutPageCardHeader>
            <AboutPageCardDescription> {dictionary.firstCardDescription} </AboutPageCardDescription>
          </AboutPageCard>

          <AboutPageCard>
            <AboutPageCardIconWrapper>
              <TimeIconSVG/>
            </AboutPageCardIconWrapper>
            <AboutPageCardHeader> {dictionary.secondCardTitle} </AboutPageCardHeader>
            <AboutPageCardDescription> {dictionary.secondCardDescription} </AboutPageCardDescription>
          </AboutPageCard>

          <AboutPageCard>
            <AboutPageCardIconWrapper>
              <LikeIconSVG/>
            </AboutPageCardIconWrapper>
            <AboutPageCardHeader> {dictionary.thirdCardTitle} </AboutPageCardHeader>
            <AboutPageCardDescription> {dictionary.thirdCardDescription} </AboutPageCardDescription>
          </AboutPageCard>

          <AboutPageCard $isAlternated={true}>
            <AboutPageCardIconWrapper>
              <JoyIconSVG/>
            </AboutPageCardIconWrapper>
            <AboutPageCardHeader> {dictionary.fourthCardTitle} </AboutPageCardHeader>
            <AboutPageCardDescription> {dictionary.fourthCardDescription} </AboutPageCardDescription>
          </AboutPageCard>
      </AboutPageCards>
    </AboutPageContainer>
  )
} 