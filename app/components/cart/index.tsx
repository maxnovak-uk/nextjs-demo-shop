"use client";

import React, { useEffect } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import ModalCart from '@/app/components/cart/CartModal';
import { useDispatch, useSelector } from 'react-redux';
import { setModalVisibility } from '@/app/redux/features/cart/cartSlice';
import { CartStateProp } from '@/app/types/cart';
import { usePathname } from 'next/navigation';

export default function Cart() {

  const isOpen = useSelector((state: CartStateProp) => state.cart.isOpen);
  const dispatch = useDispatch();
  const pathname = usePathname();
  
  const updateModalVisibility = (flag: boolean = false) => {
    dispatch(setModalVisibility(flag));
  }

  useEffect(() => {
    isOpen && updateModalVisibility(false);
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        aria-label="Open cart"
        onClick={() => updateModalVisibility(true)}
        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none"
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View notifications</span>
        <ShoppingBagIcon aria-hidden="true" className="size-6" />
      </button>
      <ModalCart isOpen={isOpen} setModalVisibility={updateModalVisibility} />
    </>
  )
}
