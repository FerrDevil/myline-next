"use client"

import { TreatmentCardFileInput, TreatmentCardFileInputLabel } from "../../styles/treatmentStyles"

const TreatmentFileInput = ({ lang="ru" }) => {
    return (
        <TreatmentCardFileInputLabel>
            <TreatmentCardFileInput/>
            <span>{lang === "ru" ? "Прикрепить фото": "Pin a photo"}</span>
        </TreatmentCardFileInputLabel>
    )
}

export default TreatmentFileInput