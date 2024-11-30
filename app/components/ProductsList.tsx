import Image from "next/image";
import Link from "next/link";
import AddToCart from "@/app/components/cart/AddToCart";
import { ProductProp } from "../types/product";

const products = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    price: 9.99,
    brand: "Essence",
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
    ]
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    brand: "Glamour Beauty",
    price: 19.99,
    quantity: 2,
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
    ]
  }
]

export default function ProductsList() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <div key={product.id} className="relative group">
          <Link href={`/products/${product.id}`} className="block overflow-hidden rounded-t-md border border-gray-200">
            <Image
              alt={product.title}
              src={product.thumbnail}
              width={300}
              height={300}
              className="aspect-square w-full bg-gray-200 transition-transform duration-[2.5s] ease-linear lg:hover:scale-110 object-cover lg:aspect-auto lg:h-80"
            />
          </Link>
          <div className="border border-gray-200 border-t-0 p-4 rounded-b-md">
            <div className="flex justify-between mb-4 gap-x-4">
              <div>
                <h3 className="text-sm text-gray-700">
                  {product.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">${product.price}</p>
            </div>
            <div className="text-center">
              <AddToCart product={product} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}