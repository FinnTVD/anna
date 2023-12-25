import BannerBlog from '@/sections/blog/Banner';
import ListBlog from '@/sections/blog/ListBlog';
import ServiceBlog from '@/sections/blog/Service';
import SectionHome from '@/sections/home/view/SectionHome';
import './style.css';

function Blog() {
  return (
    <div>
      <BannerBlog />
      <ServiceBlog />
      <ListBlog />
      <SectionHome />
    </div>
  );
}

export default Blog;
