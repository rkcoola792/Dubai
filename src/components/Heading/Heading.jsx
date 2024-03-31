import React from 'react'

const Heading = ({heading,subheading}) => {
  return (

      <div className="top-heading flex flex-col gap-8 justify-center items-center text-center">
        <h1 className="text-mainBlue tracking-widest uppercase font-semibold">{heading}</h1>
        <h1 className="text-3xl font-bold capitalize">{subheading}</h1>
      </div>
   
  );
}

export default Heading
