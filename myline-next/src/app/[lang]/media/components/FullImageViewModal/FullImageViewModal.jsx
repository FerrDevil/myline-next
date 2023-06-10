"use client"

import Modal from "@/components/Modal/Modal"
import { FullImageViewModalImage, FullImageViewModalWrapper } from "./styles"
import { useEffect, useState } from "react"

const FullImageViewModal = ({currentImageIndex, setImageIndex, images}) => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    if (!isOpen){
      setImageIndex(-1)
    }
    
  }, [isOpen])

  useEffect(() => {
      if (currentImageIndex === undefined) return
      setOpen(currentImageIndex > -1)

  }, [currentImageIndex]
  )
  
  return (
    <Modal isOpen={isOpen} setOpen={setOpen}>
      <FullImageViewModalWrapper>
        {currentImageIndex !== undefined && currentImageIndex > -1 && <FullImageViewModalImage src={images[currentImageIndex].image}/>}
      </FullImageViewModalWrapper>
    </Modal>
  )
}


export default FullImageViewModal