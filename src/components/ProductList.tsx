import { useState, useEffect } from "react";
import { getProducts } from "../controllers/productController";
import Product from "./Product";

interface ProductInterface {
  category: string;
  description: string;
  image: string;
  price: number;
  rating: object;
  title: string;
}
function ProductList(): JSX.Element {
  const [productList, setProductList] = useState<ProductInterface[]>([]);

  useEffect(() => {
    getProducts()
      .then((r) => setProductList(r.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {productList.length === 0 ? (
        "No hay productos"
      ) : (
        <div className="bg-blue">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900"></h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {productList.map(
                (product: ProductInterface, i: number): JSX.Element => (
                  <Product
                    key={i}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                  />
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductList;
