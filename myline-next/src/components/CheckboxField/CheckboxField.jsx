"use client"

import { useState } from "react"
import { Checkbox, CheckboxLabel, CheckboxWrapper, CheckedCheckboxIconSVG, DefaultCheckboxIconSVG } from "./styles"

const CheckboxField = ({onChange, label=""}) => {
    const [isChecked, setChecked] = useState(false)

    const onChangeDecorator = (event) => {
        onChange(event)
        setChecked(prev => !prev)
    }

    return (
        <CheckboxLabel>
            <CheckboxWrapper>
                <Checkbox onChange={onChangeDecorator}/>
                {
                   isChecked ?
                    <CheckedCheckboxIconSVG/> :
                    <DefaultCheckboxIconSVG/>
                }
                
            </CheckboxWrapper>
            {
                !!label && 
                <span>
                    {label}
                </span>
            }
        </CheckboxLabel>
    )
}

export default CheckboxField