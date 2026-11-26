import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Published guides, newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function postUrl(post: Post) {
  return `/blog/${post.id}`;
}

const fmt = new Intl.DateTimeFormat('es-PE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
/** "21 de noviembre de 2026" */
export function formatDate(d: Date) {
  return fmt.format(d);
}
