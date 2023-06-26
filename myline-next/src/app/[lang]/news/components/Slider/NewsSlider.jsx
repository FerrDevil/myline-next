"use client"
import { useState } from "react"
import { SliderContainer, SliderGroupContainer, SliderToggleGroupButton, SliderToggleGroupButtons, SliderWrapper } from "./styles"
import { NewsPageLinkImage, NewsPageLinkImageWrapper, NewsPageLinkInsidesWrapper, NewsPageLinkSocialsLink, NewsPageLinkTitle, NewsPageLinkWrapper } from "../../styles"
import NewsModal from "../NewsModal/NewsModal"

const NewsSlider = ({content=[], dictionary=null }) => {
    const [currentGroupIndex, setCurrentGroupIndex] = useState(0)
    const [currentNewsIndex, setCurrentNewsIndex] = useState(-1)

    const sliderItemsLength = 4 
    
    const linkElements = content.map((link, linkIndex) => (
      <NewsPageLinkWrapper key={link.id}>
          <NewsPageLinkImageWrapper>
              <NewsPageLinkImage src={link.image}/>
          </NewsPageLinkImageWrapper>
          <NewsPageLinkInsidesWrapper>
              <NewsPageLinkTitle>{link.title}</NewsPageLinkTitle>
              <NewsPageLinkSocialsLink onClick={() => {
                setCurrentNewsIndex(linkIndex)
              }}>
                  {dictionary.newsLink}
              </NewsPageLinkSocialsLink>
          </NewsPageLinkInsidesWrapper>
      </NewsPageLinkWrapper>
  ))

    const contentGroupsCount = Math.ceil(linkElements.length / sliderItemsLength)
    
    let contentGroups = []
    for(let groupIndex = 0; groupIndex < contentGroupsCount; groupIndex++){
      let contentGroup = []
      for(let inGroupIndex = groupIndex * sliderItemsLength; inGroupIndex < groupIndex * sliderItemsLength + sliderItemsLength; inGroupIndex++){
        contentGroup = [...contentGroup, linkElements[inGroupIndex]]
      }
     
      contentGroup = <SliderGroupContainer key={groupIndex}>{contentGroup}</SliderGroupContainer>
      contentGroups = [...contentGroups, contentGroup]
    }



  return (
    <>
      <NewsModal
        currentNewsIndex={currentNewsIndex} 
        setCurrentNewsIndex={setCurrentNewsIndex}
        news={content}
      />
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
    </>
    
  )
}

export default NewsSlider