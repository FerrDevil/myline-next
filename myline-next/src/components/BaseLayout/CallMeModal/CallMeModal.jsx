"use client"

import Modal from "@/components/Modal/Modal"
import { useEffect, useState } from "react"
import { AboutPageCallMeSVG, AboutPageCallMeText, AboutPageCallMeWrapper, AboutPageJoinUsPopupButton, JoinUsForm, JoinUsFormContainer, JoinUsFormHeader, JoinUsFormSubmitButton } from "./styles"
import InputField from "../../InputField/InputField"
import CheckboxField from "../../CheckboxField/CheckboxField"
import { useNewMessage } from "@/components/ToastMessage/ToastMessageProvider"
import ToastMessage from "@/components/ToastMessage/ToastMessage"
import FormSubmit from "@/components/FormSubmit/FormSubmit"

export default function CallMeModal() {
    const [isOpen, setOpen] = useState(false)

    const [callMeInfo, setCallMeUsInfo] = useState({
        name: " ",
        phoneNumber: " ",
        agreement: false
    })

    const setUnknownError = useNewMessage("Что-то пошло не так, повторите еще раз", true, 2000)
	const setConnectionError = useNewMessage("Произошли некие неполадки, попробуйте снова", true, 2000)
	const setSuccess = useNewMessage("Заявка успешно отправлена", false, 2000)

    const [isResponseLoading, setResponseLoading] = useState(false)

    const dictionary = {
        formTitle: "Оставить заявку",
        name : "Ваше имя",
        phoneNumber : "Номер телефона",
        agreement : "Согласие на обработку персональных данных",
        required: "Обязательное поле",
        submitButton: "Зарегистрироваться",
        notValidName: "Имя введено некорректно",
        notValidPhoneNumber: "Номер телефона введен некорректно",
        phoneNumberCharsLimitExceeded : "Введенный номер телефона превышает максимальное значение поля"
    }



    const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true)

    const changeFieldbyName = (fieldName) => {
        return (event) => {
            setCallMeUsInfo(prev => ({...prev, [fieldName]: event.target.value}))
        }
    }

    const changeCheckboxbyName = (fieldName) => {
        return (event) => {
            setCallMeUsInfo(prev => ({...prev, [fieldName]: event.target.checked}))
        }
    }

    const validationErrors = {
        name:{
            noInput: callMeInfo.name.length === 0 ,
            notValidName: callMeInfo.name.trim().length > 0 && (callMeInfo.name.match(/[a-zа-я ]+/gi) === null || callMeInfo.name.match(/[a-zа-я ]+/gi)[0] !== callMeInfo.name)
        },
        phoneNumber:{
            noInput: callMeInfo.phoneNumber.length === 0 ,
            notValidPhoneNumber: callMeInfo.phoneNumber.trim().length > 0 && (callMeInfo.phoneNumber.match(/[0-9]/gi)?.length !== 11 || callMeInfo.phoneNumber.length < 18)
        },
        agreement:{
            noInput: !callMeInfo.agreement,
        }
    }

    useEffect(
        () => {
        
            if (
                validationErrors.name.noInput || validationErrors.name.notValidName || callMeInfo.name.trim().length === 0 ||
                validationErrors.phoneNumber.noInput || validationErrors.phoneNumber.notValidPhoneNumber || validationErrors.phoneNumber.maxLengthLimit || callMeInfo.phoneNumber.trim().length === 0 ||
                validationErrors.agreement.noInput
            ){

                setSubmitButtonDisabled(true)
                return
            }
            setSubmitButtonDisabled(false) 
        }, [callMeInfo]
    )

    const sendForm = async (event) => {
        event.preventDefault()
        try{
            setResponseLoading(true)
            const response = await fetch("/api/sendContactForm", {
                method: "POST",
                body: JSON.stringify(callMeInfo)
            })
            if(!response.ok){
                setConnectionError()
                setResponseLoading(false)
                return
            }
            const message = await response.json()
            setSuccess()
            setOpen(false)
        }
        catch(error){
            setUnknownError()
            
        }
        setResponseLoading(false)
    }

    return(
        <>
            <AboutPageCallMeWrapper onClick={() => {setOpen(true)}}>
                <AboutPageCallMeSVG/>
                <AboutPageCallMeText>Перезвоните мне</AboutPageCallMeText>
            </AboutPageCallMeWrapper>
            <Modal isOpen={isOpen} setOpen={setOpen}>
                <JoinUsForm>
                    <ToastMessage/>
                    <JoinUsFormHeader>{dictionary.formTitle}</JoinUsFormHeader>
                    <JoinUsFormContainer>
                        <InputField 
                            name="name" 
                            onChange={changeFieldbyName("name")} 
                            placeholder={dictionary.name}
                            isValid={!(validationErrors.name.noInput || validationErrors.name.notValidName)} 
                            errorMessage={validationErrors.name.noInput && dictionary.required || validationErrors.name.notValidName && dictionary.notValidName || ""}
                        />
                        <InputField 
                            name="phoneNumber" 
                            onChange={changeFieldbyName("phoneNumber")} 
                            placeholder={dictionary.phoneNumber} 
                            type="tel"
                            isValid={!(validationErrors.phoneNumber.noInput || validationErrors.phoneNumber.notValidPhoneNumber || validationErrors.phoneNumber.maxLengthLimit)} 
                            errorMessage={validationErrors.phoneNumber.noInput && dictionary.required || validationErrors.phoneNumber.notValidPhoneNumber && dictionary.notValidPhoneNumber || validationErrors.phoneNumber.maxLengthLimit  && dictionary.phoneNumberCharsLimitExceeded || ""}
                            value={callMeInfo.phoneNumber}
                        />
                        <CheckboxField 
                            onChange={changeCheckboxbyName("agreement")} 
                            label={dictionary.agreement} 
        
                        />
                        <FormSubmit
                            text={"Отправить"} 
                            isLoading={isResponseLoading}
                            disabled={isSubmitButtonDisabled}
                            onClick={sendForm}
                        />
                    </JoinUsFormContainer>
                </JoinUsForm>
            </Modal>
        </>
    )
}