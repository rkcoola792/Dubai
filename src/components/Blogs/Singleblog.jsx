import React from 'react'

const Singleblog = ({heading,subheading, author, designation,img,authorImage}) => {
  return (
    <div className="flex flex-col w-[350px] md:w-[100%]">
      <div className="image">
        <img
          src="/blog.png"
          alt=""
          className="w-[350px] h-[250px] 2xl:w-[400px] 2xl:h-[300px] rounded-lg"
        />
      </div>
      <div className="content flex flex-col gap-4 mt-4">
        <div className="heading font-bold text-xl">{heading}</div>
        <div className="subheading text-gray-600 text-sm">{subheading}</div>
        <div className="author-designation flex gap-2">
          <div className="author-img">
            <img src="/Avatar.png"></img>
          </div>
          <div className='name-designation'>
            <h1 className='font-semibold text-sm'> {author}</h1>
          <h1 className='text-gray-600 text-sm'> {designation}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singleblog
