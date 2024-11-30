import Image from "next/image";
import Link from "next/link";
import AddToCart from "@/app/components/cart/AddToCart";

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35.00',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    color: 'Aspen White',
    price: '$35.00',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt:
      "Front of men's Basic Tee in aspen white.",
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    color: 'Charcoal',
    price: '$35.00',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt:
      "Front of men's Basic Tee in charcoal.",
  },
  {
    id: 4,
    name: 'Artwork Tee',
    href: '#',
    color: 'Iso Dots',
    price: '$50.00',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt:
      "Front of women's Artwork Tee with iso dots.",
  },
  {
    id: 5,
    name: 'Artwork Tee',
    href: '#',
    color: 'Iso Dots',
    price: '$50.00',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt:
      "Front of women's Artwork Tee with iso dots.",
  },
  {
    id: 6,
    name: 'Artwork Tee',
    href: '#',
    color: 'Iso Dots',
    price: '$50.00',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt:
      "Front of women's Artwork Tee with iso dots.",
  },
  // More products...
]

export default function ProductsList() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <div key={product.id} className="relative group">
          <Link href={`/products/${product.id}`} className="block overflow-hidden rounded-t-md border border-gray-200">
            <Image
              alt={product.imageAlt}
              src={product.imageSrc}
              width={663}
              height={916}
              className="aspect-square w-full bg-gray-200 transition-transform duration-[2.5s] ease-linear lg:hover:scale-110 object-cover lg:aspect-auto lg:h-80"
            />
          </Link>
          <div className="border border-gray-200 border-t-0 p-4 rounded-b-md">
            <div className="flex justify-between mb-4">
              <div>
                <h3 className="text-sm text-gray-700">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.price}</p>
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