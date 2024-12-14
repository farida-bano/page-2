"use client";

import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown, FaList, FaEye } from 'react-icons/fa';
import { useState } from 'react';

const Hero = () => {
  const [view, setView] = useState('grid'); // State to handle view type: grid or list
  const [filter, setFilter] = useState('popularity'); // State for filter
  const [items, setItems] = useState([
    { id: 91, name: 'Cloth 91' },
    { id: 92, name: 'Cloth 92' },
    { id: 93, name: 'Cloth 93' },
    { id: 94, name: 'Cloth 94' },
    { id: 95, name: 'Cloth 95' },
  ]);

  // Function to handle filter change
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setItems((prevItems) =>
      newFilter === 'popularity'
        ? [...prevItems].sort((a, b) => a.id - b.id) // Sort by popularity
        : [...prevItems].reverse() // Reverse items for other filter options
    );
  };

  return (
    <>
      {/* Shop Section */}
      <div className="w-full px-4 py-6 mt-20">
        <div className="flex flex-wrap items-center justify-between gap-4 max-w-screen-lg mx-auto">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-[20px] md:text-[24px] font-bold text-black">Shop</h2>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center gap-1 ml-auto">
            <Link href="/" className="text-[14px] font-bold text-[#252B42]">Home</Link>
            <ArrowRightIcon className="w-4 h-4 text-[#252B42]" />
            <Link href="/shop" className="text-[14px] font-bold text-[#BDBDBD]">Shop</Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex justify-center items-center py-8">
        <div className="max-w-screen-lg w-full px-4 overflow-x-auto">
          <div className={`flex flex-wrap gap-4 ${view === 'list' ? 'flex-col' : 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'}`}>
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-md shadow-md flex-shrink-0"
                style={{ width: '190px', height: '223px' }}
              >
                <Image src={`/${item.id}.png`} alt={item.name} width={205} height={223} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="w-full bg-white shadow-sm py-4">
        <div className="max-w-screen-lg mx-auto flex flex-wrap justify-between items-center px-4">
          {/* Showing Results Text */}
          <div className="text-[14px] font-bold w-full sm:w-auto text-center sm:text-left">
            Showing all {items.length} results
          </div>

          {/* VIEWS Section */}
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setView('grid')}
              className={`flex items-center justify-center gap-1 px-4 py-2 rounded-lg border ${view === 'grid' ? 'text-blue-600 border-blue-600' : 'text-gray-600 border-gray-300'}`}
            >
              <FaList /> Grid
            </button>
            <button
              onClick={() => setView('list')}
              className={`flex items-center justify-center gap-1 px-4 py-2 rounded-lg border ${view === 'list' ? 'text-blue-600 border-blue-600' : 'text-gray-600 border-gray-300'}`}
            >
              <FaEye /> List
            </button>
          </div>

          {/* Filter Dropdown Section */}
          <div className="relative w-full sm:w-auto">
            <button
              onClick={() => handleFilterChange('popularity')}
              className="text-blue-600 w-full h-full flex justify-between items-center px-4 py-2 rounded-lg border border-gray-300"
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)} <FaChevronDown />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

