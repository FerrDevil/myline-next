"use client"
import { useEffect, useRef } from "react"
import { ModalDialog, ModalDialogContent } from "./styles"

const Modal = ({children, isOpen, setOpen}) => {
  const modal = useRef(null)
  useEffect(() => {
    isOpen ? modal.current.showModal() : modal.current.close()
  }, [isOpen])

  const closeModal = (event) => {
    setOpen(false)
  }
  return(
    <ModalDialog $isOpen={isOpen} ref={modal} onClick={closeModal}>
      <ModalDialogContent onClick={event => {event.stopPropagation()}}>
        {children}
      </ModalDialogContent>
    </ModalDialog>
  )
} 

export default Modal