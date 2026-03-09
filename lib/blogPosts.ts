export const BLOG_POSTS = [
  { key: "blog.post1Title", excerptKey: "blog.post1Excerpt", bodyKey: "blog.post1Excerpt", body2Key: "blog.post1Body2", body3Key: "blog.post1Body3", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=85", slug: "find-community-new-city", minRead: 4 },
  { key: "blog.post2Title", excerptKey: "blog.post2Excerpt", bodyKey: "blog.post2Excerpt", body2Key: "blog.post2Body2", body3Key: "blog.post2Body3", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=85", slug: "real-life-events", minRead: 5 },
  { key: "blog.post3Title", excerptKey: "blog.post3Excerpt", bodyKey: "blog.post3Excerpt", body2Key: "blog.post3Body2", body3Key: "blog.post3Body3", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&q=85", slug: "faith-communities", minRead: 6 },
  { key: "blog.post4Title", excerptKey: "blog.post4Excerpt", bodyKey: "blog.post4Excerpt", body2Key: "blog.post4Body2", body3Key: "blog.post4Body3", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=85", slug: "events-that-bring-people-together", minRead: 5 },
  { key: "blog.post5Title", excerptKey: "blog.post5Excerpt", bodyKey: "blog.post5Excerpt", body2Key: "blog.post5Body2", body3Key: "blog.post5Body3", image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1200&q=85", slug: "first-event-to-friends", minRead: 4 },
  { key: "blog.post6Title", excerptKey: "blog.post6Excerpt", bodyKey: "blog.post6Excerpt", body2Key: "blog.post6Body2", body3Key: "blog.post6Body3", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=85", slug: "safe-and-easy-trust", minRead: 5 },
] as const;

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
