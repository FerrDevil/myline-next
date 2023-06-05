"use client"

import Modal from "@/components/Modal/Modal"
import { useEffect, useState } from "react"
import { AboutPageCallMeSVG, AboutPageCallMeText, AboutPageCallMeWrapper, AboutPageJoinUsPopupButton, JoinUsForm, JoinUsFormContainer, JoinUsFormHeader, JoinUsFormSubmitButton } from "./styles"
import InputField from "../InputField/InputField"
import CheckboxField from "../CheckboxField/CheckboxField"

export default function CallMeModal({dictionary}) {
    const [isOpen, setOpen] = useState(false)

    const [callMeInfo, setCallMeUsInfo] = useState({
        name: " ",
        phoneNumber: " ",
        agreement: false
    })

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
            maxLengthLimit: callMeInfo.phoneNumber.length > 11,
            noInput: callMeInfo.phoneNumber.length === 0 ,
            notValidPhoneNumber: callMeInfo.phoneNumber.trim().length > 0 && (callMeInfo.phoneNumber.match(/[0-9]+/gi) === null || callMeInfo.phoneNumber.match(/[a-z0-9]+/gi)[0] !== callMeInfo.phoneNumber)
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

    const sendForm = (event) => {
        event.preventDefault()
    }
    return(
        <>
            <AboutPageCallMeWrapper onClick={() => {setOpen(true)}}>
                <AboutPageCallMeSVG/>
                <AboutPageCallMeText>Перезвоните мне</AboutPageCallMeText>
            </AboutPageCallMeWrapper>
            <Modal isOpen={isOpen} setOpen={setOpen}>
                <JoinUsForm>
                    <JoinUsFormHeader>{dictionary.formTitle}</JoinUsFormHeader>
                    <JoinUsFormContainer>
                        <InputField 
                            name="name" 
                            onChange={changeFieldbyName("name")} 
                            placeholder={dictionary.name} type="tel" 
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
                        />
                        <CheckboxField 
                            onChange={changeCheckboxbyName("agreement")} 
                            label={dictionary.agreement} 
        
                        />
                        <JoinUsFormSubmitButton disabled={isSubmitButtonDisabled} onClick={sendForm}>
                            Отправить
                        </JoinUsFormSubmitButton>
                    </JoinUsFormContainer>
                </JoinUsForm>
            </Modal>
        </>
    )
}