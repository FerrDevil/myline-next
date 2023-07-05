"use client"
import { createPortal } from 'react-dom';

 const Portal = ( { children, getHTMLElementId } ) => {

        const mount = document.getElementById(getHTMLElementId)

        if (!mount) return null

        return createPortal(children, mount)
    }

export default Portal