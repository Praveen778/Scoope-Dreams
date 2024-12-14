import React from 'react'

const Pricingsection = ({change}) => {
  return (
    <section>
        <section className="bg-white-100 bg-BgColor">

{/* <!-- Product Section --> */}
<div className="container mx-auto p-6">

  {/* <!-- Title --> */}
  <h1 className="text-3xl font-semibold text-center mb-8">Our Top Products</h1>

  {/* <!-- Product Grid --> */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">

    {/* <!-- Product 1: Standard Card Style --> */}
    <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md overflow-hidden hover:border-blue-500 hover:shadow-lg transform hover:scale-105 transition duration-300">     
     <img src="public\assets\istockphoto-1363861153.jpg" alt="Product 1" className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">Jelly candies</h2>
        <p className="text-2xl font-semibold text-green-500 mt-4">$19.99</p>
        <ul className="text-gray-600 mt-4 space-y-2">
          <li>✔ High-quality materials</li>
          <li>✔ Durable</li>
          <li>✔ Eco-friendly production</li>
        </ul>
      </div>
    </div>

    {/* <!-- Product 2: With Border and Light Shadow --> */}
    <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md overflow-hidden hover:border-blue-500 hover:shadow-lg transform hover:scale-105 transition duration-300">
      <img src="public\assets\istockphoto2.jpg" alt="Product 2" className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">Hinamatsuri</h2>
        <p className="text-2xl font-semibold text-green-500 mt-4">$29.99</p>
        <ul className="text-gray-600 mt-4 space-y-2">
          <li>✔ Premium quality</li>
          <li>✔ Comfortable fit</li>
          <li>✔ Multiple sizes</li>
        </ul>
      </div>
    </div>

    {/* <!-- Product 3: With Gradient Background and Centered Text --> */}
    <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md overflow-hidden hover:border-blue-500 hover:shadow-lg transform hover:scale-105 transition duration-300">      
        <img src="public\assets\istockphoto3.jpg" alt="Product 4" className="w-full h-64 object-cover" />
      <div className="p-4">
        <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full absolute top-4 right-4 z-10">New</span>
        <h2 className="text-xl font-bold">Macarons dessert</h2>
        <p className="text-green-500 mt-4">$39.99</p>
        <ul className="mt-4 space-y-2 text-lg">
          <li>✔ Stylish and modern</li>
          <li>✔ Comfortable wear</li>
          <li>✔ Easy to maintain</li>
        </ul>
      </div>
    </div>
 

    {/* <!-- Product 4: With Hover Effect and Badge --> */}
    <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md overflow-hidden hover:border-blue-500 hover:shadow-lg transform hover:scale-105 transition duration-300">      
        <img src="public\assets\istockphoto4.jpg" alt="Product 4" className="w-full h-64 object-cover" />
      <div className="p-4">
        <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full absolute top-4 right-4 z-10">New</span>
        <h2 className="text-xl font-bold">autumn sweets</h2>
        <p className="text-2xl font-semibold text-green-500 mt-4">$49.99</p>
        <ul className="text-gray-600 mt-4 space-y-2">
          <li>✔ Exceptional features</li>
          <li>✔ High-tech design</li>
          <li>✔ Easy setup</li>
        </ul>
      </div>
    </div>

  </div>

</div>

</section>
    </section>
  )
}

export default Pricingsection