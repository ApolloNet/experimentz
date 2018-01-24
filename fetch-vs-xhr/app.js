(function () {
  'use strict'

  // Movies URL

  const url = 'movies.json'

  // Write movies titles in HTML.

  function writeMovies(movies) {
    let output = ''
    movies.forEach(function(movie) {
      output += '<article><h1>' + movie.title + '</h1></article>'
    })
    document.getElementById('movies').innerHTML += output
  }

  // Get Movies via fetch.

  function getMoviesViaFetch() {
    return fetch(
      url, {
        method: 'get',
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(movies => writeMovies(movies))
      .catch(error => console.error(error.message))
  }

  // Get Movies via XHR.

  function loadJSON(json, callback) {
    const xhr = new XMLHttpRequest()
    xhr.overrideMimeType('application/json')
    xhr.open('GET', json)
    xhr.send(null)
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == '200') {
        callback(xhr.responseText)
      }
    }
  }

  function getMoviesViaXHR() {
    loadJSON(url, function(response) {
      const movies = JSON.parse(response)
      writeMovies(movies)
    })
  }

  // Fetch VS XHR.

  getMoviesViaFetch()
  getMoviesViaXHR()

}())
