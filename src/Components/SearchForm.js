import React, { useContext } from "react";
import ProductsContext from "../Context/Products/ProductsContext";

function SearchForm() {

  const { searchFilter } = useContext(ProductsContext);

  return (
    <div className="main container d-flex justify-content-center align-items-center flex-column my-5">
        <div className="row w-75">
      <form>
          <input
            onChange={(e)=>searchFilter(e)}
          className="form-control mt-5 bg-light outline-none text-dark"
          placeholder="Search item"
        ></input>
      </form>
    </div>
    </div>
    
  );
}

export default SearchForm;
