"use client"

import { useState } from "react"
import { ErrorMessage, Input, InputPasswordHiddenSVG, InputPasswordSwitchButton, InputPasswordVisibleSVG, InputPasswordWrapper, InputWrapper } from "./styles"




const InputField = ({ name, onChange, type="text", placeholder="", isValid=false, errorMessage="" }) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false)
    if (type === "password"){
        return (
            <InputWrapper>
                <InputPasswordWrapper>
                    <Input $isValid={isValid} id={name} name={name} type={isPasswordVisible ? "text" : "password"} onChange={onChange} placeholder={placeholder} />
                    <InputPasswordSwitchButton onClick={(event) => {
                        event.preventDefault()
                        setPasswordVisible(prev => !prev)
                    }}>
                    {
                        isPasswordVisible ?
                        <InputPasswordHiddenSVG/> :
                        <InputPasswordVisibleSVG/>
                    }
                    </InputPasswordSwitchButton>
                </InputPasswordWrapper>
                {!isValid && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </InputWrapper>
        )
    }

    return (
        <InputWrapper>
            <Input $isValid={isValid} id={name} name={name} type={type} onChange={onChange} placeholder={placeholder} />
            {!isValid && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </InputWrapper>
    )
}

export default InputField