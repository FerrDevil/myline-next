"use client"

import { Video, VideoWrapper } from "./styles"

const VideoPlayer = ({url='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'}) => {
  return(
    <VideoWrapper >
      <Video style={{}} url={url}/>
    </VideoWrapper>
    
  )
}
export default VideoPlayer