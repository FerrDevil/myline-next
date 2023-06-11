import NewsSlider from "@/services/news/Slider/NewsSlider";
import { getNewsDictionary } from "@/services/news/dictionaries/dictionaries";
import { NewsPageAddition, NewsPageContainer, NewsPageDescription, NewsPageDescriptions, NewsPageHeader, NewsPageLinkImage, NewsPageLinkImageWrapper, NewsPageLinkInsidesWrapper, NewsPageLinkSocialsLink, NewsPageLinkTitle, NewsPageLinkWrapper } from "@/services/news/styles/newsPageStyles";

export default async function NewsPage({params: {lang}}) {
    const dictionary = await getNewsDictionary(lang)
    const links = [
        {
            id: 1,
            image: "/images/aligner.png",
            title: "МАЙЛАЙН запустили собственный мультсериал",
            link: "https://vk.com"
        },
        {
            id: 2,
            image: "/images/aligner.png",
            title: "МАЙЛАЙН запустили собственный мультсериал",
            link: "https://vk.com"
        },
        {
            id: 3,
            image: "/images/aligner.png",
            title: "МАЙЛАЙН запустили собственный мультсериал",
            link: "https://vk.com"
        },
        {
            id: 4,
            image: "/images/aligner.png",
            title: "МАЙЛАЙН запустили собственный мультсериал",
            link: "https://vk.com"
        },
        {
            id: 5,
            image: "/images/aligner.png",
            title: "МАЙЛАЙН запустили собственный мультсериал",
            link: "https://vk.com"
        },
    ]
    const linkElements = links.map(link => (
        <NewsPageLinkWrapper key={link.id}>
            <NewsPageLinkImageWrapper>
                <NewsPageLinkImage src={link.image}/>
            </NewsPageLinkImageWrapper>
            <NewsPageLinkInsidesWrapper>
                <NewsPageLinkTitle>{link.title}</NewsPageLinkTitle>
                <NewsPageLinkSocialsLink target="_blank" href={link.link}>
                    {dictionary.newsLink}
                </NewsPageLinkSocialsLink>
            </NewsPageLinkInsidesWrapper>
        </NewsPageLinkWrapper>
    ))

    return(
        <NewsPageContainer>
            <NewsPageHeader>{dictionary.pageTitle}</NewsPageHeader>
            <NewsPageDescriptions>
                <NewsPageDescription>
                    {dictionary.pageDescription}
                </NewsPageDescription>
                <NewsPageAddition>
                    {dictionary.addition}
                </NewsPageAddition>
            </NewsPageDescriptions>
            
            <NewsSlider content={linkElements}/>
        </NewsPageContainer>
    )
}