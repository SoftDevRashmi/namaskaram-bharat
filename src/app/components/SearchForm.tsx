import React from 'react';

const SearchForm: React.FC = () => {
  return (
    <form className="flex flex-col items-center mt-4 bg-white p-4 rounded shadow-md w-1/2">
      <label className="text-gray-700 mb-1">Destination</label>
      <input
        type="text"
        placeholder="Where are you going?"
        className="border p-2 mb-2 w-full rounded"
      />
      <label className="text-gray-700 mb-1">From - To</label>
      <input
        type="text"
        placeholder="dd/mm/yyyy - dd/mm/yyyy"
        className="border p-2 mb-2 w-full rounded"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 w-full rounded">
        Search
      </button>
    </form>
  );
};

export default SearchForm; // Ensure this is a default export