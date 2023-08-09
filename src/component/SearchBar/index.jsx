import React from "react";
import Search from "../../assets/search-icon.svg"



const SearchBar = (props) => {
  const { setSearch, search } = props;

  const onChangeInput = (e) => {
    const { value } = e.target;
    setSearch(value.toLowerCase());
   
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const searchedInput = e.target[0].value;
    setSearch(searchedInput.toLowerCase());
  
  };
  return (
    <>
     <form action="/"  onSubmit={onSubmit}>
                <img src={Search} alt="search-Icon" />
                <input onChange={onChangeInput} type="text" placeholder="Enter something" name="search" id="search-box" value={search} />
            </form>
    
    </>
   

  );
};
export default SearchBar;