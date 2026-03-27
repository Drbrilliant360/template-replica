import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  { img: blog1, title: "Be Smart, Be Innovatik", excerpt: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur" },
  { img: blog2, title: "Creativity Intelligence", excerpt: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur" },
  { img: blog3, title: "Modern Web Design Trends", excerpt: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur" },
];

const BlogSection = () => (
  <section id="news" className="section-padding section-bg">
    <div className="container mx-auto text-center mb-16">
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">BLOG NEWS</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Blog News Articles</h2>
      <p className="text-body max-w-lg mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div className="container mx-auto grid md:grid-cols-3 gap-8">
      {posts.map((post, i) => (
        <div key={i} className="bg-background rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
          <div className="overflow-hidden">
            <img src={post.img} alt={post.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
            <p className="text-sm text-body">{post.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BlogSection;
