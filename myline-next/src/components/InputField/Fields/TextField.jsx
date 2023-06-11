"use client"
import { ErrorMessage, Input, InputWrapper } from "../styles"

const TextField = ({ name, onChange, placeholder="",  isValid=false, errorMessage="" }) => {
   
    return (
        <InputWrapper>
            <Input $isValid={isValid} name={name} type={'text'} onChange={onChange} placeholder={placeholder} />
            {!isValid && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </InputWrapper>
    )
}

export default TextField