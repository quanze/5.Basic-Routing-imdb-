function MovieListCtrl(movieService) {
  /*TODO #3: Load all of the movies from the movieService*/
  this.movieList = movieService.getMovies();

  this.sortOptions = [
    {label: 'Title', sortField: 'Title', reverse: false},
    {label: 'Rating', sortField: "imdbRating", reverse: true}
  ]
  
  this.curPage = 0;
  this.moviesPerPage = 4;
}

MovieListCtrl.prototype.crick = function (arr){
	console.log(arr);
}

angular.module('coderMdb').controller('MovieListCtrl', MovieListCtrl);