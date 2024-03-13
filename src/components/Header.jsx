import React from "react";
 export default function Header() {
    return(
        <header className="bg-gray-800 py-4 px-6">
            {/* Brand/logo */}
            <h1 className="text-white text-2xl font-bold">Your Portfolio Name</h1>

            {/* Navigation */}
            <nav className="mt-4">
                <ul className="flex space-x-4 text-white">
                <li><a href="/" className="hover:text-gray-300">Home</a></li>
                <li><a href="/about" className="hover:text-gray-300">About</a></li>
                <li><a href="/resume" className="hover:text-gray-300">Resume</a></li>
                <li><a href="/projects" className="hover:text-gray-300">Projects</a></li>
                <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
 }