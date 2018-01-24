// Output
const log = (content) => {
  const div = document.getElementById('output')
  div.innerHTML += content + '<br>'
}
// Query Selector Array
const querySelectorArray = (query) => {
  const nodeList = document.querySelectorAll(query)
  const nodeArray = [].slice.call(nodeList)
  return nodeArray
}
// jQueryfication :-D
const $ = query => querySelectorArray(query)
// innerHTMLtoUpperCase
const innerHTMLtoUpperCase = element => element.innerHTML.toUpperCase()
// isEven
// !(val % 2) is equivalent to val % 2 === 0
const isEven = val => !(val % 2)
// Lis
const lis = $('li')
// Map
const lisUp = lis.map(li => innerHTMLtoUpperCase(li))
log(lisUp)
// Filter
const lisOdd = lis.filter((element, index) => isEven(index))
const lisOddUp = lisOdd.map(li => innerHTMLtoUpperCase(li))
log(lisOddUp)
