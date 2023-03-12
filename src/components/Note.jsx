import classNames from 'classnames'
import React, { useState } from 'react'
import {AiOutlineCheck, AiOutlineDelete, AiOutlineClose} from "react-icons/ai"
import { useMediaQuery } from 'react-responsive'
import { useSite } from 'context/SiteContext'
const Note = ({note, id}) => {
    const {notes, setNotes} = useSite()
    const isTablet = useMediaQuery({query: "(min-width: 640px)"})
   const [done, setDone] = useState(false)


   const deleteNote = () => {
    setNotes(notes.filter(n => n.id !== note.id))
   }
  return (
    <div className='flex gap-x-4'>
        <div
        onClick={() => !isTablet && setDone(!done)} 
        className={classNames({
            'bg-blue-900 w-full gap-x-2 rounded h-10 flex items-center px-3 transition-all duration-500': true,
            'bg-green-600': done
        })}>
            <button className={classNames({
                'w-6 h-6 rounded-full bg-red-600  items-center sm:flex hidden justify-center transition-all duration-500': true,
                "!bg-green-600 border border-white": done
            })} onClick={() => setDone(!done)}>
                {done ? (
                <AiOutlineCheck/>

                ) : (
                    <AiOutlineClose/>
                )}
            </button>
            <p >
                
                {" " + note.body}
            </p>
            {done && (
                <span className='ml-auto font-semibold text-lg hidden sm:block'>
                    Done!
                </span>
            )}
        </div>
        <button className='w-11 h-10 flex items-center justify-center bg-red-600 rounded' onClick={deleteNote}>
            <AiOutlineDelete size={22}/>
        </button>
    </div>
  )
}

export default Note