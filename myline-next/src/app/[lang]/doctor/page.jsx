
import JoinUsModal from "./components/JoinUsModal/JoinUsModal"
import { getDoctorDictionary } from "./dictionaries/dictionaries"
import { AboutPageCard, AboutPageCardDescription, AboutPageCardHeader, AboutPageCardIconWrapper, AboutPageCards, AboutPageContainer, AboutPageDecriptionList, AboutPageDescription, AboutPageDescriptions, AboutPageHeader, AboutPageJoinUsLogo, AboutPageJoinUsLogoWrapper, AboutPageJoinUsMessage, AboutPageJoinUsWrapper, AboutPageMainContent, AboutPageMainContentWrapper, AlignerIconSVG, DeliveryIconSVG, ScanIconSVG, ScheduleIconSVG, } from "./styles"

export default async function AboutPage({params: { lang }}) {

  const dictionary = await getDoctorDictionary(lang)

  return (
    <AboutPageContainer>
      <AboutPageMainContentWrapper>
        <AboutPageHeader>{dictionary.pageTitle}</AboutPageHeader>
        <AboutPageMainContent>
          <AboutPageDescriptions>
            <AboutPageDescription $isBold={true}>
              {dictionary.mainDescription}
            </AboutPageDescription>
            <AboutPageDescription>
              {dictionary.list.title}
            </AboutPageDescription>

            <AboutPageDecriptionList>
              {dictionary.list.items.map((item, index) => (
                <li key={index}>
                  <span>{item}</span>
                </li>
              ))}
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
              <ScanIconSVG/>
            </AboutPageCardIconWrapper>
            <AboutPageCardHeader> {dictionary.cards[0].title} </AboutPageCardHeader>
            <AboutPageCardDescription> {dictionary.cards[0].description} </AboutPageCardDescription>
          </AboutPageCard>

          <AboutPageCard>
            <AboutPageCardIconWrapper>
              <ScheduleIconSVG/>
            </AboutPageCardIconWrapper>
            <AboutPageCardHeader> {dictionary.cards[1].title} </AboutPageCardHeader>
            <AboutPageCardDescription> {dictionary.cards[1].description} </AboutPageCardDescription>
          </AboutPageCard>

          <AboutPageCard>
            <AboutPageCardIconWrapper>
              <AlignerIconSVG/>
            </AboutPageCardIconWrapper>
            <AboutPageCardHeader> {dictionary.cards[2].title} </AboutPageCardHeader>
            <AboutPageCardDescription> {dictionary.cards[2].description} </AboutPageCardDescription>
          </AboutPageCard>

          <AboutPageCard >
            <AboutPageCardIconWrapper>
              <DeliveryIconSVG/>
            </AboutPageCardIconWrapper>
            <AboutPageCardHeader> {dictionary.cards[3].title} </AboutPageCardHeader>
            <AboutPageCardDescription> {dictionary.cards[3].description} </AboutPageCardDescription>
          </AboutPageCard>
      </AboutPageCards>
    </AboutPageContainer>
  )
} 