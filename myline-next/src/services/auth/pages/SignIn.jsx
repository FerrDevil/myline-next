"use client"
import { useEffect, useState } from "react"
import { AuthPageForm, AuthPageFormContainer, AuthPageFormHeader, AuthPageFormSubmitButton, AuthPageWrapper } from "../styles/authStyles"
import InputField from "@/components/InputField/InputField";
import { useNewMessage } from "@/components/ToastMessage/ToastMessageProvider";
import FormSubmit from "@/components/FormSubmit/FormSubmit";


const SignIn = ({dictionary=null}) => {
	const [signInInfo, setSignInInfo] = useState(
		{
			login: " ",
			password: " ",
		}
  	)

  	const setUnknownError = useNewMessage("Что-то пошло не так, повторите еще раз", true, 2000)
	const setConnectionError = useNewMessage("Произошли некие неполадки, попробуйте снова", true, 2000)
	const setSuccess = useNewMessage("Заявка успешно отправлена", false, 2000)

    const [isResponseLoading, setResponseLoading] = useState(false)
    const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true)


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
	try{
		setResponseLoading(true)
		const response = await fetch("", {
			method: "POST",
			body: JSON.stringify(signInInfo)
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
		console.error(error)
	}
	setResponseLoading(false)
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

export default SignIn