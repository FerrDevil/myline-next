import { ContactInformationEmailSVG, ContactInformationPhoneCallSVG, ContactInformationTelephoneSVG, ContactPageAddress, ContactPageAddressSVG, ContactPageAddresses, ContactPageAddressesContainer, ContactPageAddressesHeader, ContactPageAddressesWrapper, ContactPageContactInformation, ContactPageContactInformationContact, ContactPageContactInformationContactWrapper, ContactPageContactInformationContacts, ContactPageContactInformationText, ContactPageContacts, ContactPageContainer, ContactPageFacebookLinkSVG, ContactPageFreePhoneCall, ContactPageGisSVG, ContactPageHeader, ContactPageInstagramLinkSVG, ContactPageReviewsButton, ContactPageReviewsButtons, ContactPageReviewsContainer, ContactPageReviewsHeader, ContactPageReviewsWrapper, ContactPageSocialsContainer, ContactPageSocialsLink, ContactPageSocialsLinks, ContactPageSocialsLinksContainer, ContactPageSocialsText, ContactPageTelegramSVG, ContactPageTwitterLinkSVG, ContactPageVKLinkSVG, ContactPageViberSVG, ContactPageWhatsAppSVG, ContactPageWrapper, ContactPageYandexSVG, ContactPageYoutubeLinkSVG } from "@/app/[lang]/contacts/styles"

import Maps from "@/app/[lang]/contacts/components/Maps/Maps"
import { getContactsDictionary } from "@/app/[lang]/contacts/dictionaries/dictionaries"
import CallMeModal from "./components/CallMeModal/CallMeModal"

export default async function ContactsPage({params: {lang}})  {
  const dictionary = await getContactsDictionary(lang)
    
    return (
      <ContactPageWrapper>
        <ContactPageHeader>{dictionary.pageTitle}</ContactPageHeader>
        <ContactPageContainer>
            <ContactPageContacts>
                <ContactPageSocialsContainer>
                  <ContactPageSocialsLinks>
                    <ContactPageSocialsLinksContainer>
                      <ContactPageSocialsLink target="_blank" href="https://wa.me/79048304445"><ContactPageWhatsAppSVG/></ContactPageSocialsLink>
                      <ContactPageSocialsLink target="_blank" href="https://t.me/+79048304445"><ContactPageTelegramSVG/></ContactPageSocialsLink>
                      <ContactPageSocialsLink target="_blank" href="https://viber.click/79048304445"><ContactPageViberSVG/></ContactPageSocialsLink>
                      
                    </ContactPageSocialsLinksContainer>
                    <ContactPageSocialsText $isLink={false}>+7 (904) 830-44-45</ContactPageSocialsText>
                  </ContactPageSocialsLinks>

                  <ContactPageSocialsLinks >
                    <ContactPageSocialsLinksContainer>
                      <ContactPageSocialsLink target="_blank" href="https://www.youtube.com/@Myline.inform" ><ContactPageYoutubeLinkSVG/></ContactPageSocialsLink>
                      <ContactPageSocialsLink target="_blank" href="https://vk.com/mylinegroup"><ContactPageVKLinkSVG/></ContactPageSocialsLink>
                    </ContactPageSocialsLinksContainer>
                  </ContactPageSocialsLinks>

                </ContactPageSocialsContainer>

                <ContactPageContactInformation>
                  <ContactPageContactInformationContacts>
                    <ContactPageContactInformationContactWrapper>
                      <ContactPageContactInformationContact>
                        <ContactInformationPhoneCallSVG/>
                        <span>+7 (904) 830-44-45</span>
                      </ContactPageContactInformationContact>
                      <ContactPageContactInformationText>{dictionary.workingTime}</ContactPageContactInformationText>
                    </ContactPageContactInformationContactWrapper>
                    <ContactPageContactInformationContactWrapper>
                      <ContactPageContactInformationContact>
                        <ContactInformationTelephoneSVG/>
                        <span>+7 (3412) 333-969</span>
                      </ContactPageContactInformationContact>
                      <ContactPageContactInformationText>{dictionary.workingTime}</ContactPageContactInformationText>
                    </ContactPageContactInformationContactWrapper>
                    <ContactPageContactInformationContact>
                      <ContactInformationEmailSVG/>
                      <span>myline.info@yandex.ru</span>
                    </ContactPageContactInformationContact>
                  </ContactPageContactInformationContacts>
                  
                </ContactPageContactInformation>
                <CallMeModal dictionary={dictionary.callMeForm}/>

                <ContactPageAddressesWrapper>
                  <ContactPageAddressesContainer>
                    <ContactPageAddressesHeader>{dictionary.headquarters}:</ContactPageAddressesHeader>
                    <ContactPageAddresses>
                      <ContactPageAddress>
                        <ContactPageAddressSVG/>
                        <span>г. Ижевск, ул. Удмуртская, д. 304, литер Н, офис 309</span>
                      </ContactPageAddress>
                    </ContactPageAddresses>
                  </ContactPageAddressesContainer>
                </ContactPageAddressesWrapper>

                <ContactPageReviewsWrapper>
                  <ContactPageReviewsContainer>
                    <ContactPageReviewsHeader>{dictionary.reviews}:</ContactPageReviewsHeader>
                    <ContactPageReviewsButtons>
                      <ContactPageReviewsButton>
                        <ContactPageYandexSVG/>
                      </ContactPageReviewsButton>
                      <ContactPageReviewsButton>
                        <ContactPageGisSVG/>
                      </ContactPageReviewsButton>
                    </ContactPageReviewsButtons>
                  </ContactPageReviewsContainer>
                </ContactPageReviewsWrapper>

            </ContactPageContacts>
            
            <Maps/>
        </ContactPageContainer>
      </ContactPageWrapper>
    )
  }
  