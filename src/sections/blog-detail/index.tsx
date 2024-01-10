import BannerBlogDetail from '@/sections/blog-detail/Banner';
import React from 'react';
import './style.css';
import ContentBlogDetail from '@/sections/blog-detail/Content';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import CommentBlog from '@/sections/blog-detail/FormComment';
import SectionHome from '@/sections/home/view/SectionHome';
import BlogOther from '@/sections/blog-detail/BlogOther';
import ContentComment from '@/sections/blog-detail/ContentComment';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';

interface IpropBlogDetail {
  slug: string;
}
const BlogDetail = async ({ slug }: IpropBlogDetail) => {
  const listBlog = await fetchDataRest('GET', `wp/v2/posts?slug=${slug}`);
  const listComment = await fetchDataRest(
    'GET',
    `custom-comment/v1/get-comments/${slug}`
  );
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  return (
    <div>
      <BannerBlogDetail />
      <ContentBlogDetail listBlog={listBlog[0]} />
      <BlogOther />
      <ContentComment
        listComment={listComment?.comments}
        slug={slug}
        session={session}
      />
      <SectionHome />
    </div>
  );
};

export default BlogDetail;
