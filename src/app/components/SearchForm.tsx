import React from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaChevronDown,
  FaMapMarkerAlt,
} from "react-icons/fa";

const SearchForm: React.FC = () => {
  return (
    <form className="w-full flex justify-center mt-8 px-4">
      <div className="flex flex-col md:flex-row bg-teal-950 rounded-lg shadow-lg w-full max-w-5xl overflow-hidden">
        {/* Destination */}
        <div className="flex items-center px-4 py-4 md:w-1/3 border-b md:border-b-0 md:border-r border-gray-700">
          <FaMapMarkerAlt className="text-gray-400 mr-2 flex-shrink-0" />
          <div className="w-full">
            <div className="text-sm text-white opacity-80">Destination</div>
            <input
              type="text"
              placeholder="Where are you going?"
              className="bg-transparent outline-none text-white w-full text-sm md:text-base"
            />
          </div>
        </div>
        {/* From - To */}
        <div className="flex items-center px-4 py-4 md:w-1/3 border-b md:border-b-0 md:border-r border-gray-700">
          <FaCalendarAlt className="text-white-400 mr-2 flex-shrink-0" />
          <div className="w-full">
            <div className="text-sm text-white opacity-80">From - To</div>
            <input
              type="text"
              placeholder="dd/mm/yyyy - dd/mm/yyyy"
              className="bg-transparent outline-none text-white w-full text-sm md:text-base"
            />
          </div>
        </div>
        {/* Advance */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center px-4 py-4 md:w-1/3">
          <div className="flex-1 mb-4 md:mb-0">
            <div className="text-sm text-white opacity-80">Advance</div>
            <div className="flex items-center text-white text-sm md:text-base">
              More <FaChevronDown className="ml-1 text-gray-400" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded transition flex items-center justify-center"
          >
            <FaSearch className="mr-2" />
            <span>Search</span>
          </button>
        </div> 
      </div>
    </form>
  );
};

export default SearchForm;
