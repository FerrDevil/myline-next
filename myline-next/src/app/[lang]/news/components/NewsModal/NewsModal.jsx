"use client"

import Modal from "@/components/Modal/Modal"
import {ArticleModalContainer, ArticleModalContentWrapper, ArticleModalHeader, ArticleModalWrapper } from "./styles"
import { useEffect, useState } from "react"

const NewsModal = ({currentNewsIndex, setCurrentNewsIndex, news}) => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    if (!isOpen){
      setCurrentNewsIndex(-1)
    }
  }, [isOpen])

  useEffect(() => {
      setOpen(currentNewsIndex > -1)
  }, [currentNewsIndex]
  )

  const article = news[currentNewsIndex]
  return (
    <Modal isOpen={isOpen} setOpen={setOpen}>
      <ArticleModalWrapper>
        <ArticleModalContainer>
          <ArticleModalHeader>{article?.title}</ArticleModalHeader>
          <ArticleModalContentWrapper>
            {article?.article}
          </ArticleModalContentWrapper>
          
        </ArticleModalContainer>
      </ArticleModalWrapper>
    </Modal>
  )
}

export default NewsModal