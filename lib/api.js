import client from './sanity';

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
  'coverImage': coverImage.asset->url,
  'author': author->{name, 'avatar': avatar.asset->url},
`;

export async function getAllBlogs() {
  const results = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
  return results;
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
    .then((res) => res?.[0]);

  return result;
}
