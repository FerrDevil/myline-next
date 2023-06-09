"use client"
import { useState } from "react"
import { SliderContainer, SliderDot, SliderButtons, SliderWrapper, SliderContainerWrapper, SliderItems, SliderArrowButton, SliderLeftArrowButtonSVG, SliderRightArrowButtonSVG } from "./styles"
import { SliderImage, SliderImageFullViewButton, SliderImageWrapper, SliderItemDescription, SliderItemTextBlock, SliderItemTitle, SliderItemWrapper, ZoomInIconSVG } from "../../styles"
import FullImageViewModal from "../FullImageViewModal/FullImageViewModal"

const Slider = ({images=[]}) => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0) 

    const [currentFullViewImageIndex, setCurrentFullViewImageIndex] = useState(-1)

  let swipeParams = {
    start: [-1, -1],
    end: [-1, -1]
  }


  const onTouch = (event) => {
    swipeParams.start = [event.touches[0].clientX, event.touches[0].clientY]
  }

  const onTouchMove = (event) => {
    swipeParams.end = [event.touches[0].clientX, event.touches[0].clientY]
  }

  const onTouchEnd = () => {
    if (swipeParams.end[0] === -1 || swipeParams.end[1] === -1){
      return
    }

    const pixelDiff = 30

    if (swipeParams.start[0] - swipeParams.end[0] > pixelDiff && currentItemIndex !== images.length - 1){
      setCurrentItemIndex(prev => prev + 1)
      
    }
    else if (swipeParams.end[0] - swipeParams.start[0] > pixelDiff && currentItemIndex !== 0){
      setCurrentItemIndex(prev => prev - 1)
    }

    swipeParams = {
      start: [0, 0],
      end: [0, 0]
    }
  }
 
  return (
    <SliderWrapper>
      
      <SliderContainerWrapper onTouchStart={onTouch} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <SliderArrowButton onClick={() => {
          setCurrentItemIndex(prev => prev <= 0 ? images.length  - 4 : prev - 1)
        }}>
          <SliderLeftArrowButtonSVG/>
        </SliderArrowButton>
        <SliderContainer>
          <SliderItems $sliderLength={images.length} $currentGroupIndex={currentItemIndex}>
            {
            images.map((image, index) => (
              <SliderItemWrapper key={image.id}>
                <SliderImageWrapper >
                  <SliderImage src={image.image}/>
                    <SliderImageFullViewButton onClick={() => {setCurrentFullViewImageIndex(index)}}>
                      <ZoomInIconSVG/>
                    </SliderImageFullViewButton>
                </SliderImageWrapper>
                <SliderItemTextBlock>
                  <SliderItemTitle>{image.title}</SliderItemTitle>
                  <SliderItemDescription>{image.description}</SliderItemDescription>
                </SliderItemTextBlock>
                
              </SliderItemWrapper>
              
            ))
          }
          </SliderItems>
        </SliderContainer>
        <SliderArrowButton>
          <SliderRightArrowButtonSVG onClick={() => {
          setCurrentItemIndex(prev => prev === images.length  - 4 ? 0 : prev + 1)
        }}/>
        </SliderArrowButton>
        
      </SliderContainerWrapper>
      
      <SliderButtons>
        {
         images.filter((_, index) => index > images.length - 1 - 4)
         .map((_, id) => (
            <SliderDot key={id} onClick={() => {setCurrentItemIndex(id)}} $isActive={id === currentItemIndex} />
          ))
        }
      </SliderButtons>
      <SliderButtons $isMobile={true}>
        {
         images.map((_, id) => (
            <SliderDot key={id} onClick={() => {setCurrentItemIndex(id)}} $isActive={id === currentItemIndex} />
          ))
        }
      </SliderButtons>

      <FullImageViewModal currentImageIndex={currentFullViewImageIndex} setImageIndex={setCurrentFullViewImageIndex} images={images} />
    </SliderWrapper>
  )
}

export default Slider