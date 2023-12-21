'use client';

import ListProduct from '@/sections/list-product';

// Return a list of `params` to populate the [slug] dynamic segment

const DetaiPage = async ({ params: { slug } }: any) => {
  return <ListProduct slug={slug} />;
};

export default DetaiPage;
