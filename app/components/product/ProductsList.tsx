
import { fetchProducts } from '@/app/lib/data';
import ProductItem from "./ProductItem";

export default async function ProductsList({amount}: {amount?: number}) {
  const data = await fetchProducts(amount);
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-6 lg:mb-12">
      {data?.products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}