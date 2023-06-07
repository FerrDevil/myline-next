import { ContactInformationEmailSVG, ContactInformationPhoneCallSVG, ContactInformationTelephoneSVG, ContactPageAddress, ContactPageAddressSVG, ContactPageAddresses, ContactPageAddressesContainer, ContactPageAddressesHeader, ContactPageAddressesWrapper, ContactPageContactInformation, ContactPageContactInformationContact, ContactPageContactInformationContactWrapper, ContactPageContactInformationContacts, ContactPageContactInformationText, ContactPageContacts, ContactPageContainer, ContactPageFacebookLinkSVG, ContactPageFreePhoneCall, ContactPageHeader, ContactPageInstagramLinkSVG, ContactPageSocialsContainer, ContactPageSocialsLink, ContactPageSocialsLinks, ContactPageSocialsLinksContainer, ContactPageSocialsText, ContactPageTelegramSVG, ContactPageTwitterLinkSVG, ContactPageVKLinkSVG, ContactPageViberSVG, ContactPageWhatsAppSVG, ContactPageWrapper, ContactPageYoutubeLinkSVG } from "@/services/contacts/styles/contactsPageStyles"

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
                  <ContactPageSocialsLinks>
                    <ContactPageSocialsLinksContainer>
                      <ContactPageSocialsLink><ContactPageWhatsAppSVG/></ContactPageSocialsLink>
                      <ContactPageSocialsLink><ContactPageTelegramSVG/></ContactPageSocialsLink>
                      <ContactPageSocialsLink><ContactPageViberSVG/></ContactPageSocialsLink>
                      
                    </ContactPageSocialsLinksContainer>
                    <ContactPageSocialsText $isLink={false}>+7 (904) 830-44-45</ContactPageSocialsText>
                  </ContactPageSocialsLinks>
                  <ContactPageSocialsLinks target="_blank" href="https://www.youtube.com/@Myline.inform">
                    <ContactPageSocialsLinksContainer>
                      <ContactPageSocialsLink ><ContactPageYoutubeLinkSVG/></ContactPageSocialsLink>
                    </ContactPageSocialsLinksContainer>
                    <ContactPageSocialsText $isLink={true}>https://www.youtube.com/@Myline.inform</ContactPageSocialsText>
                  </ContactPageSocialsLinks>
                  <ContactPageSocialsLinks target="_blank" href="https://vk.com/mylinegroup">
                    <ContactPageSocialsLinksContainer >
                      <ContactPageSocialsLink><ContactPageVKLinkSVG/></ContactPageSocialsLink>
                    </ContactPageSocialsLinksContainer>
                    <ContactPageSocialsText $isLink={true}>https://vk.com/mylinegroup</ContactPageSocialsText>
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
                </ContactPageAddressesWrapper>
            </ContactPageContacts>
            
            <Maps/>
        </ContactPageContainer>
      </ContactPageWrapper>
    )
  }
  