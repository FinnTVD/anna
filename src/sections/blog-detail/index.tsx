import BannerBlogDetail from '@/sections/blog-detail/Banner';
import React from 'react';
import './style.css';
import ContentBlogDetail from '@/sections/blog-detail/Content';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import CommentBlog from '@/sections/blog-detail/Comment';
import SectionHome from '@/sections/home/view/SectionHome';
import BlogOther from '@/sections/blog-detail/BlogOther';

interface IpropBlogDetail {
  slug: string;
}
const BlogDetail = async ({ slug }: IpropBlogDetail) => {
  const listBlog = await fetchDataRest('GET', `wp/v2/posts?slug=${slug}`);

  return (
    <div>
      <BannerBlogDetail />
      <ContentBlogDetail listBlog={listBlog[0]} />
      <BlogOther />
      <CommentBlog />
      <SectionHome />
    </div>
  );
};

export default BlogDetail;
