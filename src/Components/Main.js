import React, {useContext, useEffect, useState} from "react";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import SearchForm from "./SearchForm";
import productsApi from "../api/productsApi";
import ProductsContext from "../Context/Products/ProductsContext";
import PageLoader from "./PageLoader";

function Main() {

  const [data, setData] = useState([]);

  const { params, isSelected } = useContext(ProductsContext);

    //loader and error
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const getProducts = async () => {
    // const params = { category: params };
    try {
      const response = await productsApi.getAllProducts({params});
      console.log("Response data", response.data);
      setIsLoading(false);
      setData(response.data);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    getProducts();
  }, [params]);

  if (isLoading && !params.search && !isSelected) return <PageLoader />;
  
  if (error) {
    return (
      <div className="container" >
        <div className="text-center text-red display-3" >Error while Loading ressource</div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Categories/>
        <SearchForm />
      </div>

      <div className="container">
        <div className="row p-4 mx-auto g-4">

          {data.map((product, id) => {
            return (
              <ProductCard product={product} key={id} error={error} isLoading={isLoading} />
            );
          })}
          
        </div>
      </div>
    </div>
  );
}

export default Main;
