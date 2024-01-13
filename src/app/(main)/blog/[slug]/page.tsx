import { fetchDataRest } from '@/lib/fetch-data-rest';
import BlogDetail from '@/sections/blog-detail';

export async function generateStaticParams() {
  const listBlog = await fetchDataRest('GET', 'post/v1/posts');

  return listBlog.map((blog: any) => ({
    slug: blog?.post_slug || undefined,
  }));
}

function BlogDetailPage({ params: { slug } }: any) {
  return <BlogDetail slug={slug} />;
}

export default BlogDetailPage;
