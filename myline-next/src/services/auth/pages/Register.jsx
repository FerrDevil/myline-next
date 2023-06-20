"use client"
import CheckboxField from "@/components/CheckboxField/CheckboxField";
import FormSubmit from "@/components/FormSubmit/FormSubmit";
import InputField from "@/components/InputField/InputField";
import { useNewMessage } from "@/components/ToastMessage/ToastMessageProvider";
import { AuthPageForm, AuthPageFormContainer, AuthPageFormHeader, AuthPageFormSubmitButton, AuthPageWrapper } from "@/services/auth/styles/authStyles";
import { useState, useEffect } from "react"

const Register = ({dictionary=null}) => {
    
    const [registerInfo, setRegisterInfo] = useState(
        {
        fullName: " ",
        city: " ",
        phoneNumber: " ",
        email: " ",
        password: " ",
        agreement: false
        }
    )

    const setUnknownError = useNewMessage("Что-то пошло не так, повторите еще раз", true, 2000)
	const setConnectionError = useNewMessage("Произошли некие неполадки, попробуйте снова", true, 2000)
	const setSuccess = useNewMessage("Заявка успешно отправлена", false, 2000)

    const [isResponseLoading, setResponseLoading] = useState(false)
    const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true)

    const changeFieldbyName = (fieldName) => {
        return (event) => {
        setRegisterInfo(prev => ({...prev, [fieldName]: event.target.value}))
        }
    }

    const changeCheckboxbyName = (fieldName) => {
        return (event) => {
        setRegisterInfo(prev => ({...prev, [fieldName]: event.target.checked}))
        }
    }

    const validationErrors = {
        fullName:{
        noInput: registerInfo.fullName.length === 0,
        notValidFullName: registerInfo.fullName.trim().length > 0 && (registerInfo.fullName.match(/[a-zа-я ]+/gi) === null || registerInfo.fullName.match(/[a-zа-я ]+/gi)[0] !== registerInfo.fullName)
        },
        city:{
        noInput: registerInfo.city.length === 0,
        notValidCity: registerInfo.city.trim().length > 0 && (registerInfo.city.match(/[a-zа-я]+/gi) === null || registerInfo.city.match(/[a-zа-я]+/gi)[0] !== registerInfo.city)
        },
        phoneNumber:{
            noInput: registerInfo.phoneNumber.length === 0 ,
            notValidPhoneNumber: registerInfo.phoneNumber.trim().length > 0 && (registerInfo.phoneNumber.match(/[0-9]/gi)?.length !== 11 || registerInfo.phoneNumber.length < 18)
        },
        email:{
            noInput: registerInfo.email.length === 0,
            notValidEmail: registerInfo.email.trim().length > 0 && registerInfo.email.replace(/\S+@[a-z]+[.][a-z]+/gi, "") !== ""
        },
        password:{
            noInput: registerInfo.password.length === 0,
            notValidPassword: registerInfo.password.trim().length > 0 && (!registerInfo.password.match(/[\S]+/gi) || registerInfo.password.match(/[\S]+/gi) && registerInfo.password.match(/[\S]+/gi)[0] && registerInfo.password.match(/[\S]+/gi)[0] !== registerInfo.password)
        },
        agreement:{
        noInput: registerInfo.agreement === false,
        }
    }


    useEffect(
        () => {
        
            if (validationErrors.fullName.noInput || validationErrors.fullName.notValidFullName || registerInfo.fullName.trim().length === 0 ||
            validationErrors.city.noInput || validationErrors.city.notValidCity || registerInfo.city.trim().length === 0 ||
            validationErrors.phoneNumber.noInput || validationErrors.phoneNumber.notValidPhoneNumber || registerInfo.phoneNumber.trim().length === 0 ||
            validationErrors.email.noInput || validationErrors.email.notValidEmail || registerInfo.email.trim().length === 0 ||
            validationErrors.password.noInput || validationErrors.password.notValidPassword || registerInfo.password.trim().length === 0 ||
            validationErrors.agreement.noInput
            ){
                console.log("da")
                setSubmitButtonDisabled(true)
                return
            }
            setSubmitButtonDisabled(false) 
        }, [registerInfo]
    )
    

    const formSubmit = async (event) => {
        event.preventDefault()
        try{
            setResponseLoading(true)
            const response = await fetch("", {
                method: "POST",
                body: JSON.stringify(registerInfo)
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
    
    return (
        <AuthPageWrapper>
            <AuthPageForm>
            <AuthPageFormHeader>{dictionary.formTitle}</AuthPageFormHeader>
            <AuthPageFormContainer>
                <InputField
                name="fullName"
                placeholder={dictionary.fullName}
                onChange={changeFieldbyName("fullName")}
                isValid={!(validationErrors.fullName.noInput || validationErrors.fullName.notValidFullName)}
                errorMessage={validationErrors.fullName.noInput && dictionary.required || validationErrors.fullName.notValidFullName && dictionary.notValidFullName || ""}
                />
                <InputField
                name="city" 
                placeholder={dictionary.city}
                onChange={changeFieldbyName("city")}
                isValid={!(validationErrors.city.noInput || validationErrors.city.notValidCity)}
                errorMessage={validationErrors.city.noInput && dictionary.required || validationErrors.city.notValidCity && dictionary.notValidCity || ""}
                />
                <InputField 
                name="phoneNumber" 
                placeholder={dictionary.phoneNumber} 
                type="tel"
                value={registerInfo.phoneNumber}
                onChange={changeFieldbyName("phoneNumber")}
                isValid={!(validationErrors.phoneNumber.noInput || validationErrors.phoneNumber.notValidPhoneNumber || validationErrors.phoneNumber.maxLengthLimit)}
                errorMessage={validationErrors.phoneNumber.noInput && dictionary.required || validationErrors.phoneNumber.notValidPhoneNumber && dictionary.notValidPhoneNumber || validationErrors.phoneNumber.maxLengthLimit  && dictionary.phoneNumberCharsLimitExceeded || ""}
                />
                <InputField
                name="email" 
                placeholder="Email" 
                onChange={changeFieldbyName("email")}
                isValid={!(validationErrors.email.noInput || validationErrors.email.notValidEmail)}
                errorMessage={validationErrors.email.noInput && dictionary.required || validationErrors.email.notValidEmail && dictionary.notValidEmail || ""}
                />
                <InputField
                type="password" 
                name="password" 
                placeholder={dictionary.password} 
                onChange={changeFieldbyName("password")}
                isValid={!(validationErrors.password.noInput || validationErrors.password.notValidPassword)}
                errorMessage={validationErrors.password.noInput && dictionary.required || validationErrors.password.notValidPassword && dictionary.notValidPassword || ""}
                />
                <CheckboxField onChange={changeCheckboxbyName("agreement")} label={dictionary.agreement}/>
                <FormSubmit
                    text={dictionary.submitButton} 
                    isLoading={isResponseLoading}
                    disabled={isSubmitButtonDisabled}
                    onClick={formSubmit}
                />
            </AuthPageFormContainer>
            </AuthPageForm>
        </AuthPageWrapper>
        
    )
}

export default Register