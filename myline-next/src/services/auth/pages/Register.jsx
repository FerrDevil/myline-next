"use client"
import CheckboxField from "@/components/CheckboxField/CheckboxField";
import InputField from "@/components/InputField/InputField";
import { AuthPageForm, AuthPageFormContainer, AuthPageFormHeader, AuthPageFormSubmitButton, AuthPageWrapper } from "@/services/auth/styles/authStyles";
import { useState, useEffect } from "react"

const Register = ({dictionary=null}) => {
    const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true)
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
                setSubmitButtonDisabled(true)
                return
            }
            setSubmitButtonDisabled(false) 
        }, [registerInfo]
    )
    

        const formSubmit = async (event) => {
            event.preventDefault()
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
                <AuthPageFormSubmitButton disabled={isSubmitButtonDisabled} onClick={formSubmit}>{dictionary.submitButton}</AuthPageFormSubmitButton>
            </AuthPageFormContainer>
            </AuthPageForm>
        </AuthPageWrapper>
        
    )
}

export default Register