
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
    <div className="container mx-auto px-4">
      <div className="flex justify-center m-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-40 ">
          {/* Column 1 */}
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b-2 text-center">Shop</h2>
            <ul className="space-y-2 text-center">
              <li><a href="#" className="hover:text-white text-lg ease-in-out transition-all duration-300">Clothing</a></li>
              <li><a href="#" className="hover:text-white text-lg ease-in-out transition-all duration-300">Accessories</a></li>
              <li><a href="#" className="hover:text-white text-lg ease-in-out transition-all duration-300">Shoes</a></li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b-2 text-center">Customer Care</h2>
            <ul className="space-y-2 text-center">
              <li><a href="#" className="hover:text-white text-lg ease-in-out transition-all duration-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-white text-lg ease-in-out transition-all duration-300">FAQs</a></li>
              <li><a href="#" className="hover:text-white text-lg ease-in-out transition-all duration-300">Shipping & Returns</a></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b-2 text-center">About Us</h2>
            <ul className="space-y-2 text-center">
              <li><a href="#" className="hover:text-white text-lg ease-in-out transition-all duration-300">Our Story</a></li>
              <li><a href="#" className="hover:text-white text-lg ease-in-out transition-all duration-300">Meet the Team</a></li>
              <li><a href="#" className="hover:text-white text-lg ease-in-out transition-all duration-300">Blog</a></li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b-2 text-center">Connect</h2>
            <ul className="space-y-2 text-center">
              <li><a href="#" className="hover:text-white text-lg ease-in-out transition-all duration-300">Facebook</a></li>
              <li><a href="#" className="hover:text-white text-lg ease-in-out transition-all duration-300">Twitter</a></li>
              <li><a href="#" className="hover:text-white text-lg ease-in-out transition-all duration-300">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Disclaimer */}
      <div className="mt-8 text-sm text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Your E-Commerce Store. All rights reserved.
      </div>
    </div>
  </footer>

  )
}

export default Footer
  