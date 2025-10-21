import Stripe from "stripe";
import { ProductCard } from "./product-card";

interface Props {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded w-full mb-4"
        />
      </div>

      <ul>
        {products.map((product) => {
          return (
            <li>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
