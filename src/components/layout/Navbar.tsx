
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container-section py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 gradient-bg rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="font-poppins font-semibold text-xl text-brand-dark">SkillSpark</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-brand-purple font-medium">Home</Link>
          <Link to="/courses" className="text-gray-700 hover:text-brand-purple font-medium">Courses</Link>
          <Link to="/workshops" className="text-gray-700 hover:text-brand-purple font-medium">Workshops</Link>
          <Link to="/hackathons" className="text-gray-700 hover:text-brand-purple font-medium">Hackathons</Link>
          <Link to="/corporate" className="text-gray-700 hover:text-brand-purple font-medium">Corporate</Link>
          
          {/* Blog Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-700 hover:text-brand-purple font-medium flex items-center gap-1 focus:outline-none">
              Blog <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/blog" className="w-full">All Articles</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/blog?category=tech-trends" className="w-full">Tech Trends</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/blog?category=tutorials" className="w-full">Tutorials</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/blog?category=career" className="w-full">Career Advice</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/blog?category=success-stories" className="w-full">Success Stories</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/about" className="text-gray-700 hover:text-brand-purple font-medium">About Us</Link>
          <Link to="/contact" className="text-gray-700 hover:text-brand-purple font-medium">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="font-medium">Login</Button>
          <Button className="bg-brand-purple hover:bg-opacity-90 text-white font-medium">Register</Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden p-2 text-gray-700">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t py-4 px-4 bg-white animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-brand-purple font-medium py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/courses" className="text-gray-700 hover:text-brand-purple font-medium py-2" onClick={toggleMenu}>Courses</Link>
            <Link to="/workshops" className="text-gray-700 hover:text-brand-purple font-medium py-2" onClick={toggleMenu}>Workshops</Link>
            <Link to="/hackathons" className="text-gray-700 hover:text-brand-purple font-medium py-2" onClick={toggleMenu}>Hackathons</Link>
            <Link to="/corporate" className="text-gray-700 hover:text-brand-purple font-medium py-2" onClick={toggleMenu}>Corporate</Link>
            
            {/* Blog with subcategories in mobile menu */}
            <div className="space-y-2">
              <Link to="/blog" className="text-gray-700 hover:text-brand-purple font-medium py-2 block" onClick={toggleMenu}>Blog</Link>
              <div className="pl-4 space-y-2 border-l-2 border-gray-100">
                <Link to="/blog?category=tech-trends" className="text-gray-600 hover:text-brand-purple text-sm py-1 block" onClick={toggleMenu}>Tech Trends</Link>
                <Link to="/blog?category=tutorials" className="text-gray-600 hover:text-brand-purple text-sm py-1 block" onClick={toggleMenu}>Tutorials</Link>
                <Link to="/blog?category=career" className="text-gray-600 hover:text-brand-purple text-sm py-1 block" onClick={toggleMenu}>Career Advice</Link>
                <Link to="/blog?category=success-stories" className="text-gray-600 hover:text-brand-purple text-sm py-1 block" onClick={toggleMenu}>Success Stories</Link>
              </div>
            </div>
            
            <Link to="/about" className="text-gray-700 hover:text-brand-purple font-medium py-2" onClick={toggleMenu}>About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-purple font-medium py-2" onClick={toggleMenu}>Contact</Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full font-medium">Login</Button>
              <Button className="bg-brand-purple hover:bg-opacity-90 text-white w-full font-medium">Register</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
