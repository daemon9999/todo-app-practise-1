import React from "react";
import { AiFillCloseCircle, AiOutlinePlus } from "react-icons/ai";
import { useSite } from "context/SiteContext";
import { nanoid } from "nanoid";
const Input = () => {
    const {note, setNote, setNotes, notes} = useSite()

    const handleSubmit = e => {
        e.preventDefault()
        setNotes([...notes, {
            id: nanoid(),
            body: note
        }])
        setNote("")
    }

    const disabled = notes.find(n => n.body === note)
  return (
    <form onSubmit={handleSubmit} className="relative flex items-center gap-x-4 " >
      <input
        autoComplete="off"
        type="text"
        id="note"
        className="w-full h-11 peer outline-none text-gray-900 px-4 rounded valid:pt-2 focus:shadow-lg focus:shadow-blue-900 transition-all duration-500"
        required={true}
        value={note}
        onChange={e => setNote(e.target.value)}
      />
      <span className="absolute text-gray-800 top-1/2 -translate-y-1/2 left-4 peer-valid:top-2.5 transition-all peer-valid:text-xs">
        Add note
      </span>
      <button type="submit" disabled={disabled} className="h-11 w-11 bg-green-600 flex items-center justify-center rounded">
        <AiOutlinePlus/>
      </button>
    </form>
  );
};

export default Input;
