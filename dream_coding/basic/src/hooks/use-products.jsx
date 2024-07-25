import { useState, useEffect } from "react";

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("got data");
        setProducts(data);
      });
    return () => {
      console.log("cleanup");
    };
  }, [salesOnly]);

  return [loading, error, products];
}
