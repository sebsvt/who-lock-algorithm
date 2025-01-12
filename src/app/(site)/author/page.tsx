import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Twitter, Instagram, Mail } from "lucide-react";

export default function AuthorPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-4xl mx-auto px-4 py-12">
        <div className="grid gap-8 lg:gap-16">
          {/* Profile Section */}
          <section className="text-center">
            <div className="mb-8">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img
                  src="https://avatars.githubusercontent.com/u/167524033?v=4"
                  alt="Profile"
                  // fill
                  className="rounded-full object-cover border-4 border-border"
                  // priority
                />
              </div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                Saharat Vithchataya
              </h1>
              <p className="text-xl text-muted-foreground">sebsvt</p>
            </div>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/sebsvt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://x.com/vithchataya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://instagram.com/sebsvt_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:vithchataya.saharat@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </section>

          {/* About Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">About Me</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Hi, I&apos;m Saharat, a passionate maker and lifelong learner
                with a love for exploring the intersection of science,
                technology, and creativity. 🚀 Aerospace Enthusiast: I&apos;m
                deeply fascinated by the skies and beyond, constantly inspired
                by the marvels of flight and space exploration. ⚛️ Quantum
                Computing Aficionado: I enjoy delving into the quantum world,
                where science meets cutting-edge computation. 🏆 Competitive
                Programmer: Solving challenging problems and refining algorithms
                keeps my mind sharp and my skills growing. 🔒 Cybersecurity
                Explorer: I&apos;m intrigued by the ever-evolving world of
                cybersecurity and its role in keeping our digital lives safe. 💻
                Coding Hobbyist: From crafting playful projects to building
                impactful software, coding is my favorite creative outlet.
                Whether it’s designing an innovative gadget or diving into new
                tech fields, I thrive on the joy of making things that inspire
                and solve real-world problems. Through this blog, I aim to share
                my journey, ideas, and projects with fellow enthusiasts and
                curious minds. Let’s build something amazing together!
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Frontend</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Frontend Architecture</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Backend</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                    <li>REST APIs</li>
                    <li>GraphQL</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Tools & Others</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Git & GitHub</li>
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>CI/CD</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact Form */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Get in Touch</h2>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="w-full px-3 py-2 border rounded-md bg-background"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full px-3 py-2 border rounded-md bg-background"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message"
                      className="w-full px-3 py-2 border rounded-md bg-background min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
