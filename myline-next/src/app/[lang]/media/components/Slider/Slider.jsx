"use client"
import { useState } from "react"
import { SliderContainer, SliderDot, SliderButtons, SliderWrapper, SliderContainerWrapper, SliderItems, SliderArrowButton, SliderLeftArrowButtonSVG, SliderRightArrowButtonSVG } from "./styles"
import { SliderImage, SliderImageWrapper } from "../../styles"

const Slider = ({images=[]}) => {
    const [currentGroupIndex, setCurrentGroupIndex] = useState(0) 

    const content = images.map(image => (
      <SliderImageWrapper key={image.id}>
        <SliderImage src={image.image}/>
      </SliderImageWrapper>
  ))
 
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