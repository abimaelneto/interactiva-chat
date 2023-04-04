import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Cart = dynamic(() => import("cart/Cart"), { suspense: true });

export default function Web() {
  const [cart, setCart] = useState();

  return (
    <div>
      <h1>Web</h1>

      <Cart />
      <div dangerouslySetInnerHTML={cart} />
    </div>
  );
}
