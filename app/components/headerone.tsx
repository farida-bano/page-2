'use client';
import React, { useState, useEffect } from "react";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

const Headerone = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [loginModal, setLoginModal] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [cartItems, setCartItems] = useState<number>(0); // Cart item count
  const [favorites, setFavorites] = useState<number>(0); // Favorite item count

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (menu: string) => {
    setDropdown(dropdown === menu ? null : menu);
  };
  const toggleLoginModal = () => setLoginModal(!loginModal);
  const toggleSearch = () => setSearchActive(!searchActive);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);

  const handleAddToCart = () => setCartItems(cartItems + 1);
  const handleAddToFavorites = () => setFavorites(favorites + 1);

  const handleRegister = () => {
    setIsLoggedIn(true);
    setLoginModal(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setLoginModal(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      if (!e.target.closest('.dropdown')) {
        setDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white text-[#252B42] py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="text-4xl font-bold">
          <Link href="#" className="hover:text-[#23A6F0]">
            Bandage
          </Link>
        </div>

        {/* Mobile: Toggle Button for Menu */}
        <div className="md:hidden flex items-center">
          <button className="text-2xl text-[#252B42]" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        {/* Middle: Navigation Links */}
        <div
          className={`${menuOpen ? "block" : "hidden"} md:flex space-x-8 text-[#737373] font-bold`}
        >
          <div className="relative dropdown">
            <Link
              href="#"
              className="hover:text-[#23A6F0]"
              onClick={() => toggleDropdown("home")}
            >
              Home
            </Link>
            {dropdown === "home" && (
              <div className="absolute bg-white shadow-md mt-2 rounded">
                <Link
                  href="#"
                  className="block px-4 py-2 hover:text-[#23A6F0]"
                >
                  Subitem 1
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:text-[#23A6F0]"
                >
                  Subitem 2
                </Link>
              </div>
            )}
          </div>
          <div className="relative dropdown">
            <Link
              href="#"
              className="hover:text-[#23A6F0]"
              onClick={() => toggleDropdown("shop")}
            >
              Shop
            </Link>
            {dropdown === "shop" && (
              <div className="absolute bg-white shadow-md mt-2 rounded">
                <Link
                  href="#"
                  className="block px-4 py-2 hover:text-[#23A6F0]"
                >
                  Shop Item 1
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:text-[#23A6F0]"
                >
                  Shop Item 2
                </Link>
              </div>
            )}
          </div>
          <Link href="#" className="hover:text-[#23A6F0]">
            About
          </Link>
          <Link href="#" className="hover:text-[#23A6F0]">
            Blog
          </Link>
          <Link href="#" className="hover:text-[#23A6F0]">
            Contact
          </Link>
          <Link href="#" className="hover:text-[#23A6F0]">
            Pages
          </Link>
        </div>

        {/* Right Side: Login/Register and Icons */}
        <div className="flex items-center space-x-4 ml-8">
          {/* Login Icon */}
          <FiUser className="text-lg" onClick={toggleLoginModal} />

          {/* Login/Register Modal */}
          {loginModal && !isLoggedIn && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-lg font-bold mb-4">{isLoggedIn ? "Login" : "Register"}</h2>
                <button className="absolute top-4 right-4 text-gray-600" onClick={toggleLoginModal}>
                  ✕
                </button>
                {!isLoggedIn ? (
                  <>
                    <input
                      type="text"
                      placeholder="Username"
                      className="border p-2 rounded mb-4 w-full"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="border p-2 rounded mb-4 w-full"
                    />
                    <button className="bg-[#23A6F0] text-white px-4 py-2 rounded w-full" onClick={handleRegister}>
                      Register
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Username"
                      className="border p-2 rounded mb-4 w-full"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="border p-2 rounded mb-4 w-full"
                    />
                    <button className="bg-[#23A6F0] text-white px-4 py-2 rounded w-full" onClick={handleLogin}>
                      Login
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Search Bar */}
          <div className="relative">
            <CiSearch
              className={`text-lg ${searchActive ? "text-[#23A6F0]" : ""}`}
              onClick={toggleSearch}
            />
            {searchActive && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute top-full left-0 border mt-2 p-2 rounded shadow-md"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            )}
          </div>

          {/* Cart */}
          <div className="w-[46px] h-[46px] flex justify-center items-center ml-4 relative">
            <RiShoppingCart2Line className="text-lg text-[#23A6F0]" onClick={handleAddToCart} />
            <span className="absolute top-0 right-0 text-[#23A6F0] text-xs rounded-full px-2">
              {cartItems}
            </span>
          </div>

          {/* Heart */}
          <div className="w-[46px] h-[46px] flex justify-center items-center ml-4 relative">
            <FaRegHeart className="text-lg text-[#23A6F0]" onClick={handleAddToFavorites} />
            <span className="absolute top-0 right-0 text-[#23A6F0]  text-xs rounded-full px-2">
              {favorites}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Headerone;
