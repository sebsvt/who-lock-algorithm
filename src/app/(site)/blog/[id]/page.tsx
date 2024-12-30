import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    date: "2023-06-25",
    content: `
      <p>The landscape of web development is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we look to the future, several key trends are shaping the way we build and interact with web applications.</p>

      <h2>1. Progressive Web Apps (PWAs)</h2>
      <p>Progressive Web Apps continue to gain traction, offering a native app-like experience within a browser. They provide features such as offline functionality, push notifications, and home screen installation, blurring the line between web and native applications.</p>
    `,
  },
  // Add more blog posts here...
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id);
  const post = blogPosts.find((post) => post.id === postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blog
        </Link>
        <article className="prose dark:prose-invert prose-quoteless prose-neutral mx-auto">
          <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
          <time className="text-sm text-muted-foreground">{post.date}</time>
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="mt-8 leading-7"
          />
        </article>
      </main>
    </div>
  );
}
