import React from 'react'
import { useSite } from 'context/SiteContext'
import Note from './Note'
const NotesList = () => {

    const {notes} = useSite()
  return (
    <div className='flex flex-col gap-y-4'>
        {notes.map((note, key) => (
            <Note note={note} key={note.id} id={key}/>
        ))}

    </div>
  )
}

export default NotesList