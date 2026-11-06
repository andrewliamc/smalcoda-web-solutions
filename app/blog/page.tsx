import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { blogPosts } from "@/data/blogPosts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Web Design Insights & Tips",
  description:
    "Web design insights, pricing guides, and practical tips for small business owners in Bergen County and beyond.",
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <PageHeader
        eyebrow="Insights & Resources"
        title="Blog"
        description="Practical advice on web design, pricing, and building a better online presence for your business."
      />

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full transition hover:border-brand-sage/40">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-brand-sand/60">
                      <span>{post.category}</span>
                      <span>•</span>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <h2 className="text-xl font-heading text-brand-sand">
                      {post.title}
                    </h2>
                    <p className="text-sm text-brand-sand/80">{post.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-brand-sand/60">{post.readTime}</span>
                      <span className="text-sm font-medium text-brand-sage">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
