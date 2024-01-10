import BannerBlog from '@/sections/blog/Banner';
import ServiceBlog from '@/sections/blog/Service';
import SectionHome from '@/sections/home/view/SectionHome';
import './style.css';
import ListBlog from '@/sections/blog/ListBlog';
import { fetchDataRest } from '@/lib/fetch-data-rest';

const Blog = async () => {
  const listBlog = await fetchDataRest('GET', 'post/v1/posts');

  return (
    <div>
      <BannerBlog />
      <div className="container">
        <ServiceBlog blogItemFirst={listBlog[0]} />
        <ListBlog listBlog={listBlog} />
      </div>
      <SectionHome />
    </div>
  );
};

export default Blog;
