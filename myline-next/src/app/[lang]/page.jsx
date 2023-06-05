import { getMainDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import { AuthorizationButtons, LoginLink, MainPageContainer, MainPageHeader, MainPageStatistic, MainPageStatisticCount, MainPageStatisticDescription, MainPageStatistics, RegisterLink, VideoBackground } from "./styles";

export default async function Home({params: { lang }} ) {

  const dictionary = await getMainDictionary(lang)
  return (
      <>
        <MainPageContainer>
          <VideoBackground playsInline autoPlay muted loop  />
          <MainPageHeader>{dictionary.pageTitle}</MainPageHeader>
          <MainPageStatistics>
            <MainPageStatistic>
              <MainPageStatisticCount>10</MainPageStatisticCount>
              <MainPageStatisticDescription>{dictionary.yearsStatistic}</MainPageStatisticDescription>
            </MainPageStatistic>
            <MainPageStatistic>
              <MainPageStatisticCount>1200</MainPageStatisticCount>
              <MainPageStatisticDescription>{dictionary.patientStatistic}</MainPageStatisticDescription>
            </MainPageStatistic>
            <MainPageStatistic>
              <MainPageStatisticCount>25k+</MainPageStatisticCount>
              <MainPageStatisticDescription>{dictionary.doctorStatistic}</MainPageStatisticDescription>
            </MainPageStatistic>
            <MainPageStatistic>
              <MainPageStatisticCount>4</MainPageStatisticCount>
              <MainPageStatisticDescription>{dictionary.countriesStatistic}</MainPageStatisticDescription>
            </MainPageStatistic>
          </MainPageStatistics>
          <AuthorizationButtons>
            <RegisterLink href={`/${lang}/register`}>{dictionary.registerLink}</RegisterLink>
            <LoginLink href={`${lang}/signIn`}>{dictionary.signInLink}</LoginLink>
          </AuthorizationButtons>
        </MainPageContainer>
      </>
      
  )
}