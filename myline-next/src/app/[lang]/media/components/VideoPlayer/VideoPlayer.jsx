"use client"

import { Video, VideoWrapper } from "./styles"

const VideoPlayer = ({url='https://www.youtube.com/shorts/964n1voI1wI'}) => {
  return(
    <VideoWrapper >
      <Video style={{}} url={url}/>
    </VideoWrapper>
    
  )
}
export default VideoPlayer