import React, { useContext } from "react";
import ProductsContext from "../Context/Products/ProductsContext";
import PageLoader from "./PageLoader";

function ProductCard({ product, isLoading, error }) {

  const { addToCart } = useContext(ProductsContext);

  const { category, img, price, title } = product;
  return (
    <div className="col-md-4">
      <div className="card bg-light text-center d-flex justify-content-center align-items-center flex-column">
        {isLoading  ? (
          <PageLoader />
        ) : error ? (
          <div>'Error'</div>
        ) : (
          <>
            <img src={img} className="img-top"></img>
            <div className="card-body">
              <div className="card-text text-black fw-bold">{title}</div>
              <div className="card-title fw-bold">{price}</div>
              <button
                className="btn btn-danger w-100 text-white"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
