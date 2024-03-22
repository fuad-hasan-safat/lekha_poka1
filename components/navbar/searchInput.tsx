import React, { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface SearchIconInputProps {
  isSearchActive: boolean;
  setIsSearchActive: React.Dispatch<SetStateAction<boolean>>;
}

const searchInputVariants = {
  hidden: { opacity: 0, scaleX: 0, scaleY: 0 }, // Adjust scaleX for leftward growth
  visible: { opacity: 1, scaleX: 1, scaleY: 1, transition: { duration: 0.9 } },
};

const SearchIconInput: React.FC<SearchIconInputProps> = ({
  isSearchActive,
  setIsSearchActive,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative flex flex-row place-content-center transition-all duration-800">
      <Image
        src="/images/svgs/search.svg"
        height={50}
        width={50}
        alt=""
        className={` cursor-pointer`}
        onClick={() => setIsSearchActive(true)}
      />

      <input
        className={`w-[200px] bg-transparent text-black py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 ${
          isSearchActive ? "visible" : "hidden"
        }`}
        type="text"
        placeholder=" অনুসন্ধান..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {isSearchActive && (
        <FontAwesomeIcon
          icon={faList}
          className="absolute text-gray-500 text-lg px-2 cursor-pointer ml-auto mt-2 right-5" // Right-aligned
          onClick={() => setIsSearchActive(false)}
        />
      )}
    </div>
  );
};

export default SearchIconInput;
