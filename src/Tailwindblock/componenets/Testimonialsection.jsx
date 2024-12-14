import React from 'react'

const Testimonialsection = ({change}) => {
  return (
   <section>
    <section class=" py-16 bg-BgColor text-TextColor">
    {/* <!-- Testimonial Section --> */}
    <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* <!-- Testimonial 1 --> */}
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <div class="flex items-center mb-6">
                    <img src="public\assets\istockphoto5.jpg" alt="Client 1" class="w-12 h-12 rounded-full mr-4" />
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800">John Doe</h3>
                        <p class="text-gray-500">CEO, Pride Corp</p>
                    </div>
                </div>
                <p class="text-gray-600 text-lg">"The chocolate fudge flavor is out of this world! It’s rich and creamy, definitely my new favorite dessert"</p>
            </div>
            {/* <!-- Testimonial 2 --> */}
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <div class="flex items-center mb-6">
                    <img src="public\assets\istockphoto6.jpg" alt="Client 2" class="w-12 h-12 rounded-full mr-4" />
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800">Jane Smith</h3>
                        <p class="text-gray-500">Marketing Director, New Solutions</p>
                    </div>
                </div>
                <p class="text-gray-600 text-lg">"I love how smooth and velvety the vanilla bean ice cream is. It's the perfect balance of sweetness and creaminess!"</p>
            </div>
            {/* <!-- Testimonial 3 --> */}
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <div class="flex items-center mb-6">
                    <img src="public\assets\istockphoto7.jpg" alt="Client 3" class="w-12 h-12 rounded-full mr-4" />
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800">Sarah M</h3>
                        <p class="text-gray-500">Product Manager, New Labs</p>
                    </div>
                </div>
                <p class="text-gray-600 text-lg">"The new coconut almond flavor is incredible! It has the right amount of crunch and sweetness. Perfect for a summer treat"</p>
            </div>
        </div>
    </div>
</section>
   </section>
  )
}

export default Testimonialsection