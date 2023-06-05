import { ContactInformationEmailSVG, ContactInformationPhoneCallSVG, ContactPageAddress, ContactPageAddressSVG, ContactPageAddresses, ContactPageAddressesContainer, ContactPageAddressesHeader, ContactPageAddressesWrapper, ContactPageContactInformation, ContactPageContactInformationContact, ContactPageContactInformationContactWrapper, ContactPageContactInformationContacts, ContactPageContactInformationText, ContactPageContacts, ContactPageContainer, ContactPageFacebookLinkSVG, ContactPageFreePhoneCall, ContactPageHeader, ContactPageInstagramLinkSVG, ContactPageSocialsContainer, ContactPageSocialsLink, ContactPageSocialsLinksContainer, ContactPageSocialsText, ContactPageTwitterLinkSVG, ContactPageVKLinkSVG, ContactPageWrapper, ContactPageYoutubeLinkSVG } from "@/services/contacts/styles/contactsPageStyles"

import Maps from "@/services/contacts/components/Maps/Maps"
import { getContactsDictionary } from "@/services/contacts/dictionaries/dictionaries"

export default async function ContactsPage({params: {lang}})  {
  const dictionary = await getContactsDictionary(lang)
    
    return (
      <ContactPageWrapper>
        <ContactPageHeader>{dictionary.pageTitle}</ContactPageHeader>
        <ContactPageContainer>
            <ContactPageContacts>
                <ContactPageSocialsContainer>
                    <ContactPageSocialsText> {dictionary.socialsLinks}: </ContactPageSocialsText>
                    <ContactPageSocialsLinksContainer>
                        <ContactPageSocialsLink target="_blank" href="https://twitter.com/"><ContactPageTwitterLinkSVG/></ContactPageSocialsLink>
                        <ContactPageSocialsLink target="_blank" href="https://youtube.com/"><ContactPageYoutubeLinkSVG/></ContactPageSocialsLink>
                        <ContactPageSocialsLink target="_blank" href="https://facebook.com/"><ContactPageFacebookLinkSVG/></ContactPageSocialsLink>
                        <ContactPageSocialsLink target="_blank" href="https://vk.com/mylinegroup"><ContactPageVKLinkSVG/></ContactPageSocialsLink>
                        <ContactPageSocialsLink target="_blank" href="https://instagram.com/"><ContactPageInstagramLinkSVG/></ContactPageSocialsLink>
                    </ContactPageSocialsLinksContainer>
                </ContactPageSocialsContainer>
                <ContactPageContactInformation>
                  <ContactPageContactInformationContacts>
                    <ContactPageContactInformationContactWrapper>
                      <ContactPageContactInformationContact>
                        <ContactInformationPhoneCallSVG/>
                        <span>+7 (928) 670-70-70</span>
                      </ContactPageContactInformationContact>
                      <ContactPageContactInformationText>{dictionary.workingTime}</ContactPageContactInformationText>
                    </ContactPageContactInformationContactWrapper>
                    <ContactPageContactInformationContact>
                      <ContactInformationEmailSVG/>
                      <span>myline.info@yandex.ru</span>
                    </ContactPageContactInformationContact>
                  </ContactPageContactInformationContacts>
                  
                </ContactPageContactInformation>
                <ContactPageFreePhoneCall>{dictionary.freeCall}</ContactPageFreePhoneCall>

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

                  <ContactPageAddressesContainer>
                    <ContactPageAddressesHeader>{dictionary.branches}:</ContactPageAddressesHeader>
                    <ContactPageAddresses>
                      <ContactPageAddress>
                        <ContactPageAddressSVG/>
                        <span>г. Ижевск, ул. Удмуртская, д. 304, литер Н, офис 309</span>
                      </ContactPageAddress>
                    
                      <ContactPageAddress>
                        <ContactPageAddressSVG/>
                        <span>г. Ижевск, ул. Удмуртская, д. 304, литер Н, офис 309</span>
                      </ContactPageAddress>
                    
                      <ContactPageAddress>
                        <ContactPageAddressSVG/>
                        <span>г. Ижевск, ул. Удмуртская, д. 304, литер Н, офис 309</span>
                      </ContactPageAddress>
                    
                      <ContactPageAddress>
                        <ContactPageAddressSVG/>
                        <span>г. Ижевск, ул. Удмуртская, д. 304, литер Н, офис 309</span>
                      </ContactPageAddress>
                    </ContactPageAddresses>
                  </ContactPageAddressesContainer>
                </ContactPageAddressesWrapper>
            </ContactPageContacts>
            
            <Maps/>
        </ContactPageContainer>
      </ContactPageWrapper>
    )
  }
  