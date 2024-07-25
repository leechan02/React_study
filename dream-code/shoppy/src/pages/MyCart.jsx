import React from "react";
import { getCart } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";

const SHIPPING = 3000;
export default function MyCart() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(uid),
  });
  if (isLoading) return <div>Loading...</div>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (acc, product) => acc + parseInt(product.price) * product.quantity
    );

  return (
    <section>
      <p>My Cart</p>
      {!hasProducts && <p>No products in cart</p>}
      {hasProducts && (
        <>
          <ul>
            {products.map((product) => (
              <CartItem key={product.id} product={product} uid={uid} />
            ))}
          </ul>
          <div>
            <PriceCard text="Total Products" price={totalPrice} />
            <BsFillPlusCircleFill />
            <PriceCard text="Shipping Fee" price={SHIPPING} />
            <FaEquals />
            <PriceCard text="Total" price={totalPrice + SHIPPING} />
          </div>
        </>
      )}
    </section>
  );
}
