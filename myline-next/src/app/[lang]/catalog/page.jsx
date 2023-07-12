import { getCatalogDictionary } from "./dictionaries/dictionaries";
import Catalog from "./components/Catalog/Catalog";


export default async function CatalogPage({params: {lang}}) {

  const products = [
    {
      id: 1,
      logo: "/images/catalogItems/mini/logo.jpg",
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
          image: "/images/catalogItems/mini/image1.png"
        },
        {
            id: 2,
            image: "/images/catalogItems/mini/image2.png"
        },
        {
            id: 3,
            image: "/images/catalogItems/mini/image3.png"
        },
      ]
    },
    {
      id: 2,
      logo: "/images/catalogItems/max/logo.png",
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
          image: "/images/catalogItems/max/image1.png"
        },
        {
            id: 2,
            image: "/images/catalogItems/max/image2.png"
        },
        {
            id: 3,
            image: "/images/catalogItems/max/image3.png"
        },
      ]
    },
    {
      id: 3,
      logo: "/images/catalogItems/maxPlus/logo.png",
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
          image: "/images/catalogItems/maxPlus/image1.png"
        },
        {
            id: 2,
            image: "/images/catalogItems/maxPlus/image2.png"
        },
        {
            id: 3,
            image: "/images/catalogItems/maxPlus/image3.png"
        },
      ]
    },
  ]

  const dictionary = await getCatalogDictionary(lang)
  

    return (
      <Catalog dictionary={dictionary} products={products}/>
    )
} 