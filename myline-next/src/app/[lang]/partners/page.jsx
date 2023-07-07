import PartnersMap from "./components/PartnersMap/PartnersMap";
import { PartnersPageDescription, PartnersPageHeader, PartnersPageWrapper } from "@/app/[lang]/partners/styles";
import { getPartnersDictionary } from "./dictionaries/dictionaries";

export default async function PartnersPage({params: {lang}}){

    const dictionary = await getPartnersDictionary(lang)

    return (
        <PartnersPageWrapper>
            <PartnersPageHeader>{dictionary.pageTitle}</PartnersPageHeader>
            <PartnersPageDescription>{dictionary.pageDescription}</PartnersPageDescription>
            
            <PartnersMap />
            
        </PartnersPageWrapper>
    )
}