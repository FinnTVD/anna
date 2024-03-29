'use client';

import { createContext, useEffect, useState } from 'react';
import { IItemCart } from '@/types/types-general';
import { keyProductsInCart } from '@/configs/config';
import { SessionProvider } from 'next-auth/react';

export const ProductCartContext = createContext<any>({});
export function ContextProvider({ children }: any) {
  const [listCartGlobal, setListCartGlobal] = useState<IItemCart[]>([]);

  const handleChangeDataGlobal = (data: IItemCart[]): void => {
    setListCartGlobal(data);
  };

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      localStorage.getItem(keyProductsInCart) !== null
    ) {
      const storedData = localStorage.getItem(keyProductsInCart) as string;
      setListCartGlobal(JSON.parse(storedData));
    }
  }, []);

  return (
    <SessionProvider>
      <ProductCartContext.Provider
        value={{ handleChangeDataGlobal, listCartGlobal }}
      >
        {children}
      </ProductCartContext.Provider>
    </SessionProvider>
  );
}
