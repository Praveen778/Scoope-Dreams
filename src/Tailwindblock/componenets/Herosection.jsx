import React from 'react'

const Herosection = ({change}) => {
  return (
<section>
<section className="body-font bg-BgColor text-TextColor">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-TextColor">Sweeten Your Day, One Scoop at a Time! 🍦
        <br className="hidden lg:inline-block" />Explore Flavors
      </h1>
      <p className="mb-8 leading-relaxed">Experience the finest, handcrafted ice cream made with the highest-quality ingredients. Every scoop is a moment to savor.All-natural, dairy-free, and low-sugar ice cream that tastes just as good as it feels. Indulge without the guilt.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
   <div className="">
      <img src="assets\kindpng_50629.png" alt="child" width={460} height={350}/>
   </div>
  </div>
</section>
</section>

  )
}

export default Herosection