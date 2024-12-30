import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    date: "2023-06-25",
    excerpt: "Exploring upcoming trends and technologies in web development.",
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    date: "2023-06-20",
    excerpt: "A deep dive into React Hooks and how to use them effectively.",
  },
  {
    id: 3,
    title: "Building Scalable APIs with GraphQL",
    date: "2023-06-15",
    excerpt: "Learn how to create efficient and flexible APIs using GraphQL.",
  },
  {
    id: 4,
    title: "The Power of Serverless Architecture",
    date: "2023-06-10",
    excerpt: "Discover the benefits and use cases of serverless computing.",
  },
  {
    id: 5,
    title: "Optimizing Web Performance",
    date: "2023-06-05",
    excerpt:
      "Techniques and best practices for improving website speed and user experience.",
  },
];

export default function BlogList() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-10">Blog</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Link
                  href={`/blog/${post.id}`}
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Read more →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
