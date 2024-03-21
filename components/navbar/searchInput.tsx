import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchIconInputProps { }

const searchInputVariants = {
    hidden: { opacity: 0, scaleX: 0 }, // Adjust scaleX for leftward growth
    visible: { opacity: 1, scaleX: 1, transition: { duration: 0.8 } },
};

const SearchIconInput: React.FC<SearchIconInputProps> = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

  

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };



    return (
        <motion.div className="relative place-content-center">
            <FontAwesomeIcon
                icon={faSearch}
                className={`text-slate-500 text-lg cursor-pointer ${isSearchActive ? 'hidden' : ''}`}
                onClick={()=> setIsSearchActive(true)}
            />

            {isSearchActive && (<FontAwesomeIcon
                icon={faSearch}
                className={`relative left-9 text-slate-500 text-lg cursor-pointer`}
            />
            )}
            <motion.input
                className={` bg-transparent text-black px-7 py-1 rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-gray-300 ${isSearchActive ? 'visible' : 'hidden'
                    }`}
                type="text"
                placeholder=" অনুসন্ধান..."
                value={searchTerm}
                onChange={handleSearchChange}
                variants={searchInputVariants}
                initial="hidden"
                animate={isSearchActive ? "visible" : "hidden"}
            />
            {isSearchActive && (
                <FontAwesomeIcon
                    icon={faList}
                    className="absolute text-gray-500 text-lg px-2 cursor-pointer ml-auto mt-2 right-5" // Right-aligned
                    onClick={()=> setIsSearchActive(false)}
                />
            )}
        
        </motion.div>
    );
};

export default SearchIconInput;
