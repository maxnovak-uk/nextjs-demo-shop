"use client";
import React from 'react';
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ProductProp } from '@/app/types/product';

export default function AddToCart({product}: {product: ProductProp}) {
  const addItem = (product: ProductProp, quantity: number) => {
    
  }
  return (
    <button className="inline-flex gap-x-2 items-center rounded-md bg-indigo-600 px-4 py-3 uppercase text-sm font-semibold text-white hover:bg-indigo-500" onClick={() => addItem(product, 1)}>
      <ShoppingCartIcon aria-hidden="true" className="size-6" />
      <span>Add to cart</span>
    </button>
  )
}
