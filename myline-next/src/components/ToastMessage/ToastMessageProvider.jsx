"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"

export const errorMessageContext = createContext(null)

export function useNewMessage (message="", isError=true, timeout=2000) {
    const [messages, setMessages] = useContext(errorMessageContext)
    const setNewMessage = useCallback(() => {
        setMessages(prev => prev.length >= 3 ? prev:
            [...prev, {
                message: message,
                isError: isError,
                timeout: timeout
            }]
        )
    }, [message])
    return setNewMessage 
}


export const useToastMessages = () => {
    const [messages, setMessages] = useContext(errorMessageContext)
    return [messages, setMessages]
}

const ErrorMessageProvider = ({children}) => {
    const [messages, setMessages] = useState([])

    return(
        <errorMessageContext.Provider value={[messages, setMessages]}>
            {children}
        </errorMessageContext.Provider>
    )
}


export default ErrorMessageProvider