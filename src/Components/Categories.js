import React, { useContext } from 'react'
import ProductsContext from '../Context/Products/ProductsContext';
import CategoryBtn from './CategoryBtn';

function Categories() {

  const { isSelected, filterProducts } = useContext(ProductsContext);

    const categoriesList = ['All', "women", "men", "children", "All"];
  
  return (
      <div className="main container d-flex justify-content-center align-items-center flex-column my-5">
          {/* Main title */}
        <div className=" my-3">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h2>SHOP</h2>
            <div className="divider"></div>
          </div>
        </div>

        <div className="row w-100 mt-5 d-flex justify-content-between align-items-center mx-auto">
        {
          categoriesList.map((category, id) => (
              <CategoryBtn category={category} selected={isSelected === id} onSelect={()=>filterProducts(id, category)} />
  
          ))
          }
        </div>
    </div>
  )
}

export default Categories