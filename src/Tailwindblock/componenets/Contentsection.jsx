import React from 'react'

const Contentsection = ({change}) => {
  return (
    <section>
        <section className="text-gray-600 body-font bg-BgColor">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="assets\Flavoures.jpeg" />
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24" >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg> */}
            <img src="assets\images.jpg" alt="" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24"/>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Order Now</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base">Beat the heat with our refreshing ice cream. New flavors for the season are here</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">Ice cream is more than just a treat—it's an experience that brings joy, nostalgia, and comfort. This creamy dessert, made from a blend of milk, cream, sugar, and flavorings, has captured hearts around the world for centuries. Whether enjoyed on a sunny day or as the grand finale to a family dinner, ice cream is synonymous with indulgence.

From classic vanilla and rich chocolate to exotic flavors like matcha or salted caramel, ice cream offers endless possibilities for taste and creativity. It's a versatile dessert, found in countless forms: scooped into cones, sandwiched between cookies, served in sundaes, or even blended into milkshakes.</p>
          <a className="text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </section>
  )
}

export default Contentsection