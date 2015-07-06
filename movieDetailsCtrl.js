function MovieDetailsCtrl($location,movieService) {
  /*TODO #4: Load the movie from the movieService using the id form the route params*/
 	this.$location = $location;
 	this.MovieService = movieService;
 	console.log(this.$location.path().substring(13));

 	var foundMovie = this.findMovie();
	console.log(foundMovie);
	return foundMovie;


}

MovieDetailsCtrl.prototype.findMovie = function (){
	for(i = 0; i < this.MovieService.getMovies().length ; i++){
		if (this.$location.path().substring(13) == this.MovieService.getMovies()[i].imdbID ){
			return this.MovieService.getMovies()[i];
		}
	}
}





angular.module('coderMdb').controller('MovieDetailsCtrl', MovieDetailsCtrl);