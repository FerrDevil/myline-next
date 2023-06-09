"use client"

import { useEffect, useState } from "react";
import { PDFReaderObject, PDFReaderWrapper } from "./styles";






const PDFReader = ({url}) => {
  
    return (
      <PDFReaderWrapper>
            <PDFReaderObject data={url} type="application/pdf" frameborder="0">
                <a href={url}>da</a>
                
            </PDFReaderObject>
      </PDFReaderWrapper>
    );
}

export default PDFReader