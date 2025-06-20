import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = ({ handleFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div className="border border-white w-full rounded-md">
      <div className="flex gap-2 h-[3rem] px-2 items-center  ">
        <CiSearch className="text-white text-2xl" />
        <input
          value={searchTerm}
          type="text"
          placeholder="Search note.."
          onChange={(e)=>{
            handleFilter(e.target.value) 
            setSearchTerm(e.target.value)
            }}
          className="text-white  h-full border-none bg-none w-[20rem] focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchInput;
