"use client"

import { useEffect, useState } from "react"
import { ProductShowcaseButton, ProductShowcaseButtonLeftArrow, ProductShowcaseButtonRightArrow, ProductShowcaseMainImage, ProductShowcaseMainImageWrapper, ProductShowcaseSliderContainer, ProductShowcaseSliderImage, ProductShowcaseSliderImageWrapper, ProductShowcaseSliderWrapper, ProductShowcaseUpperPanel, ProductShowcaseWrapper } from "./styles"

const ProductShowcaseSlider = ({images=[]}) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        setCurrentImageIndex(0)
    }, [images])
    

    const slideToLeft = () => {
        setCurrentImageIndex(prev => prev === 0 ? prev : prev-1)
    }

    const slideToRight = () => {
        setCurrentImageIndex(prev => prev === images.length-1 ? prev : prev+1)
    }
    
    return (
        <ProductShowcaseWrapper>
            <ProductShowcaseUpperPanel>
                <ProductShowcaseButton onClick={slideToLeft} $direction="left">
                    <ProductShowcaseButtonLeftArrow/>
                </ProductShowcaseButton>
                <ProductShowcaseMainImageWrapper>
                    <ProductShowcaseMainImage src={images[currentImageIndex]?.image}/>
                </ProductShowcaseMainImageWrapper>
                
                <ProductShowcaseButton onClick={slideToRight}  $direction="right">
                    <ProductShowcaseButtonRightArrow/>
                </ProductShowcaseButton>
            </ProductShowcaseUpperPanel>
            <ProductShowcaseSliderWrapper>
                <ProductShowcaseSliderContainer $maxIndex={images.length-1} $currentImageIndex={currentImageIndex}>
                    {
                        images.map((image, index) => (
                            <ProductShowcaseSliderImageWrapper onClick={() => setCurrentImageIndex(index)} $isSelected={currentImageIndex === index} key={image.id}>
                                <ProductShowcaseSliderImage src={image.image}/>
                            </ProductShowcaseSliderImageWrapper>
                        ))
                    }
                </ProductShowcaseSliderContainer>
            </ProductShowcaseSliderWrapper>
        </ProductShowcaseWrapper>
    )
}

export default ProductShowcaseSlider