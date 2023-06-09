"use client"

import Modal from "@/components/Modal/Modal"
import { useParams } from "next/navigation"
import { ProductModalWrapper, ProductModalContainer, ProductModalProductWrapper, ProductModalProductTitle, ProductModalProductVendorCode, ProductModalProductPrice, ProductModalProductStockWrapper, ProductModalProductStockHeader, ProductModalProductStockCount, ProductModalProductSelectButton, ProductModalProductDescription, ProductModalProductCaution, ProductModalProductDescriptionList } from "./styles"
import ProductShowcaseSlider from "../ProductShowcaseSlider/ProductShowcaseSlider"

const ProductModal = ({product, isOpen, setOpen, isAuthorized, setNoAuthModalOpened, setConfirmationModalOpened, dictionary=null}) => {
  const { lang } = useParams()


  return (
    <Modal isOpen={isOpen} setOpen={setOpen}>
      <ProductModalWrapper>
        <ProductModalContainer>
            <ProductShowcaseSlider images={product.media}/>
            <ProductModalProductWrapper>
              <ProductModalProductTitle>{product.title}</ProductModalProductTitle>
             {/*  <ProductModalProductVendorCode>{dictionary.vendorCode}: {product.vendorCode}</ProductModalProductVendorCode> */}
             {/*  <ProductModalProductPrice>{new Intl.NumberFormat(undefined, {useGrouping: true}).format(product.price)} ₽</ProductModalProductPrice> */}
              {/* <ProductModalProductStockWrapper>
                <ProductModalProductStockHeader>{dictionary.stock}:</ProductModalProductStockHeader>
                <ProductModalProductStockCount>{product.stockCount}</ProductModalProductStockCount>
              </ProductModalProductStockWrapper> */}

              <ProductModalProductDescriptionList>
                {product.descriptionList.map((description, index) => (
                  <li key={index}>
                    {description}
                  </li>
                ))}
              </ProductModalProductDescriptionList>
             {/*  <ProductModalProductSelectButton onClick={() => {
                setOpen(false)
                if (!isAuthorized){
                  setNoAuthModalOpened(true)
                }
                else{
                  setConfirmationModalOpened(true)
                }
              }}> {dictionary.chooseDoctor} </ProductModalProductSelectButton> */}
            </ProductModalProductWrapper>
        </ProductModalContainer>
      </ProductModalWrapper>
    </Modal>
  )
}

export default ProductModal