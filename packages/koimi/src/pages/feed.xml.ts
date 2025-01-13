import type { APIRoute } from 'astro'

import rss, { type RSSFeedItem } from '@astrojs/rss'
import { getCollection } from 'astro:content'
import options from 'virtual:koimi/options'

export const GET: APIRoute = async context =>
  rss({
    description: 'github:importantimport/koimi',
    // TODO: exclude unlisted
    items: await getCollection('articles')
      .then(articles => articles.map(article => ({
        description: article.data.summary,
        link: `/${options.routes.articles.replace('[...slug]', article.id)}`,
        pubDate: article.data.published,
        title: article.data.title,
        // TODO: https://docs.astro.build/en/recipes/rss/#including-full-post-content
      }) satisfies RSSFeedItem)),
    site: context.site!,
    title: 'Koimi',
  })
