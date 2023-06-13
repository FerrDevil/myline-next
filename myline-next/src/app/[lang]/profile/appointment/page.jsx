import AppoinmentControls from "@/app/[lang]/profile/appointment/components/AppointmentControls/AppointmentControls";
import { getProfileDictionary } from "@/app/[lang]/profile/dictionaries/dictionaries";
import { AppointmentLowerInfo, AppointmentLowerInfoParameter, AppointmentLowerInfoValue, AppointmentLowerInfoWrapper, AppointmentPageWrapper, AppointmentUpperInfo, AppointmentUpperInfoImage, AppointmentUpperInfoImageWrapper, AppointmentUpperInfoName, AppointmentUpperInfoNameDescription, AppointmentUpperInfoNameWrapper, AppointmentWrapper} from "./styles";


export default async function TreatmentPage({params: {lang}}) {
    const dictionary = (await getProfileDictionary(lang)).appointmentPage
    return (
        <AppointmentPageWrapper>
            <AppointmentWrapper>
                <AppointmentUpperInfo>
                    <AppointmentUpperInfoImageWrapper>
                        <AppointmentUpperInfoImage src="/images/doctor.png" />
                    </AppointmentUpperInfoImageWrapper>
                    <AppointmentUpperInfoNameWrapper>
                        <AppointmentUpperInfoNameDescription>
                        {dictionary.isAwaitingYou}:
                        </AppointmentUpperInfoNameDescription>
                        <AppointmentUpperInfoName>
                        Серебренников Иван Иванович
                        </AppointmentUpperInfoName>
                    </AppointmentUpperInfoNameWrapper>
                </AppointmentUpperInfo>
                <AppointmentLowerInfoWrapper>
                    <AppointmentLowerInfo>
                        <AppointmentLowerInfoParameter>
                        {dictionary.phoneNumber}:
                        </AppointmentLowerInfoParameter>
                        <AppointmentLowerInfoValue>
                            +7 (999) 999-99-99
                        </AppointmentLowerInfoValue>
                    </AppointmentLowerInfo>
                    <AppointmentLowerInfo>
                        <AppointmentLowerInfoParameter>
                        {dictionary.address}:
                        </AppointmentLowerInfoParameter>
                        <AppointmentLowerInfoValue>
                            ул. Ленина, 1
                        </AppointmentLowerInfoValue>
                    </AppointmentLowerInfo>
                    {/* <AppointmentLowerInfo>
                        <AppointmentLowerInfoParameter>
                        {dictionary.date}:
                        </AppointmentLowerInfoParameter>
                        <AppointmentLowerInfoValue>
                            30.12.2022
                        </AppointmentLowerInfoValue>
                    </AppointmentLowerInfo>
                    <AppointmentLowerInfo>
                        <AppointmentLowerInfoParameter>
                        {dictionary.time}:  
                        </AppointmentLowerInfoParameter>
                        <AppointmentLowerInfoValue>
                            14:00
                        </AppointmentLowerInfoValue>
                    </AppointmentLowerInfo> */}
                </AppointmentLowerInfoWrapper>
                
                <AppoinmentControls dictionary={dictionary}/>
            </AppointmentWrapper>
        </AppointmentPageWrapper>
    )
}