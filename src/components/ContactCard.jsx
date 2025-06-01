import React from 'react'

const ContactCard = ({head,desc,form, index}) => {
  return (
    <div className=" relative text-left opacity-90 p-4 md:p-8 bg-[#040404f6] rounded-sm shadow-xl text-white space-y-10">
      {/* Index in top-left corner */}
      <p className="absolute text-white opacity-30 -top-30 -left-5 text-[200px] font-bold  pointer-events-none select-none z-5">
        {index+1}
      </p>

      {/* Foreground content */}
      <div className="relative z-10 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold">{head}</h2>
        <p className="text-sm md:text-md">{desc}</p>
        {form&&<button>Google Form</button>}
      </div>
    </div>
  )
}

export default ContactCard