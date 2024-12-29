import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
            <a href="/">MyLogo</a>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
            <Link to="home" className="hover:text-gray-400">Home</Link>
            <Link to="products" className="hover:text-gray-400">Products</Link>
            <Link to="contact" className="hover:text-gray-400">contact</Link>
        </div>
        
    </div>
</nav>
  )
}
