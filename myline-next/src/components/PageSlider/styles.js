"use client"
import styled from "styled-components"

export const Main = styled.main`
      background-color: ${props => props.$shouldRemoveBG ? "transparent" : "#f5f5f5"};
      position: relative;
      padding-top: var(--header-height);
      width: 100%;
      height: 100%;
      padding-inline: var(--page-padding-inline);
   

    
`