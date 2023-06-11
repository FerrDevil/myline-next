import { getCatalogDictionary } from "./dictionaries/dictionaries";
import Catalog from "./components/Catalog/Catalog";


export default async function CatalogPage({params: {lang}}) {

  const products = [
    {
      id: 1,
      logo: "/images/aligner.png",
      title: "кейс MINI",
      vendorCode: "75785057",
      stockCount: 15,
      briefDescription: "Набор из 15 элайнеров",
      fullDescription: "Данный пакет лечения содержит 15 элайнеров из биосиликона для самого простого и быстрого курса лечения. Такой вариант больше всего подходит для людей любого возраста с небольшим искривлением прикуса",
      descriptionList: [
        "составление плана лечения",
        "изготовление элайнеров",
        "техническая поддержка на протяжении всего лечения",
        "1 элайнер бесплатно в случае поломки",
        "2 ретенционные каппы"
      ],
      price: 13_000,
      media: [
        {
          id: 1,
          image: "/images/mediaSlider/img1.jpg"
        },
        {
            id: 2,
            image: "/images/aligner.png"
        },
        {
            id: 3,
            image: "/images/aligner.png"
        },
        {
            id: 4,
            image: "/images/aligner.png"
        },
      ]
    },
    {
      id: 2,
      logo: "/images/aligner.png",
      title: "кейс MAX",
      vendorCode: "75785058",
      stockCount: 30,
      briefDescription: "Набор из 30 элайнеров",
      fullDescription: "Данный пакет лечения содержит 30 элайнеров из биосиликона для самого простого и быстрого курса лечения. Такой вариант больше всего подходит для людей любого возраста с небольшим искривлением прикуса",
      descriptionList: [
        "составление плана лечения",
        "изготовление элайнеров",
        "1 ревизия",
        "техническая поддержка на протяжении всего лечения",
        "2 элайнера бесплатно в случае поломки",
        "2 ретенционные каппы"
      ],
      price: 26_000,
      media: [
        {
          id: 1,
          image: "/images/mediaSlider/img2.jpg"
        },
        {
            id: 2,
            image: "/images/aligner.png"
        },
        {
            id: 3,
            image: "/images/aligner.png"
        },
        {
            id: 4,
            image: "/images/aligner.png"
        },
        {
          id: 5,
          image: "/images/mediaSlider/img4.jpg"
        },
      ]
    },
    {
      id: 3,
      logo: "/images/aligner.png",
      title: "кейс MAX+",
      vendorCode: "75785059",
      stockCount: 60,
      briefDescription: "Набор из 60 элайнеров",
      fullDescription: "Данный пакет лечения содержит 60 элайнеров из биосиликона для самого простого и быстрого курса лечения. Такой вариант больше всего подходит для людей любого возраста с небольшим искривлением прикуса",
      descriptionList: [
        "составление плана лечения",
        "изготовление элайнеров",
        "2 ревизии",
        "техническая поддержка на протяжении всего лечения",
        "4 элайнера бесплатно в случае поломки",
        "2 ретенционные каппы"
      ],
      price: 52_000,
      media: [
        {
          id: 1,
          image: "/images/mediaSlider/img3.jpg"
        },
        {
            id: 2,
            image: "/images/aligner.png"
        },
        {
            id: 3,
            image: "/images/aligner.png"
        },
        {
            id: 4,
            image: "/images/aligner.png"
        },
      ]
    },
  ]

  const dictionary = await getCatalogDictionary(lang)
  

    return (
      <Catalog dictionary={dictionary} products={products}/>
    )
} 