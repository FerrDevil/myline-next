"use client"

import { useState } from "react"
import { ErrorMessage, Input, InputPasswordHiddenSVG, InputPasswordSwitchButton, InputPasswordVisibleSVG, InputPasswordWrapper, InputWrapper } from "../styles"

const PasswordField = ({ name, onChange, placeholder="", isValid=false, errorMessage="" }) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false)
    return(
        <InputWrapper>
            <InputPasswordWrapper>
                <Input $isValid={isValid} name={name} type={isPasswordVisible ? "text" : "password"} onChange={onChange} placeholder={placeholder} />
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

export default PasswordField