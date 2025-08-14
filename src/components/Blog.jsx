"use client";

const posts = [
  { title: "Mastering React Hooks", date: "July 10, 2025", excerpt: "A quick guide to React hooks...", link: "https://medium.com/@ahmedrahat9901/mastering-react-hooks-a-developers-guide-to-smarter-components-db32490fb697" },
  { title: "CSS Tricks with Tailwind", date: "June 20, 2025", excerpt: "Level up your Tailwind skills...", link: "https://medium.com/@ahmedrahat9901/css-tricks-you-didnt-know-you-could-do-with-tailwind-css-bee452551801" }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-base-100 dark:bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-base-content dark:text-base-100">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, idx) => (
            <div key={idx} className="card bg-base-100 dark:bg-base-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-base-content dark:text-base-100">{post.title}</h3>
              <p className="text-sm text-base-content/60 dark:text-base-100/60 mb-4">{post.date}</p>
              <p className="text-base-content/80 dark:text-base-100/80">{post.excerpt}</p>
              <a href={post.link} className="text-primary mt-4 inline-block">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
