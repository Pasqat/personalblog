import sanityClient from '@sanity/client';

const options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PRODUCT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  // if useCdn === true, gives you fastest response but cached data
  // if useCdn === false, slower response but latest data
};

export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export default sanityClient(options);
