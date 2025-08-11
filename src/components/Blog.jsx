const posts = [
  { title: "Mastering React Hooks", date: "July 10, 2025", excerpt: "A quick guide to React hooks...", link: "https://medium.com/@ahmedrahat9901/mastering-react-hooks-a-developers-guide-to-smarter-components-db32490fb697"   },
  { title: "CSS Tricks with Tailwind", date: "June 20, 2025", excerpt: "Level up your Tailwind skills...", link: "https://medium.com/@ahmedrahat9901/css-tricks-you-didnt-know-you-could-do-with-tailwind-css-bee452551801" }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
              <a href={post.link} className="text-gray-500 mt-4 inline-block">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
