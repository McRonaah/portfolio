import React from 'react'

const interests = [
  {
    title: 'Programming',
    desc: 'I love to create and build things from scratch. Programming allows me to do that.',
    img: 'https://res.cloudinary.com/dygngdd55/image/upload/v1709134038/WhatsApp_Image_2024-02-28_at_18.24.20_podkkl.jpg'
  },
  {
    title: 'Photography',
    desc: 'Capturing moments and creating memories is something I enjoy doing in my free time.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2SZuIAt1xr71WDC5do6TsDI7x-KgSsEH97lQYssNlOuZpEUAS8jRt_dniuw&s'
  },
  {
    title: 'Traveling',
    desc: 'Exploring new places and experiencing different cultures is something I am passionate about.',
    img: 'https://res.cloudinary.com/dygngdd55/image/upload/v1709133978/WhatsApp_Image_2024-02-05_at_00.08.26_hm51ui.jpg'
  },
  {
    title: 'Gaming',
    desc: 'Sample text. Click to select the text box. Click again or double click to start editing the text. Nec ultrices dui sapien eget mi proin sed libero. Aliquam eleifend mi in nulla posuere. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare..',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2SZuIAt1xr71WDC5do6TsDI7x-KgSsEH97lQYssNlOuZpEUAS8jRt_dniuw&s'
  },
  // ... your interests data
]

const Interest = () => {
  return (
    <div className="flex flex-col border border-gray-300 rounded p-8 my-2 mx-8">
      <h2 className="font-black mb-3 text-center">Hobbies & Interest</h2>
      {interests.map((interest, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
          <div style={{ flex: '50%', textAlign: 'center' }}>
            <img src={interest.img} alt={interest.title} className='h-72 w-5/6' />
          </div>
          <div style={{ flex: '50%' }}>
            <h2 className='text-center'>{interest.title}</h2>
            <p className='text-center'>{interest.desc}</p>
            <button>More</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Interest
