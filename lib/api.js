import client from './sanity'
import imageUrlBuilder from '@sanity/image-url'

/**
 * @slug {"slug":{"_type":"slug","current":"my-first-blog"}
 * modifica slug per avere in frontend direttamente il valore di current
 * @date UTC time format
 * @coverImage see documentation for pointer to reference
 * @author same as coverImage
 **/
const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  coverImage,
  'author': author->{name, 'avatar': avatar.asset->url},
`

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

/*
 * @offset: how many item to skip
 * @limit: how many data to fetch
 */
export async function getAllBlogs() {
  const results = await client.fetch(
    `*[_type == "blog"] | order(date desc) {${blogFields}}`
  )
  return results
}

export async function getPaginatedBlogs(
  { offset = 0, date = 'desc' } = { offset: 0, date: 'desc' }
) {
  const results = await client.fetch(
    `*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${
      offset + 6
    }]`
  )
  return results
}

export async function getBlogBySlug(slug) {
  const result = await client
    .fetch(
      `*[_type == "blog" && slug.current == $slug]{
        ${blogFields}
        content[]{..., "asset": asset->}
        }`,
      {
        slug,
      }
    )
    .then((res) => res?.[0])

  return result
}
