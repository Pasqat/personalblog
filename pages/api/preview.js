import { getBlogBySlug } from "lib/api";

export default async function enablePreview(req, res) {
  if (
    req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: "Invalid Token" });
  }

  const blog = await getBlogBySlug(req.query.slug, true);

  if (!blog) {
    return res.status(401).json({ message: "Invalid Slug" });
  }

  // NOTE: `setPreviewData` will set some coockies on the browser
  //       __prerender_bypass __next_preview_data
  //       and so Next.js will know you want to see a preview
  res.setPreviewData({});
  res.writeHead(307, { Location: `/blogs/${blog.slug}` });
  res.end();
}
