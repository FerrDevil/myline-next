"use client"
import { useState } from "react"
import { SliderContainer, SliderGroupContainer, SliderToggleGroupButton, SliderToggleGroupButtons, SliderWrapper } from "./styles"
import { TreatmentCard, TreatmentCardHeaders, TreatmentCardHeadersDate, TreatmentCardHeadersDay } from "@/app/[lang]/profile/treatment/styles"
import TreatmentFileInput from "../TreatmentFileInput/TreatmentFileInput"

const TreatmentSlider = ({ treatmentDays=[], lang="ru" }) => {
    const [currentGroupIndex, setCurrentGroupIndex] = useState(0)


    const treatmentDaysContent = treatmentDays.map(day => (
      <TreatmentCard key={day.id}>
        <TreatmentCardHeaders>
          <TreatmentCardHeadersDay>
            {lang === "ru" ? "День" : "Day"} {day.id}
          </TreatmentCardHeadersDay>

          <TreatmentCardHeadersDate>
            {day.date}
          </TreatmentCardHeadersDate>
        </TreatmentCardHeaders>
        <TreatmentFileInput lang={lang}/>
      </TreatmentCard>
    ))

    const sliderItemsLength = 10 

    const treatmentDaysCount = Math.ceil(treatmentDaysContent.length / sliderItemsLength)
    
    let contentGroups = []
    for(let groupIndex = 0; groupIndex < treatmentDaysCount; groupIndex++){
      let contentGroup = []
      for(let inGroupIndex = groupIndex * sliderItemsLength; inGroupIndex < groupIndex * sliderItemsLength + sliderItemsLength; inGroupIndex++){
        contentGroup = [...contentGroup, treatmentDaysContent[inGroupIndex]]
      }
     
      contentGroup = <SliderGroupContainer key={groupIndex}>{contentGroup}</SliderGroupContainer>
      contentGroups = [...contentGroups, contentGroup]
    }



  return (
    <SliderWrapper>
      <SliderContainer $currentGroupIndex={currentGroupIndex}>
        {contentGroups}
      </SliderContainer>
      <SliderToggleGroupButtons>
        {
          contentGroups.length > 1 && 
          contentGroups.map((_, id) => (
            <SliderToggleGroupButton key={id} onClick={() => {setCurrentGroupIndex(id)}} $isActive={id === currentGroupIndex} >
              {id + 1}
            </SliderToggleGroupButton>
          ))
        }
      </SliderToggleGroupButtons>
    </SliderWrapper>
  )
}

export default TreatmentSlider