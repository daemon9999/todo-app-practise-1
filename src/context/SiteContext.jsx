import { createContext, useContext, useState } from "react";

const Context = createContext()

const Provider = ({children}) => {
    const [note, setNote] = useState("")
    const [notes, setNotes] = useState([])

    const data = {
        note,
        setNote,
        notes,
        setNotes
    }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useSite = () => useContext(Context)

export default Provider