import DoctorMaps from "./components/DoctorMaps/DoctorMaps";
import { ChooseDoctorPageHeader, ChooseDoctorPageWrapper } from "@/app/[lang]/chooseDoctor/styles";

export default async function ChooseDoctorPage({params: {lang}}){
    return (
        <ChooseDoctorPageWrapper>
            <ChooseDoctorPageHeader>{lang === "ru" ? "Выберите врача на карте" : "Choose a doctor on the map"}</ChooseDoctorPageHeader>
            
                <DoctorMaps lang={lang}/>
            
        </ChooseDoctorPageWrapper>
    )
}