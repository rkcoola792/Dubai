import { Person } from '@mui/icons-material'
import React from 'react'

const Single = ({icon,heading}) => {
  return (
    <div className='w-[320px] h-[180px] border border-gray-300 rounded-lg flex flex-col gap-4 p-6 py-8 bg-subtleBlue cursor-pointer'>
      <div className='icon'><img src="/Vector.png" alt="" /></div>
        <div className='heading'>{heading}</div>
    </div>
  )
}

export default Single
