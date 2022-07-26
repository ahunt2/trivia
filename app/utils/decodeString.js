export function decodeString(str) {
  console.log(str)
  str = str.replaceAll('&quot;', '\"')
  str = str.replaceAll('&#039;', '\'')
  str = str.replaceAll('&eacute;', 'e')
  str = str.replaceAll('&amp;', '&')
  str = str.replaceAll('&lt;', '<')
  str = str.replaceAll('&gt;', '>')
  str = str.replaceAll('&lsquo;', '\'')
  str = str.replaceAll('&rsquo;', '\'')
  console.log(str)
  return str
}