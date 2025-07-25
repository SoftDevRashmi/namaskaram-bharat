import React from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaChevronDown,
  FaMapMarkerAlt,
} from "react-icons/fa";

const SearchForm: React.FC = () => {
  return (
    <form className="w-full flex justify-center mt-8">
      <div className="flex bg-teal-950 rounded-lg shadow-lg w-full max-w-5xl h-16 overflow-hidden">
        {/* Destination */}
        <div className="flex items-center px-4 py-3 w-1/3 border-r border-gray-700">
          <FaMapMarkerAlt className="text-gray-400 mr-2" />
          <div>
            <div className="text-s text-white-400">Destination</div>
            <input
              type="text"
              placeholder="Where are you going?"
              className="bg-transparent outline-none text-white w-full"
            />
          </div>
        </div>
        {/* From - To */}
        <div className="flex items-center px-4 py-3 w-1/3 border-r border-gray-700">
          <FaCalendarAlt className="text-white-400 mr-2" />
          <div>
            <div className="text-s text-white-400">From - To</div>
            <input
              type="text"
              placeholder="dd/mm/yyyy - dd/mm/yyyy"
              className="bg-transparent outline-none text-white w-full"
            />
          </div>
        </div>
        {/* Advance */}
        <div className="flex items-center px-4 py-3 w-1/3">
          <div className="flex-1">
            <div className="text-s text-white-400">Advance</div>
            <div className="flex items-center text-white">
              More <FaChevronDown className="ml-1 text-gray-400" />
            </div>
          </div>
          <button
            type="submit"
            className="ml-4 bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded transition"
          >
            <FaSearch className="inline mr-2" />
            Search
          </button>
        </div> 
      </div>
    </form>
  );
};

export default SearchForm;
