import { ControlButtons, CancelAppointmentButton, SelectNewTimeButton } from "./styles"

const AppoinmentControls = ({dictionary=null}) => {
    return (
        <ControlButtons>
            <SelectNewTimeButton >{dictionary.delayAppointment}</SelectNewTimeButton>
            <CancelAppointmentButton >{dictionary.cancelAppointment}</CancelAppointmentButton>
        </ControlButtons>
    )
}

export default AppoinmentControls