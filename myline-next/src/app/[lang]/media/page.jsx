import Slider from "./components/Slider/Slider"
import VideoPlayer from "@/app/[lang]/media/components/VideoPlayer/VideoPlayer"
import { getMediaDictionary } from "./dictionaries/dictionaries"
import { MediaPageContainer, MediaPageHeader, MediaPageSliderBlock, MediaPageVideoBlock, MediaPageVideoBlockDescription, MediaPageVideoBlockDescriptionText, MediaPageVideoBlockDescriptionTexts, SliderImage, SliderImageWrapper, YouTubeLink, YouTubeLinkSVG } from "@/app/[lang]/media/styles"

export default async function MediaPage({params: {lang}}) {
  const images = [
    {
      id: 1,
      image: "/images/mediaSlider/img1.png",
    },
    {
      id: 2,
      image: "/images/mediaSlider/img2.png",
    },
    {
      id: 3,
      image: "/images/mediaSlider/img3.png",
    },
    {
      id: 4,
      image: "/images/mediaSlider/img4.png",
    },
    {
      id: 5,
      image: "/images/mediaSlider/img1.png",
    },
    {
      id: 6,
      image: "/images/mediaSlider/img2.png",
    },
    {
      id: 7,
      image: "/images/mediaSlider/img3.png",
    },
    {
      id: 8,
      image: "/images/mediaSlider/img4.png",
    },
  ]
  
  const dictionary = await getMediaDictionary(lang) 
  
  return (
    <MediaPageContainer>

        <MediaPageSliderBlock>
          <MediaPageHeader> { dictionary.pageTitle } </MediaPageHeader>
          <Slider images={images}/>
          
        </MediaPageSliderBlock>
        <MediaPageVideoBlock>

          <MediaPageVideoBlockDescription>
            <MediaPageVideoBlockDescriptionTexts>
              <MediaPageVideoBlockDescriptionText>
                {dictionary.description}
              </MediaPageVideoBlockDescriptionText>
            </MediaPageVideoBlockDescriptionTexts>
            <YouTubeLink target="_blank" href="https://www.youtube.com/@Myline.inform ">
              <span> {dictionary.youtubeLink} </span>
              <YouTubeLinkSVG/>
            </YouTubeLink>
          </MediaPageVideoBlockDescription>

          <VideoPlayer/>

        </MediaPageVideoBlock>
        
    </MediaPageContainer>
  )
}
