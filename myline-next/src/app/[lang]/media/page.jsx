import Slider from "./components/Slider/Slider"
import VideoPlayer from "../../../components/VideoPlayer/VideoPlayer"
import { getMediaDictionary } from "./dictionaries/dictionaries"
import { MediaPageContainer, MediaPageHeader, MediaPageSliderBlock, MediaPageVideoBlock, MediaPageVideoBlockDescription, MediaPageVideoBlockDescriptionText, MediaPageVideoBlockDescriptionTexts, SliderImage, SliderImageWrapper, YouTubeLink, YouTubeLinkSVG } from "@/app/[lang]/media/styles"

export default async function MediaPage({params: {lang}}) {
  const images = [
    {
      id: 1,
      image: "/images/mediaSlider/img1.jpg",
    },
    {
      id: 2,
      image: "/images/mediaSlider/img2.jpg",
    },
    {
      id: 3,
      image: "/images/mediaSlider/img3.jpg",
    },
    {
      id: 4,
      image: "/images/mediaSlider/img4.jpg",
    },
    {
      id: 5,
      image: "/images/mediaSlider/img5.jpg",
    },
    {
      id: 6,
      image: "/images/mediaSlider/img5.jpg",
    },
    {
      id: 7,
      image: "/images/mediaSlider/img2.jpg",
    },
  ]
  const imagesMap = images.map(image => (
      <SliderImageWrapper key={image.id}>
        <SliderImage src={image.image}/>
      </SliderImageWrapper>
  ))
  const dictionary = await getMediaDictionary(lang) 
  
  return (
    <MediaPageContainer>
        <MediaPageVideoBlock>

          <MediaPageVideoBlockDescription>
            {/* <MediaPageHeader> {dictionary.firstPageTitle}  </MediaPageHeader> */}
            <MediaPageVideoBlockDescriptionTexts>
              <MediaPageVideoBlockDescriptionText>
                {dictionary.firstDescription}
              </MediaPageVideoBlockDescriptionText>
              <MediaPageVideoBlockDescriptionText>
                {dictionary.secondDescription}
              </MediaPageVideoBlockDescriptionText>
            </MediaPageVideoBlockDescriptionTexts>
            <YouTubeLink target="_blank" href="https://youtube.com">
              <span> {dictionary.youtubeLink} </span>
              <YouTubeLinkSVG/>
            </YouTubeLink>
          </MediaPageVideoBlockDescription>

          <VideoPlayer/>

        </MediaPageVideoBlock>
        <MediaPageSliderBlock>
          <MediaPageHeader>  {dictionary.secondPageTitle} </MediaPageHeader>

          <Slider content={imagesMap}/>
          
        </MediaPageSliderBlock>
    </MediaPageContainer>
  )
}
