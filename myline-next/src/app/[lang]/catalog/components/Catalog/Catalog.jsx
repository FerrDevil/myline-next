"use client"
import { useState } from "react"
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal"
import NoAuthModal from "../NoAuthModal/NoAuthModal"
import ProductModal from "../ProductModal/ProductModal"
import { CatalogPageContainer, CatalogPageDescription, CatalogPageHeader, CatalogPageProduct, CatalogPageProductDescription, CatalogPageProductDetails, CatalogPageProductHeader, CatalogPageProductImage, CatalogPageProductImageWrapper, CatalogPageProductPrice, CatalogPageProductPriceText, CatalogPageProductPriceWrapper, CatalogPageProducts } from "@/app/[lang]/catalog/styles"

const Catalog = ({products=[], isAuthorized=false, dictionary=null}) => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0)

    const [isProductModalOpened, setProductModalOpened] = useState(false)
    const [isNoAuthModalOpened, setNoAuthModalOpened] = useState(false)
    const [isConfirmationModalOpened, setConfirmationModalOpened] = useState(false)

    const intl = new Intl.NumberFormat(undefined, {useGrouping: true})
    return (
    <CatalogPageContainer>
        <CatalogPageHeader>{dictionary.pageTitle}</CatalogPageHeader>
        <CatalogPageDescription>{dictionary.pageDescription}</CatalogPageDescription>
        <CatalogPageProducts>
          {
            products.map((product, index) => (
              <CatalogPageProduct key={product.id}>
                <CatalogPageProductImageWrapper>
                  <CatalogPageProductImage src={product.logo}/>
                </CatalogPageProductImageWrapper>
                
                <CatalogPageProductHeader>{product.title}</CatalogPageProductHeader>
               {/*  <CatalogPageProductDescription>{product.briefDescription}</CatalogPageProductDescription> */}
                {/* <CatalogPageProductPriceWrapper>
                  <CatalogPageProductPriceText>{dictionary.price}:</CatalogPageProductPriceText>
                  <CatalogPageProductPrice>{intl.format(product.price)} ₽</CatalogPageProductPrice>
                </CatalogPageProductPriceWrapper> 
                */}
                <CatalogPageProductDetails onClick={() => {
                    setCurrentProductIndex(index)
                    setProductModalOpened(true)
                }}>
                    {dictionary.extendButton}
                </CatalogPageProductDetails>
              </CatalogPageProduct>
            ))
          }
        </CatalogPageProducts>
        <NoAuthModal
            isOpen={isNoAuthModalOpened}
            setOpen={setNoAuthModalOpened}
            dictionary={dictionary.noAuthModal}
        />
        <ProductModal
            dictionary={dictionary.productModal}
            setNoAuthModalOpened={setNoAuthModalOpened}
            setConfirmationModalOpened={setConfirmationModalOpened}
            isAuthorized={isAuthorized}
            product={products[currentProductIndex]}
            isOpen={isProductModalOpened}
            setOpen={setProductModalOpened}
        />
        <ConfirmationModal
          dictionary={dictionary.confirmationModal}
          isOpen={isConfirmationModalOpened}
          setOpen={setConfirmationModalOpened}
        />
      </CatalogPageContainer>
    )

}

export default Catalog