import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../../config/site';
import { getPosts, postUrl } from '../../lib/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `Blog · ${SITE.name}`,
    description: 'Guías para pagar menos por tu hipoteca.',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.excerpt,
      pubDate: p.data.date,
      link: postUrl(p),
      categories: [p.data.category],
    })),
  });
}
