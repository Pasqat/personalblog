import client from './sanity';

// {"slug":{"_type":"slug","current":"my-first-blog"}
// modifica slug per avere in frontend direttamente il valore di current
const blogFields = `
  title,
  subtitle,
  'slug': slug.current
`;

export async function getAllBlogs() {
  const results = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
  return results;
}
