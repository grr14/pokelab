function getIdFromURL(url) {
  const url_ = url.slice(0, -1) // removing the last character of the url (it's always "/")
  const id = url_.substring(url_.lastIndexOf("/") + 1)
  return !isNaN(id) ? id : -1
}

function isEmptyArray(array) {
  return Array.isArray(array) && !array.length ? true : false
}

module.exports = {
  getIdFromURL: getIdFromURL,
  isEmptyArray: isEmptyArray,
}
