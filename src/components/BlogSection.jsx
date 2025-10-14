import BlogCard from "./cards/BlogCard";

const BlogSection = () => {
  return (
    <>
      <section className="center py-20 bg-gray-50">
        {/* Section title */}
        <div className="text-center">
          <p className="text-base text-Primary">Blog</p>
          <h1 className="text-[40px] font-semibold">Latest News</h1>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-8">
          {[...Array(3)].map((_, i) => (
            <BlogCard key={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogSection;
