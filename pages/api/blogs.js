import { getPaginatedBlogs } from 'lib/api'

export default async function getBlogs(req, res) {
  // NOTE: its very important to parse the query! 🧐
  const offset = parseInt(req.query.offset || 0, 10)
  const date = req.query.date || 'desc'

  const data = await getPaginatedBlogs({ offset, date })
  return res.status(200).json(data)
}
