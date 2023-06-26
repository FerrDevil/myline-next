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
                        Элайнеры – это еще один способ исправления прикуса и выравнивания зубов. С помощью элайнеров Майлайн можно провести как объемные работы, так и выровнять только некоторые, беспокоящие Вас зубы. Например, когда пациенту не нравится положение только передних зубов.
                    </p>
                    <p>
                        Элайнеры изготавливаются из специального медицинского биополимера, предназначенного для использования стоматологами. Сам биополимер зарубежного производства. Полимер не вступает в реакции с установленными имплантами и коронками, не наносит вреда зубам, а также не травмирует слизистую оболочку ротовой полости – что говорит о безопасности способа лечения на элайнерах Майлайн.
                    </p>
                    <p>
                        Движение зубов происходит из-за давления, которое обеспечивается элайнерами. Для того чтобы зубы перемещались в правильном направлении необходимо грамотно составить план лечения. Планы, составленные врачами-ортодонтами Майлайн имеют высокую точность благодаря опыту докторов, а также наши доктора не подгоняют клинические случаи под технологии и адекватно оценивают возможности лечения на элайнерах.
                    </p>
                </>
            )
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
            
            <NewsSlider dictionary={dictionary} content={links}/>
        </NewsPageContainer>
    )
}