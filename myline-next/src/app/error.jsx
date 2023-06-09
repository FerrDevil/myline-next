"use client"

import { useRouter } from "next/navigation"
import { NotFoundBackLink, NotFoundErrorAdditionalMessage, NotFoundErrorHeader, NotFoundErrorMessage, NotFoundMain } from "./styles"

export default function ErrorHandler({error, reset}){
  const router = useRouter()
    return(
      <NotFoundMain>
        <NotFoundErrorHeader>500</NotFoundErrorHeader>
        <NotFoundErrorMessage>УПС!! Кажется, что-то пошло не так...</NotFoundErrorMessage>
        <NotFoundErrorAdditionalMessage>Данная страница заболела и сегодня не выйдет.</NotFoundErrorAdditionalMessage>
        <NotFoundBackLink onClick={() => router.back()} href="/">Вернуться назад</NotFoundBackLink>

      </NotFoundMain>
    )
  }