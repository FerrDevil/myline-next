import NewsSlider from "./components/Slider/NewsSlider";
import { getNewsDictionary } from "@/app/[lang]/patient/dictionaries/dictionaries";
import { BenefitCard, BenefitCardDescription, BenefitCardHeader, BenefitCardIconWrapper, BenefitCards, JoyIconSVG, LikeIconSVG, NewsPageAddition, NewsPageContainer, NewsPageDescription, NewsPageDescriptions, NewsPageHeader, TechnologiesIconSVG, TimeIconSVG } from "./styles"
import { ArticleModalOrderedList, ArticleModalParagraph, ArticleModalUnorderedList } from "./components/ArticleModal/styles";

export default async function NewsPage({params: {lang}}) {
    const dictionary = await getNewsDictionary(lang)
    const links = [
        {
            id: 1,
            image: "/images/articles/article1.png",
            title: "Что такое элайнеры?",
            article: (
                <>
                    <ArticleModalParagraph>
                        Элайнеры – это еще один способ исправления прикуса и выравнивания зубов. С помощью элайнеров Майлайн можно провести как объемные работы, так и выровнять только некоторые, беспокоящие Вас зубы. Например, когда пациенту не нравится положение только передних зубов.
                    </ArticleModalParagraph>
                    <ArticleModalParagraph>
                        Элайнеры изготавливаются из специального медицинского биополимера, предназначенного для использования стоматологами. Сам биополимер зарубежного производства. Полимер не вступает в реакции с установленными имплантами и коронками, не наносит вреда зубам, а также не травмирует слизистую оболочку ротовой полости – что говорит о безопасности способа лечения на элайнерах Майлайн.
                    </ArticleModalParagraph>
                    <ArticleModalParagraph>
                        Движение зубов происходит из-за давления, которое обеспечивается элайнерами. Для того чтобы зубы перемещались в правильном направлении необходимо грамотно составить план лечения. Планы, составленные врачами-ортодонтами Майлайн имеют высокую точность благодаря опыту докторов, а также наши доктора не подгоняют клинические случаи под технологии и адекватно оценивают возможности лечения на элайнерах.
                    </ArticleModalParagraph>
                </>
            )
        },
        {
            id: 2,
            image: "/images/articles/article2.png",
            title: "Почему элайнеры это технологично?",
            article: (
                <>
                    <ArticleModalParagraph>
                        Для лечения на элайнерах используются инновационные методы стоматологии, в частности – цифровая ортодонтия.
                    </ArticleModalParagraph>
                    <ArticleModalParagraph>
                        Что же туда входит? 
                    </ArticleModalParagraph>
                    <ArticleModalParagraph>
                        Первое – это сканирование всех Ваших зубов – в первый прием доктор сканирует ротовую полость пациента. Ранее для того, чтобы изготовить каппы необходимо было снять слепок. Снятие слепков крайне трудоемкий процесс, а также требует от доктора достаточного количества опыта, так как низкое качество слепка может привести к невозможности производства элайнера. Кроме того, снятие слепка малоприятный процесс для пациента. Но все-таки хочется отметить, что снятие слепка в случае производства элайнеров возможно, сканирование не исключает использование слепка.
                    </ArticleModalParagraph>
                    <ArticleModalParagraph>
                        Второй пункт, объясняющий технологичность процесса – это виртуальный план лечения. Планирование лечения крайне важный этап в работе. Наши зарубежные коллеги врачи-ортодонты Майлайн составляют план лечения с учетом комментариев доктора и пожеланиями пациента. Каждый план лечения, безусловно индивидуальный. Именно благодаря этому этапу Вы можете ознакомиться с результатом лечения еще до его начала.
                    </ArticleModalParagraph>
                    <ArticleModalParagraph>
                        После Вашего согласия на лечение подходит время второму этапу – изготовлению капп, для этого используются такие современные технологии как 3D печать. Именно те сканы зубов, которые доктор сделал Вам на первом этапе являются основой для печати. Так же для производства элайнеров Майлайн используются современные биосовместимые медицинские материалы. 
                    </ArticleModalParagraph>
                    <ArticleModalParagraph>
                        Сам процесс лечения можно назвать дистанционным – и это тоже объясняет технологичность лечения на элайнерах. Ведь посещение клиники сводится к минимуму – 1 раз в 2-3 месяца. На протяжении лечения проводится цифровой фотопротокол – поэтому в конце лечения Вы так же можете посмотреть, как на самом деле шло лечение и сравнить какой результат планировали и какой получили. Как правило, основная доля лечения на элайнерах ведет к запланированному результату.
                    </ArticleModalParagraph>
                </>
            ) 
        },
        {
            id: 3,
            image: "/images/articles/article3.png",
            title: "Элайнеры – это комфортно?",
            article: (
                <>
                    <ArticleModalParagraph>
                        В первую очередь комфорт ношения элайнеров всегда сравнивается с традиционной брекет-системой. 
                    </ArticleModalParagraph>
                    <ArticleModalOrderedList>
                        <li>
                            Элайнеры прозрачные, поэтому улыбаться без стеснения и при этом проходить ортодонтическое лечение-это реально.
                        </li>
                        <li>
                            Элайнеры съемные, а это значит, что таких проблем с гигиеной как при лечении на брекетах нет и быть не может. Во-вторых, принимать пищу можно в привычном режиме, так как при приеме пищи элайнеры обязательно снимаются. Хранятся элайнеры в специальном боксе, снимаются специальным крючком, которые идут в комплекте с самими элайнерами.
                        </li>
                        <li>
                            Привыкание к элайнерам происходит на много быстрее, чем привыкание к брекетам. В среднем 3 дня и Вы сроднитесь с ними. 
                        </li>
                        <li>
                            Не влияют на дикцию.
                        </li>
                        <li>
                            Количество регулярных приемов сокращается до 1 раза в 2-3 месяца. В сравнении, при лечении на брекет-системе приемы назначают с частотой в 1 раз 2-4 недели. А это значит, Вы можете со спокойной душой уехать в отпуск, заниматься любимыми делами или работать, не отрываясь на приемы.
                        </li>
                    </ArticleModalOrderedList>
                    <ArticleModalParagraph>
                        Безусловно, на начальном этапе есть небольшой дискоморт и трудности со снятием и надеванием элайнеров, но все вышеперечисленные плюсы оправдывают эти пару дней привыкания.
                    </ArticleModalParagraph>
                </>
            )
        },
        {
            id: 4,
            image: "/images/articles/article3.png",
            title: "Отличие элайнеры/брекеты.",
            article: (
                <>
                    <ArticleModalParagraph>
                    Элайнеры и брекеты – это две разные системы, которые решают одни и те же проблемы, при этом имея между собой существенные различия: 
                    </ArticleModalParagraph>
                    <ArticleModalUnorderedList>
                        <li>
                            Внешний вид. Элайнеры относительно брекетов имеют более эстетичный вид , что является одним из основных плюсов.
                        </li>
                        <li>
                            Сроки лечения. Лечение на элайнерах происходит быстрее, чем на брекетах.
                        </li>
                        <li>
                            Комфорт в лечении. В силу того, что объем движения зубов на элайнерах строго контролируемое, зубы двигаются менее травматично как для окружающей костной ткани, так и для самих зубов. Поэтому лечение на элайнерах проходит безболезненно для пациента.
                        </li>
                        <li>
                            Принцип работы. Элайнеры работают посредством давления, которые они оказывают на зубы. Для этого иногда на зубы фиксируются специальные элементы – аттачменты.  
                        </li>
                        <li>
                            Мобильность конструкции. Элайнеры можно снять в течении лечения (для гигиены или принятия пищи), тогда как брекеты являются несъемной конструкцией.
                        </li>
                        <li>
                            Уход и гигиена. Уход за элайнерами и гигиена в разы проще, нежели за брекетами. В силу того, что элайнеры можно снимать, для ухода достаточно почистить их щеткой и промыть под прохладной водой. Не используя дополнительные средства гигиены, которые необходимы при лечеии на брекет-системе.
                        </li>
                    </ArticleModalUnorderedList>
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
                <NewsPageAddition>{dictionary.addition}</NewsPageAddition>
            </NewsPageDescriptions>
           
            <NewsSlider dictionary={dictionary} content={links}/>
        </NewsPageContainer>
    )
}


/*  <BenefitCards>
                <BenefitCard>
                    <BenefitCardIconWrapper>
                        <TechnologiesIconSVG/>
                    </BenefitCardIconWrapper>
                    <BenefitCardHeader> {dictionary.cards[0].title} </BenefitCardHeader>
                    <BenefitCardDescription> {dictionary.cards[0].description} </BenefitCardDescription>
                </BenefitCard>

                <BenefitCard>
                    <BenefitCardIconWrapper>
                        <TimeIconSVG/>
                    </BenefitCardIconWrapper>
                    <BenefitCardHeader> {dictionary.cards[1].title} </BenefitCardHeader>
                    <BenefitCardDescription> {dictionary.cards[1].description} </BenefitCardDescription>
                </BenefitCard>

                <BenefitCard>
                    <BenefitCardIconWrapper>
                        <LikeIconSVG/>
                    </BenefitCardIconWrapper>
                    <BenefitCardHeader> {dictionary.cards[2].title} </BenefitCardHeader>
                    <BenefitCardDescription> {dictionary.cards[2].description} </BenefitCardDescription>
                </BenefitCard>

                <BenefitCard $isAlternated={true}>
                    <BenefitCardIconWrapper>
                        <JoyIconSVG/>
                    </BenefitCardIconWrapper>
                    <BenefitCardHeader> {dictionary.cards[3].title} </BenefitCardHeader>
                    <BenefitCardDescription> {dictionary.cards[3].description} </BenefitCardDescription>
                </BenefitCard>
            </BenefitCards> */