"use client"
import { useEffect, useState } from "react"
import { AuthPageForm, AuthPageFormContainer, AuthPageFormHeader, AuthPageFormSubmitButton, AuthPageWrapper } from "../styles/authStyles"
import InputField from "@/components/InputField/InputField";


const SignIn = ({dictionary=null}) => {
    const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true)
  const [signInInfo, setSignInInfo] = useState(
    {
      login: " ",
      password: " ",
    }
  )


  const changeFieldbyName = (fieldName) => {
    return (event) => {
      setSignInInfo(prev => ({...prev, [fieldName]: event.target.value}))
    }
  }


  const validationErrors = {
    
    /* phoneNumber:{
      maxLengthLimit: signInInfo.phoneNumber.length > 11,
      noInput: signInInfo.phoneNumber.length === 0,
      notValidPhoneNumber: signInInfo.phoneNumber.trim().length > 0 && (signInInfo.phoneNumber.match(/[0-9]+/gi) === null || signInInfo.phoneNumber.match(/[a-z0-9]+/gi)[0] !== signInInfo.phoneNumber)
    }, */
    /* email:{
        noInput: signInInfo.email.length === 0,
        notValidEmail: signInInfo.email.trim().length > 0 && (!signInInfo.email.match(/[a-z0-9]+@[a-z]+[.][a-z]+/gi) || signInInfo.email.match(/[a-z0-9]+@[a-z]+[.][a-z]+/gi) && signInInfo.email.match(/[a-z0-9]+@[a-z]+[.][a-z]+/gi)[0] !== signInInfo.email)
    }, */
    login:{
      noInput: signInInfo.login.length === 0,
     
  },
    password:{
        noInput: signInInfo.password.length === 0,
        notValidPassword: signInInfo.password.trim().length > 0 && (!signInInfo.password.match(/[\S]+/gi) || signInInfo.password.match(/[\S]+/gi) && signInInfo.password.match(/[\S]+/gi)[0] && signInInfo.password.match(/[\S]+/gi)[0] !== signInInfo.password)
    },
    
}


useEffect(
    () => {
       
        if (/* validationErrors.phoneNumber.noInput || validationErrors.phoneNumber.notValidPhoneNumber || validationErrors.phoneNumber.maxLengthLimit || registerInfo.phoneNumber.trim().length === 0 || */
          validationErrors.login.noInput || signInInfo.login.trim().length === 0 ||
          validationErrors.password.noInput || signInInfo.password.trim().length === 0 
          ){
            setSubmitButtonDisabled(true)
            return
        }
        setSubmitButtonDisabled(false) 
    }, [signInInfo]
)
  

    const formSubmit = async (event) => {
      event.preventDefault()
    }
  
  return (
      <AuthPageWrapper>
        <AuthPageForm>
          <AuthPageFormHeader>{dictionary.formTitle}</AuthPageFormHeader>
          <AuthPageFormContainer>
            
            {/* <InputField 
              name="phoneNumber" 
              placeholder="Номер телефона" 
              onChange={changeFieldbyName("phoneNumber")}
              isValid={!(validationErrors.phoneNumber.noInput || validationErrors.phoneNumber.notValidPhoneNumber || validationErrors.phoneNumber.maxLengthLimit)}
              errorMessage={validationErrors.phoneNumber.noInput && "Обязательное поле" || validationErrors.phoneNumber.notValidPhoneNumber && "Номер телефона введен некорректно" || validationErrors.phoneNumber.maxLengthLimit  && "Введенный номер телефона превышает максимальное значение поля" || ""}
            /> */}
            <InputField
              name="login" 
              placeholder={dictionary.login} 
              onChange={changeFieldbyName("login")}
              isValid={!(validationErrors.login.noInput)}
              errorMessage={validationErrors.login.noInput && dictionary.required  || ""}
            />
            <InputField
              type="password" 
              name="password" 
              placeholder={dictionary.password}
              onChange={changeFieldbyName("password")}
              isValid={!(validationErrors.password.noInput || validationErrors.password.notValidPassword)}
              errorMessage={validationErrors.password.noInput && dictionary.required || ""}
            />
           
            <AuthPageFormSubmitButton disabled={isSubmitButtonDisabled} onClick={formSubmit}>{dictionary.submitButton}</AuthPageFormSubmitButton>
          </AuthPageFormContainer>
        </AuthPageForm>
      </AuthPageWrapper>
      
  )
}

export default SignIn