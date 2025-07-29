import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

function Search({ onChange }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isExpanded) inputRef.current.focus();
  }, [isExpanded]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsExpanded(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);




  return (
    <div ref={containerRef} className="relative">
      <input
        onChange={ onChange }
        ref={inputRef}
        type="text"
        placeholder="Search . . ."
        className={`transition-all duration-300 ease-in-out border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm outline-none
        placeholder:text-gray-400 placeholder:font-regular
        ${isExpanded ? "w-[130px] opacity-100" : "w-0 opacity-0"} 
      `}
      />

      <FaSearch
        className="absolute right-[10px] top-1/2 -translate-y-1/2 cursor-pointer"
        size={19}
        onClick={() => setIsExpanded((prev) => !prev)}
      />
    </div>
  );
}

export default Search;
