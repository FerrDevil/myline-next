"use client"

import Modal from "@/components/Modal/Modal"
import { useEffect, useState } from "react"
import { AboutPageJoinUsPopupButton, JoinUsForm, JoinUsFormContainer, JoinUsFormHeader, JoinUsFormSubmitButton } from "./styles"
import InputField from "@/components/InputField/InputField"
import CheckboxField from "@/components/CheckboxField/CheckboxField"
import FormSubmit from "@/components/FormSubmit/FormSubmit"
import { useNewMessage } from "@/components/ToastMessage/ToastMessageProvider"


export default function JoinUsModal({dictionary}) {
    const [isOpen, setOpen] = useState(false)

    
    const [joinUsInfo, setJoinUsInfo] = useState({
        name: " ",
        phoneNumber: " ",
        agreement: false
    })

    const setUnknownError = useNewMessage("Что-то пошло не так, повторите еще раз", true, 2000)
	const setConnectionError = useNewMessage("Произошли некие неполадки, попробуйте снова", true, 2000)
	const setSuccess = useNewMessage("Заявка успешно отправлена", false, 2000)

    const [isResponseLoading, setResponseLoading] = useState(false)


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
            noInput: joinUsInfo.phoneNumber.length === 0 ,
            notValidPhoneNumber: joinUsInfo.phoneNumber.trim().length > 0 && (joinUsInfo.phoneNumber.match(/[0-9]/gi)?.length !== 11 || joinUsInfo.phoneNumber.length < 18)
        },
        agreement:{
            noInput: !joinUsInfo.agreement,
        }
    }

    useEffect(
        () => {
        
            if (
                validationErrors.name.noInput || validationErrors.name.notValidName || joinUsInfo.name.trim().length === 0 ||
                validationErrors.phoneNumber.noInput || validationErrors.phoneNumber.notValidPhoneNumber || joinUsInfo.phoneNumber.trim().length === 0 ||
                validationErrors.agreement.noInput
            ){

                setSubmitButtonDisabled(true)
                return
            }
            setSubmitButtonDisabled(false) 
        }, [joinUsInfo]
    )

    const sendForm = async (event) => {
        event.preventDefault()
        try{
            setResponseLoading(true)
            const response = await fetch("/api/sendParticipationProposal", {
                method: "POST",
                body: JSON.stringify(joinUsInfo)
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
                            isValid={!(validationErrors.phoneNumber.noInput || validationErrors.phoneNumber.notValidPhoneNumber || validationErrors.phoneNumber.maxLengthLimit)} 
                            errorMessage={validationErrors.phoneNumber.noInput && dictionary.required || validationErrors.phoneNumber.notValidPhoneNumber && dictionary.notValidPhoneNumber || validationErrors.phoneNumber.maxLengthLimit  && dictionary.phoneNumberCharsLimitExceeded || ""}
                            value={joinUsInfo.phoneNumber}
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