module.exports.loginUser = (req, res, next) => {
  res.send(res.hello)
  console.log(res.hello)
}

module.exports.logout = (req, res, next) => {
  res.send('logout')
}