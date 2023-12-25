import BlogDetail from '@/sections/blog-detail';
import React from 'react';

function BlogDetailPage({ params: { slug } }: any) {
  return <BlogDetail slug={slug} />;
}

export default BlogDetailPage;
