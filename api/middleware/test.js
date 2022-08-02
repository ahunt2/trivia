module.exports.test = (req, res, next) => {
  console.log('middleware test')
  res.hello = 'testing middleware'
  next()
}