"use client"

import Modal from "@/components/Modal/Modal"
import { useParams } from "next/navigation"
import { ProcedeLink, CloseButton, ConfirmationModalWrapper, ConfirmationModalHeader, ConfirmationModalContainer, ConfirmationModalDescription, ProcedeButtons, ConfirmationModalDescriptions, ConfirmationModalRemark } from "./styles"

const ConfirmationModal = ({isOpen, setOpen, dictionary=null}) => {
  const { lang } = useParams()
  return (
    <Modal isOpen={isOpen} setOpen={setOpen}>
      <ConfirmationModalWrapper>
        <ConfirmationModalHeader>{dictionary.modalTitle}</ConfirmationModalHeader>
        <ConfirmationModalContainer>
          <ConfirmationModalDescriptions>
            <ConfirmationModalDescription>
              {dictionary.firstCaution}
            </ConfirmationModalDescription>
            <ConfirmationModalRemark>
              {dictionary.secondCaution}
            </ConfirmationModalRemark>
          </ConfirmationModalDescriptions>
          
          <ProcedeButtons>
            <ProcedeLink href={`/${lang}/chooseDoctor`}> {dictionary.procedeButton} </ProcedeLink>
            <CloseButton onClick={() => {setOpen(false)}}> {dictionary.closeButton} </CloseButton>
          </ProcedeButtons>
        </ConfirmationModalContainer>
      </ConfirmationModalWrapper>
    </Modal>
  )
}

export default ConfirmationModal