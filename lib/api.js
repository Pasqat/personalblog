import client, { previewClient } from './sanity';
import imageUrlBuilder from '@sanity/image-url';

/**
 * @param slug {"slug":{"_type":"slug","current":"my-first-blog"}
 * modifica slug per avere in frontend direttamente il valore di current
 * @param date UTC time format
 * @param coverImage see documentation for pointer to reference
 * @param author same as coverImage
 **/
const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  coverImage,
  'author': author->{name, 'avatar': avatar.asset->url},
`;

const builder = imageUrlBuilder(client);
const getClient = (preview) => (preview ? previewClient : client);

export function urlFor(source) {
  return builder.image(source);
}

/*
 * @offset how many item to skip
 * @limit how many data to fetch
 */
export async function getAllBlogs() {
  const results = await client.fetch(
    `*[_type == "blog"] | order(date desc) {${blogFields}}`
  );
  return results;
}

export async function getPaginatedBlogs(
  { offset = 0, date = 'desc' } = { offset: 0, date: 'desc' }
) {
  const results = await client.fetch(
    `*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${
      offset + 6
    }]`
  );
  return results;
}

export async function getBlogBySlug(slug, preview) {
  const currentClient = getClient(preview);
  const result = await currentClient
    .fetch(
      `*[_type == "blog" && slug.current == $slug]{
        ${blogFields}
        content[]{..., "asset": asset->}
        }`,
      {
        slug,
      }
    )
    .then((res) => {
      return preview ? (res?.[1] ? res[1] : res[0]) : res?.[0];
    });

  return result;
}
