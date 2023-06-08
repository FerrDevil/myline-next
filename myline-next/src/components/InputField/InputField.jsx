"use client"

import PasswordField from "./Fields/PasswordField"
import TelephoneField from "./Fields/TelephoneField"
import TextField from "./Fields/TextField"

const InputField = (props) => {

    switch(props.type){
        case "password": {
            return (
                <PasswordField
                    {...props}
                />
            )
        }
        case "tel": {
            return(
                <TelephoneField
                    {...props}
                />
            )
        }
        default:{
            return(
                <TextField
                    {...props}
                />
            )
        }

    }

    
}



export default InputField


