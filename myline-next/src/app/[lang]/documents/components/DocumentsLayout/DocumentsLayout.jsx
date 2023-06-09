import { cookies } from "next/dist/client/components/headers"
import { DocumentsLayoutLinksWrapper, DocumentsLayoutPageWrapper, DocumentsLayoutWrapper} from "./styles"
import { getProfileDictionary } from "@/app/[lang]/documents/dictionaries/dictionaries"
import DocumentsNavigationLink from "./DocumentsNavigationLink"


const DocumentsLayout = async ({ children }) => {
    const lang = cookies().get("MYLINE-LOCALE-COOKIE").value
    const dictionary = (await getProfileDictionary(lang)).documentsLayout
    return(
        <DocumentsLayoutWrapper>
            <DocumentsLayoutLinksWrapper>
                <DocumentsNavigationLink link={`/${lang}/documents/confidentialityPolicy`}>{dictionary.confidentialityPolicy}</DocumentsNavigationLink>
                <DocumentsNavigationLink link={`/${lang}/documents/qualityAssurance`}>{dictionary.qualityAssurance}</DocumentsNavigationLink>
                <DocumentsNavigationLink link={`/${lang}/documents/licences`}>{dictionary.licences}</DocumentsNavigationLink>
            </DocumentsLayoutLinksWrapper>
            <DocumentsLayoutPageWrapper>
                { children }
            </DocumentsLayoutPageWrapper>
            
        </DocumentsLayoutWrapper>
    )
}

export default DocumentsLayout