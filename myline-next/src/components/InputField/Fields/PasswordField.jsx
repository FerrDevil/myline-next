import { ErrorMessage, Input, InputPasswordHiddenSVG, InputPasswordSwitchButton, InputPasswordVisibleSVG, InputPasswordWrapper, InputWrapper } from "../styles"

const PasswordField = ({ name, onChange, type="password", placeholder="", isValid=false, errorMessage="", value="" }) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false)
    return(
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

export default PasswordField