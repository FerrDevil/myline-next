"use client"

import Modal from "@/components/Modal/Modal"
import {ArticleModalContainer, ArticleModalContentWrapper, ArticleModalHeader, ArticleModalWrapper } from "./styles"
import { useEffect, useState } from "react"

const ArticleModal = ({currentArticleIndex, setCurrentArticleIndex, articles}) => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    if (!isOpen){
      setCurrentArticleIndex(-1)
    }
  }, [isOpen])

  useEffect(() => {
      setOpen(currentArticleIndex > -1)
  }, [currentArticleIndex]
  )

  const article = articles[currentArticleIndex]
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

export default ArticleModal