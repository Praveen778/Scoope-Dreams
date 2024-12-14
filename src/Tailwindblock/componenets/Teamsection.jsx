import React from 'react'

const Teamsection = ({change}) => {
  return (
    <section>
        <section className="bg-white-50 bg-BgColor">

{/* <!-- Team Section --> */}
<div className="container mx-auto p-6">

  {/* <!-- Title --> */}
  <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Scoope Dreams Teams</h1>

  {/* <!-- Team Grid --> */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">

    {/* <!-- Team 1: Development Team --> */}
    <div className="bg-white rounded-lg shadow-md border border-gray-300 p-6 hover:bg-gray-100 transition duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">Product Development Team</h2>
      <p className="text-gray-600 mt-4 text-sm">Creates new flavors and improves existing products based on market trends and customer preferences..</p>
    </div>

    {/* <!-- Team 2: QA Team --> */}
    <div className="bg-white rounded-lg shadow-md border border-gray-300 p-6 hover:bg-gray-100 transition duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">QA Team</h2>
      <p className="text-gray-600 mt-4 text-sm">Ensures the ice cream meets safety standards and maintains consistency in taste, texture, and appearance.</p>
    </div>

    {/* <!-- Team 3: UX/UI Design Team --> */}
    <div className="bg-white rounded-lg shadow-md border border-gray-300 p-6 hover:bg-gray-100 transition duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">Supply Chain Team</h2>
      <p className="text-gray-600 mt-4 text-sm">Manages the sourcing of ingredients, production, and distribution to ensure timely and efficient product delivery..</p>
    </div>

    {/* <!-- Team 4: Product Management Team --> */}
    <div className="bg-white rounded-lg shadow-md border border-gray-300 p-6 hover:bg-gray-100 transition duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">Customer Service Team</h2>
      <p className="text-gray-600 mt-4 text-sm">Handles inquiries, complaints, and feedback from customers to maintain satisfaction and loyalty.</p>
    </div>

    {/* <!-- Team 5: DevOps Team --> */}
    <div className="bg-white rounded-lg shadow-md border border-gray-300 p-6 hover:bg-gray-100 transition duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">Finance Team</h2>
      <p className="text-gray-600 mt-4 text-sm">Oversees budgeting, financial planning, and analysis to ensure profitability and sustainable growth.</p>
    </div>

    {/* <!-- Team 6: Marketing and Sales Team --> */}
    <div className="bg-white rounded-lg shadow-md border border-gray-300 p-6 hover:bg-gray-100 transition duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">Human Resources Team</h2>
      <p className="text-gray-600 mt-4 text-sm">Handles recruitment, employee training, and workplace management to ensure a skilled and motivated workforce.</p>
    </div>

  </div>

</div>

</section>
    </section>
  )
}

export default Teamsection