"use client"

import Modal from "@/components/Modal/Modal"
import { useParams } from "next/navigation"
import { AuthorizationButtons, DocumentsModalContainer, DocumentsModalHeader, DocumentsModalIconSVG, DocumentsModalIconWrapper, DocumentsModalLink, DocumentsModalWrapper} from "./styles"

const DocumentsModal = ({isOpen, setOpen}) => {
  const { lang } = useParams()

  const links = [
    {
      id: 1,
      title: "Пользовательское соглашение",
      link: "/pdf/sample.pdf"
    },
    {
      id: 2,
      title: "Политика конфиденциальности",
      link: "/pdf/sample.pdf"
    },
    {
      id: 3,
      title: "Гарантия качества",
      link: "/pdf/sample.pdf"
    },
    {
      id: 4,
      title: "Лицензии и сертификаты",
      link: "/pdf/sample.pdf"
    },
  ]

  return (
    <Modal isOpen={isOpen} setOpen={setOpen}>
      <DocumentsModalWrapper>
        <DocumentsModalHeader>Документы</DocumentsModalHeader>
        <DocumentsModalContainer>
          {
            links.map(link => (
              <DocumentsModalLink target="__blank" key={link.id} href={link.link}>
                <DocumentsModalIconWrapper>
                  <DocumentsModalIconSVG/>
                </DocumentsModalIconWrapper>
                <span>{link.title}</span>
              </DocumentsModalLink>
            ))
          }
          
        </DocumentsModalContainer>
      </DocumentsModalWrapper>
    </Modal>
  )
}

export default DocumentsModal