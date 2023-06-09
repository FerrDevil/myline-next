import TreatmentSlider from "@/app/[lang]/profile/treatment/components/TreatmentSlider/TreatmentSlider";
import { TreatmentPageDescription, TreatmentPageHeader, TreatmentPageWrapper } from "@/app/[lang]/profile/treatment/styles";



export default async function TreatmentPage({params: {lang}}) {

    const treatmentDays = [
        {
            id: 1,
            date: "12.02.2022",
            photo: ""
        },
        {
            id: 2,
            date: "13.02.2022",
            photo: ""
        },
        {
            id: 3,
            date: "14.02.2022",
            photo: ""
        },
        {
            id: 4,
            date: "15.02.2022",
            photo: ""
        },
        {
            id: 5,
            date: "16.02.2022",
            photo: ""
        },
        {
            id: 6,
            date: "17.02.2022",
            photo: ""
        },
        {
            id: 7,
            date: "17.02.2022",
            photo: ""
        },
        {
            id: 8,
            date: "17.02.2022",
            photo: ""
        },
        {
            id: 9,
            date: "17.02.2022",
            photo: ""
        },
        {
            id: 10,
            date: "17.02.2022",
            photo: ""
        },  
        {
            id: 11,
            date: "17.02.2022",
            photo: ""
        },
    ]


    return (
        <TreatmentPageWrapper>
            <TreatmentPageHeader> {lang === "ru"? "Ваш отчет о лечении в период с": "Your report on the treatment from"} 12.12.2022 {lang === "ru"? "по" : "to" } 16.12.2022</TreatmentPageHeader>
            <TreatmentPageDescription>
            {lang === "ru"? "Сделайте фото своих зубов, чтобы врач зафиксировал отсутствие осложнений": "Make photos of your teeth for the doctor"}
            </TreatmentPageDescription>
            <TreatmentSlider lang={lang} treatmentDays={treatmentDays}/>
        </TreatmentPageWrapper>
    )
}