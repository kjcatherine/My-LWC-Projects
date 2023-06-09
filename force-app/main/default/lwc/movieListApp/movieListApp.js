import { LightningElement, track } from 'lwc';
import { API_KEY } from './config';
export default class MovieListApp extends LightningElement {
    @track moviesData;
    @track searchQuery = '';

    connectedCallback() {
        this.fetchMovieData();
    }

    fetchMovieData() {
        const apiKey = API_KEY;
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Api Response from tmdb", data);
                this.moviesData = data.results.map(movie => ({
                    ...movie,
                    imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }));
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    fetchMoviesHandler(event) {
        this.searchQuery = event.target.value.toLowerCase();
    }

    get filteredMovies() {
        if (!this.searchQuery) {
          return this.moviesData;
        }
        
        const queryLetters = this.searchQuery.toLowerCase().split('');
        return this.moviesData.filter(movie => {
        const movieTitle = movie.title.toLowerCase();
        return queryLetters.every(letter => movieTitle.includes(letter));
        });
      }
      
}
