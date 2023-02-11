var movie = document.querySelector("#form-tag");
var movies = document.querySelector("#movies").innerHTML;

movie.addEventListener("submit", function (e) {
  e.preventDefault();
  const film = document.querySelector("#int");

  var url = "https://www.omdbapi.com/?apikey=f1fab440&t=";
  fetch(url + film.value)
    .then((response) => response.json())
    .then((response) => {
      var { Poster, Year } = response;

      document.querySelector("#movies").innerHTML = JSON.stringify(Year);
      document.querySelector("#poster").setAttribute("src", Poster);
    });
});
