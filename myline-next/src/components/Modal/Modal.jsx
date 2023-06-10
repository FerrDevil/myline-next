"use client"
import { useEffect, useRef } from "react"
import { ModalDialog, ModalDialogBackdrop, ModalDialogContent } from "./styles"

const Modal = ({children, isOpen, setOpen}) => {
  const modal = useRef(null)
  useEffect(() => {
    if(isOpen){
      modal.current.showModal()
      document.body.style.overflowY = "hidden"
    }
    else{
      modal.current.close()
      document.body.style.overflowY = "auto"
    }
  }, [isOpen])

  const closeModal = (event) => {
    setOpen(false)
  }
  return(
    <ModalDialog $isOpen={isOpen} ref={modal} >
      <ModalDialogBackdrop onClick={closeModal}/>
      <ModalDialogContent >
        {children}
      </ModalDialogContent>
    </ModalDialog>
  )
} 

export default Modal