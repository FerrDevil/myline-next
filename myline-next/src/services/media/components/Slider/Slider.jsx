"use client"
import { useState } from "react"
import { SliderContainer, SliderDot, SliderButtons, SliderWrapper, SliderContainerWrapper, SliderItems, SliderArrowButton, SliderLeftArrowButtonSVG, SliderRightArrowButtonSVG } from "./styles"

const Slider = ({content=[]}) => {
    const [currentGroupIndex, setCurrentGroupIndex] = useState(0) 
 
  return (
    <SliderWrapper>
        
      <SliderContainerWrapper>
        <SliderArrowButton onClick={() => {
          setCurrentGroupIndex(prev => prev === 0 ? prev : prev - 1)
        }}>
          <SliderLeftArrowButtonSVG/>
        </SliderArrowButton>
        <SliderContainer>
          <SliderItems $currentGroupIndex={currentGroupIndex}>
            {content}
          </SliderItems>
        </SliderContainer>
        <SliderArrowButton>
          <SliderRightArrowButtonSVG onClick={() => {
          setCurrentGroupIndex(prev => prev === content.length - 1 ? prev : prev + 1)
        }}/>
        </SliderArrowButton>
        
      </SliderContainerWrapper>
      
      <SliderButtons>
        {
         content.map((_, id) => (
            <SliderDot key={id} onClick={() => {setCurrentGroupIndex(id)}} $isActive={id === currentGroupIndex} />
          ))
        }
      </SliderButtons>
    </SliderWrapper>
  )
}

export default Slider