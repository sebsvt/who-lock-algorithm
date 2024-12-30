import Hero from "@/components/site/hero-section";
import LatestSection from "@/components/site/latest-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <div className="grid gap-12 md:gap-16 lg:gap-20 py-12">
          <LatestSection
            title="Latest Blogs"
            items={[
              { title: "The Future of AI", date: "2023-06-15" },
              { title: "Web Development Trends 2023", date: "2023-06-10" },
              { title: "Mastering React Hooks", date: "2023-06-05" },
            ]}
          />
          <LatestSection
            title="Latest Lectures"
            items={[
              { title: "Introduction to Machine Learning", date: "2023-06-20" },
              { title: "Advanced JavaScript Concepts", date: "2023-06-18" },
              { title: "Responsive Web Design Workshop", date: "2023-06-16" },
            ]}
          />
          <LatestSection
            title="Latest Projects"
            items={[
              { title: "E-commerce Platform", date: "2023-06-25" },
              { title: "Task Management App", date: "2023-06-22" },
              { title: "Portfolio Website", date: "2023-06-19" },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
