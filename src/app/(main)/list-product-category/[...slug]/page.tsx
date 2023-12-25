import ListProduct from '@/sections/list-product';

// Return a list of `params` to populate the [slug] dynamic segment

function ListProductPage({ params: { slug } }: any) {
  return <ListProduct slug={slug} />;
}

export default ListProductPage;
