'use client';

import ProductDetail from '@/sections/product/detail-view/detail';

// Return a list of `params` to populate the [slug] dynamic segment

function DetaiPage({ params: { slug } }: any) {
  return <ProductDetail slug={slug} />;
}

export default DetaiPage;
