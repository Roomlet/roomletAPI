// INTERFACE
export default (err, req, res, next) => {
  console.error(err)
  if (err.status) return res.sendStatus(err.status)

  err.message = err.message.toLowerCase()

  if (err.message.includes('validation failed')) return res.sendStatus(400)

  if (err.message.includes('duplicate key')) return res.sendStatus(409)

  if (err.message.includes('objectid failed')) return res.sendStatus(404)

  res.sendStatus(500)
}
