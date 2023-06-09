import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import { InstructionsPageVideoTitle, InstructionsPageVideoWrapper, InstructionsPageWrapper } from "@/app/[lang]/profile/instructions/styles";

export default async function InstructionsPage({ params : { lang } }) {
    return(
      <InstructionsPageWrapper>
        <InstructionsPageVideoWrapper>
          <InstructionsPageVideoTitle>
            {lang === "ru" ? "Инструкция по использованию" : "Usage instruction"}
          </InstructionsPageVideoTitle>
          <VideoPlayer url={'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'}/>
        </InstructionsPageVideoWrapper>
        <InstructionsPageVideoWrapper>
          <InstructionsPageVideoTitle>
            {lang === "ru" ? "Инструкция по обработке" : "Handling instruction"}
          </InstructionsPageVideoTitle>
          <VideoPlayer url={'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'}/>
        </InstructionsPageVideoWrapper>
      </InstructionsPageWrapper>
    )
}