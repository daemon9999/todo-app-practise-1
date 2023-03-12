import React from 'react'
import {MdNotes} from 'react-icons/md'
const Header = () => {
  return (
    <div className='bg-blue-900 text-white flex items-center py-4 font-bold text-3xl w-full px-10'>
            <MdNotes className='mr-3'/>
            TODO APP 
    </div>
  )
}

export default Header