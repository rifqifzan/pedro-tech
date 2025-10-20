import Stripe from 'stripe';

interface Props{
    products: Stripe.Product[]
}

export const ProductList = ({products}: Props) => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Search products..." className="border p-2 rounded w-full mb-4" />
        </div>
    </div>
    <ul>
        {products.map((product) => {
            return <li></li>
        }}
    </ul> 
  )
}


