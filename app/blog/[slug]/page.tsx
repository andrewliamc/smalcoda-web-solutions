import { notFound } from "next/navigation";
import Link from "next/link";
import type { JSX } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import LeadMagnet from "@/components/LeadMagnet";
import { blogPosts } from "@/data/blogPosts";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Section className="pt-10">
        <Container className="max-w-3xl">
          <div className="space-y-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-brand-sage hover:text-brand-sand"
            >
              ← Back to blog
            </Link>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-sm text-brand-sand/60">
                <span className="rounded-md border border-brand-sage/30 bg-brand-sage/10 px-2 py-1 text-xs font-medium text-brand-sage">
                  {post.category}
                </span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-4xl font-heading text-brand-sand md:text-5xl">
                {post.title}
              </h1>
              <p className="text-lg text-brand-sand/80">{post.description}</p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4 text-sm text-brand-sand/70">
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <article className="prose prose-invert prose-brand max-w-none">
            {post.content.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p key={index} className="text-brand-sand/80 leading-relaxed">
                    {block.text}
                  </p>
                );
              }

              if (block.type === "heading") {
                const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
                return (
                  <Tag
                    key={index}
                    className={`font-heading text-brand-sand ${
                      block.level === 2
                        ? "mt-10 mb-4 text-3xl"
                        : "mt-8 mb-3 text-2xl"
                    }`}
                  >
                    {block.text}
                  </Tag>
                );
              }

              if (block.type === "list" && block.items) {
                return (
                  <ul key={index} className="space-y-2 text-brand-sand/80">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sage/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              if (block.type === "callout") {
                return (
                  <div
                    key={index}
                    className="my-6 rounded-xl border border-brand-sage/30 bg-brand-sage/10 p-6"
                  >
                    <p className="text-brand-sand/90">{block.text}</p>
                  </div>
                );
              }

              return null;
            })}
          </article>
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="max-w-3xl">
          <LeadMagnet />
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-brand-moss/50 p-8 text-center">
            <h2 className="text-2xl font-heading text-brand-sand">
              Ready to start your project?
            </h2>
            <p className="text-brand-sand/80">
              Book a free 15-minute consultation to discuss your needs and get a tailored
              plan.
            </p>
            <Button href="https://calendar.app.google/vSneyr2TZtLJubmt6" target="_blank" rel="noopener noreferrer">
              Book Free Consultation
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-brand-sage hover:text-brand-sand"
          >
            ← Back to all posts
          </Link>
        </Container>
      </Section>
    </>
  );
}
