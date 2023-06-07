"use client"
import { NotFoundBackLink, NotFoundErrorAdditionalMessage, NotFoundErrorHeader, NotFoundErrorMessage, NotFoundMain } from "./styles";
import { useRouter } from "next/navigation";

export default function NotFound(){
  const router = useRouter()
    return(
        <NotFoundMain>
          <NotFoundErrorHeader>404</NotFoundErrorHeader>
          <NotFoundErrorMessage>УПС!! Кажется, что-то пошло не так...</NotFoundErrorMessage>
          <NotFoundErrorAdditionalMessage>Данная страница заболела и сегодня не выйдет.</NotFoundErrorAdditionalMessage>
          <NotFoundBackLink onClick={() => router.back()} href="/">Вернуться назад</NotFoundBackLink>

        </NotFoundMain>
    )
}