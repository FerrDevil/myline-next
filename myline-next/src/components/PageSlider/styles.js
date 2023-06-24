"use client"
import styled from "styled-components"

export const Main = styled.main`
      display: flex;
      flex-direction: column;
      background-color: ${props => props.$shouldRemoveBG ? "transparent" : "#f5f5f5"};
      position: relative;
      padding-top: var(--header-height);
      width: 100%;
      max-width: 100%;
      min-height: 100%;
      height: max-content;

      
      padding-inline: var(--page-padding-inline); 

`