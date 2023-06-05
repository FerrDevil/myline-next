import { cookies } from "next/dist/client/components/headers"
import { ProfileLayoutDescription, ProfileLayoutHeader, ProfileLayoutLinksWrapper, ProfileLayoutPageWrapper, ProfileLayoutWrapper } from "./styles"
import ProfileNavigationLink from "./ProfileNavigationLink"
import { getProfileDictionary } from "../../dictionaries/dictionaries"


const ProfileLayout = async ({ children }) => {
    const lang = cookies().get("MYLINE-LOCALE-COOKIE").value
    const dictionary = (await getProfileDictionary(lang)).profileLayout
    return(
        <ProfileLayoutWrapper>
            <ProfileLayoutHeader>{dictionary.greeting}, Артём!</ProfileLayoutHeader>
            <ProfileLayoutDescription>{dictionary.layoutDescription}</ProfileLayoutDescription>
            <ProfileLayoutLinksWrapper>
                <ProfileNavigationLink link={`/${lang}/profile/appointment`}>{dictionary.appointment}</ProfileNavigationLink>
                <ProfileNavigationLink link={`/${lang}/profile/treatment`}>{dictionary.treatment}</ProfileNavigationLink>
                <ProfileNavigationLink link={`/${lang}/profile/instructions`}>{dictionary.instructions}</ProfileNavigationLink>
            </ProfileLayoutLinksWrapper>
            <ProfileLayoutPageWrapper>
                { children }
            </ProfileLayoutPageWrapper>
            
        </ProfileLayoutWrapper>
    )
}

export default ProfileLayout