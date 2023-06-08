"use client"

import ReactInputMask from "react-input-mask"
import { ErrorMessage, Input, InputPasswordWrapper, InputWrapper } from "../styles"

const TelephoneField = ({ name, onChange, placeholder="", isValid=true, errorMessage="", value="" }) => {

    console.log(value)

    return(
        <InputWrapper>
            <InputPasswordWrapper>
                <ReactInputMask alwaysShowMask mask="+7 (999) 999-99-99" onChange={onChange} value={value}>
                    {(inputProps => <Input {...inputProps} type="tel" $isValid={isValid} id={name} name={name} placeholder={placeholder} />)}
                </ReactInputMask>
            </InputPasswordWrapper>
            {!isValid && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </InputWrapper>
    )
}

export default TelephoneField