
import CallMeModal from "./components/CallMeModal/CallMeModal"
import { getAboutDictionary } from "./dictionaries/dictionaries"
import { AboutPageAlignerBG, AboutPageAlignerBGWrapper, AboutPageCard, AboutPageCardDescription, AboutPageCardHeader, AboutPageCardIconWrapper, AboutPageCards, AboutPageContainer, AboutPageDecriptionList, AboutPageDescription, AboutPageDescriptions, AboutPageHeader, AboutPageJoinUsLogo, AboutPageJoinUsLogoWrapper, AboutPageJoinUsMessage, AboutPageJoinUsWrapper, AboutPageLink, AboutPageLinkWrapper, AboutPageMainContent, AboutPageMainContentWrapper, HeadsetIconSVG, JoyIconSVG, LikeIconSVG, TechnologiesIconSVG, TimeIconSVG, TimeManagementIconSVG, ToothBracesIconSVG } from "./styles"

export default async function AboutPage({params: { lang }}) {

  const dictionary = await getAboutDictionary(lang)

  const modal = (
    <AboutPageLinkWrapper>
      <CallMeModal/>
      <AboutPageAlignerBGWrapper>
        <AboutPageAlignerBG/>
      </AboutPageAlignerBGWrapper>
    </AboutPageLinkWrapper>
  )

  const modalMobile = (
    <AboutPageLinkWrapper $isMobile={true}>
      <CallMeModal/>
      <AboutPageAlignerBGWrapper>
        <AboutPageAlignerBG/>
      </AboutPageAlignerBGWrapper>
    </AboutPageLinkWrapper>
  )

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
          {modal}
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
      {modalMobile}
    </AboutPageContainer>
  )
} 