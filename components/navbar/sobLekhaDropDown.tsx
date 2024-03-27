"use client"
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

type soblekhaProp ={
  sobClass: string;
}

const SobLekha = ({sobClass}:soblekhaProp) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [soblekhaSelect, setSoblekhaSelect] = useState('সব লেখা');

  useEffect(() => {
    sobClass = 'text-[#F9A106] font-semibold underline';
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      setSoblekhaSelect('সব লেখা');
    };
  }, []);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className={`${sobClass} inline-flex w-[110px] justify-center shadow-sm px-2  bg-white text-[18px] font-medium  focus:outline-none focus:text-[#F9A106]`}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : 'false'}
        
      >
        {soblekhaSelect}
        <FontAwesomeIcon icon={faAngleDown} className="ml-2 pt-1 h-5 w-5 focus:text-[#F9A106]" />
      </button>

      {isOpen && (
        <div className="backdrop-blur-md shadow-xl bg-yellow-500/30 z-[1000] origin-top-right absolute right-0 mt-2 w-56 rounded-md rounded-r-3xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" tabIndex={-1}>
          <div className="" role="none">
            <Link 
            href="/sob-kobita" 
            className="block px-4 py-2 text-sm rounded-tr-3xl text-gray-700 hover:bg-white hover:text-[#F9A10]" 
            role="menuitem" 
            tabIndex={-1} 
            id="options-menu-item-0"
            onClick={()=> setSoblekhaSelect('কবিতা')}
            >
              কবিতা
            </Link>
            <Link 
            href="/sob-golpo" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-white hover:text-[#F9A10]" 
            role="menuitem" 
            tabIndex={-1} 
            id="options-menu-item-1"
            onClick={()=> setSoblekhaSelect('গল্প')} 
            >
              গল্প
              </Link>
            <Link 
            href="#" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-white hover:text-[#F9A10]" 
            role="menuitem" 
            tabIndex={-1} 
            id="options-menu-item-2"
            onClick={()=> setSoblekhaSelect('অনুগল্প')}
            >
              অনুগল্প
              </Link>
            <Link 
            href="/sob-probondho" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-white hover:text-[#F9A10]" 
            role="menuitem" 
            tabIndex={-1} 
            id="options-menu-item-3"
            onClick={()=> setSoblekhaSelect('প্রবন্ধ')}

            >
              প্রবন্ধ
              </Link>
            <Link 
            href="#" 
            className="block px-4 py-2 text-sm rounded-br-3xl text-gray-700 hover:bg-white hover:text-[#F9A10]" 
            role="menuitem" 
            tabIndex={-1} 
            id="options-menu-item-4"
            onClick={()=> setSoblekhaSelect('জীবনী')}

            >
              জীবনী
              </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SobLekha;
