import React from "react";
import { getCart } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import Button from "../components/ui/Button";

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
    <section className="p-8 flex flex-col">
      <p className="text-2xl text-center font-bold pb-4 border-b border-gray-300">My Cart</p>
      {!hasProducts && <p>No products in cart</p>}
      {hasProducts && (
        <>
          <ul className="border-b border-gray-300 mb-8 p-4 px-8">
            {products.map((product) => (
              <CartItem key={product.id} product={product} uid={uid} />
            ))}
          </ul>
          <div className="flex justify-between items-center mb-4 px-2 md:px-8 lg:px-16">
            <PriceCard text="Total Products" price={totalPrice} />
            <BsFillPlusCircleFill className="shrink-0" />
            <PriceCard text="Shipping Fee" price={SHIPPING} />
            <FaEquals className="shrink-0" />
            <PriceCard text="Total" price={totalPrice + SHIPPING} />
          </div>
          <Button text="Order" />
        </>
      )}
    </section>
  );
}
