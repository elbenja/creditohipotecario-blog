# CréditoHipotecar.io — Blog

Astro + MDX. `npm run dev` → http://localhost:4321/blog · `npm run build` → `dist/`.

## Where things live

| Path | What |
| --- | --- |
| `src/styles/tokens.css` | Design-system tokens (copied 1:1) + blog semantic tokens. Components use only these. |
| `src/styles/global.css` | Base, `.label`, `.rise`, scroll reveal, `.fill-num`. |
| `src/config/site.ts` | Nav links, sites menu, account URLs. |
| `src/content/blog/*.mdx` | One file per guide. File name = URL slug. Schema in `src/content.config.ts`. |
| `src/components/ui` | Generic: `Icon`, `Button`, `GlassButton`, `Badge`, `Label`, `Eyebrow`, `EmptyState`, `CopyButton`. |
| `src/components/layout` | `SiteNav`, `SiteFooter`, `Container`, `Toaster`. |
| `src/components/blog` | `FeaturedPostCard`, `PostCard`, `PostHero`, `PostMeta`, `SaveButton`, `FilterTabs`, `PostIndex`, `TableOfContents`, `ReadingProgress`, `CoverImage`, `CardLink`, `ReadMore`. |
| `src/components/article` | Blocks usable in any MDX without imports (see below). All built on `Panel`. |

## Article blocks

`Lead` · `Sources` · `KeyFigure` · `Stats`/`Stat` · `Note` · `Faq`/`FaqItem` · `Coverage`/`CoverageItem` ·
`Checklist` · `Calc` · `SplitBar` · `Legend` · `BarChart` · `Steps`/`Step` · `Pair` · `Callout` · `Panel`.
The sismo guide (`sismo-seguro-vivienda.mdx`) uses almost all of them — copy from it.

## Adding a guide

1. Put the cover in `public/assets/blog/`.
2. Create `src/content/blog/<slug>.mdx` with the frontmatter fields from an existing guide.
3. `##` headings become the "En este artículo" table of contents automatically.
