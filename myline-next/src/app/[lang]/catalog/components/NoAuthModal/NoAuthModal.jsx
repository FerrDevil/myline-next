"use client"

import Modal from "@/components/Modal/Modal"
import { useParams } from "next/navigation"
import { AuthorizationButtons, LoginLink, NoAuthModalContainer, NoAuthModalDescription, NoAuthModalHeader, NoAuthModalWrapper, RegisterLink } from "./styles"

const NoAuthModal = ({isOpen, setOpen, dictionary=null}) => {
  const { lang } = useParams()
  return (
    <Modal isOpen={isOpen} setOpen={setOpen}>
      <NoAuthModalWrapper>
        <NoAuthModalHeader>{dictionary.modalTitle}</NoAuthModalHeader>
        <NoAuthModalContainer>
          <NoAuthModalDescription>
          {dictionary.caution}
          </NoAuthModalDescription>
          <AuthorizationButtons>
            <LoginLink href={`/${lang}/signIn`}>{dictionary.signInLink}</LoginLink>
            <RegisterLink href={`/${lang}/register`}>{dictionary.registerLink}</RegisterLink>
          </AuthorizationButtons>
        </NoAuthModalContainer>
      </NoAuthModalWrapper>
    </Modal>
  )
}

export default NoAuthModal