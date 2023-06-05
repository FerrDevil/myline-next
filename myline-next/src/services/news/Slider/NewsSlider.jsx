"use client"
import { useState } from "react"
import { SliderContainer, SliderGroupContainer, SliderToggleGroupButton, SliderToggleGroupButtons, SliderWrapper } from "./styles"

const NewsSlider = ({content=[] }) => {
    const [currentGroupIndex, setCurrentGroupIndex] = useState(0)

    const sliderItemsLength = 4 

    const contentGroupsCount = Math.ceil(content.length / sliderItemsLength)
    
    let contentGroups = []
    for(let groupIndex = 0; groupIndex < contentGroupsCount; groupIndex++){
      let contentGroup = []
      for(let inGroupIndex = groupIndex * sliderItemsLength; inGroupIndex < groupIndex * sliderItemsLength + sliderItemsLength; inGroupIndex++){
        contentGroup = [...contentGroup, content[inGroupIndex]]
      }
     
      contentGroup = <SliderGroupContainer key={groupIndex}>{contentGroup}</SliderGroupContainer>
      contentGroups = [...contentGroups, contentGroup]
    }



  return (
    <SliderWrapper>
      <SliderContainer>
        {contentGroups[currentGroupIndex]}
      </SliderContainer>
      <SliderToggleGroupButtons>
        { content.length-1 >= sliderItemsLength &&
          Array.from(Array(contentGroupsCount).keys()).map(id => (
            <SliderToggleGroupButton key={id} onClick={() => {setCurrentGroupIndex(id)}} $isActive={id === currentGroupIndex} >
              {id + 1}
            </SliderToggleGroupButton>
          ))
        }
      </SliderToggleGroupButtons>
    </SliderWrapper>
  )
}

export default NewsSlider