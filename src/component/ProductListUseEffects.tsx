import { useEffect, useState } from "react";

const ProductListUseEffects = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log(
      "Fetching details from backend on the change of category : " + category
    );
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return <div>{products}</div>;
};

export default ProductListUseEffects;
