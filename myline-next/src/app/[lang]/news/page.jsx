import NewsSlider from "@/app/[lang]/news/components/Slider/NewsSlider";
import { getNewsDictionary } from "@/app/[lang]/news/dictionaries/dictionaries";
import { NewsPageAddition, NewsPageContainer, NewsPageDescription, NewsPageDescriptions, NewsPageHeader, NewsPageLinkImage, NewsPageLinkImageWrapper, NewsPageLinkInsidesWrapper, NewsPageLinkSocialsLink, NewsPageLinkTitle, NewsPageLinkWrapper } from "@/app/[lang]/news/styles";

export default async function NewsPage({params: {lang}}) {
    const dictionary = await getNewsDictionary(lang)
    const links = [
        {
            id: 1,
            image: "/images/news/family.png",
            title: "МАЙЛАЙН запустили собственный мультсериал",
            article: (
                <>
                    <p>
                        Мы запустили собственный мультсериал! Это не просто очередной рекламный ход. Цель проекта – популяризация ухода за зубами с юного возраста, разоблачение мифов и страхов ребят перед стоматологическими клиниками. Поддержка детей в процессе лечения ортодонтическими системами и в целом в период сменного прикуса очень важна, каждый родитель помнит себя в школьные годы и знает, какие чувства могут испытывать дети в подростковом возрасте. 
                    </p>
                    <p>
                        Мы заботимся и поддерживаем наших юных пациентов со всех сторон и хотим, чтобы наше лечение проводилось не просто эстетично и комфортно с физической стороны, но и с ментальной.
                    </p>
                    <p>
                        Серии выходят на нашем <a target="_blank" href="https://www.youtube.com/channel/UC6U44li6S9MtMknf7KoG2xA">YouTube-канале</a>, мультфильм представлен и в формате комикса. Будем рады Вашим комментариям и отзывам.
                    </p>
                </>
            )
        },
        
    ]

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
            
            <NewsSlider dictionary={dictionary} content={links}/>
        </NewsPageContainer>
    )
}