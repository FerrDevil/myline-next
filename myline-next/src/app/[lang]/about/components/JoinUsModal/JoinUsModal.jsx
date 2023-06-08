"use client"

import Modal from "@/components/Modal/Modal"
import { useEffect, useState } from "react"
import { AboutPageJoinUsPopupButton, JoinUsForm, JoinUsFormContainer, JoinUsFormHeader, JoinUsFormSubmitButton } from "./styles"
import InputField from "../../../../../components/InputField/InputField"
import CheckboxField from "../../../../../components/CheckboxField/CheckboxField"

export default function JoinUsModal({dictionary}) {
    const [isOpen, setOpen] = useState(false)

    const [joinUsInfo, setJoinUsInfo] = useState({
        name: " ",
        phoneNumber: " ",
        agreement: false
    })

    const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true)

    const changeFieldbyName = (fieldName) => {
        return (event) => {
            setJoinUsInfo(prev => ({...prev, [fieldName]: event.target.value}))
        }
    }

    const changeCheckboxbyName = (fieldName) => {
        return (event) => {
            setJoinUsInfo(prev => ({...prev, [fieldName]: event.target.checked}))
        }
    }

    const validationErrors = {
        name:{
            noInput: joinUsInfo.name.length === 0 ,
            notValidName: joinUsInfo.name.trim().length > 0 && (joinUsInfo.name.match(/[a-zа-я ]+/gi) === null || joinUsInfo.name.match(/[a-zа-я ]+/gi)[0] !== joinUsInfo.name)
        },
        phoneNumber:{
            maxLengthLimit: joinUsInfo.phoneNumber.length > 11,
            noInput: joinUsInfo.phoneNumber.length === 0 ,
            notValidPhoneNumber: joinUsInfo.phoneNumber.trim().length > 0 && (joinUsInfo.phoneNumber.match(/[0-9]+/gi) === null || joinUsInfo.phoneNumber.match(/[a-z0-9]+/gi)[0] !== joinUsInfo.phoneNumber)
        },
        agreement:{
            noInput: !joinUsInfo.agreement,
        }
    }

    useEffect(
        () => {
        
            if (
                validationErrors.name.noInput || validationErrors.name.notValidName || joinUsInfo.name.trim().length === 0 ||
                validationErrors.phoneNumber.noInput || validationErrors.phoneNumber.notValidPhoneNumber || validationErrors.phoneNumber.maxLengthLimit || joinUsInfo.phoneNumber.trim().length === 0 ||
                validationErrors.agreement.noInput
            ){

                setSubmitButtonDisabled(true)
                return
            }
            setSubmitButtonDisabled(false) 
        }, [joinUsInfo]
    )

    const sendForm = (event) => {
        event.preventDefault()
    }
    return(
        <>
            <AboutPageJoinUsPopupButton onClick={() => {setOpen(true)}}>Оставить заявку</AboutPageJoinUsPopupButton>
            <Modal isOpen={isOpen} setOpen={setOpen}>
                <JoinUsForm>
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
                            value={joinUsInfo.value}
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