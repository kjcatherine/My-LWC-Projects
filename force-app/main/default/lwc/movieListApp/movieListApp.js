import { LightningElement, track } from 'lwc';

export default class MovieListApp extends LightningElement {
    @track moviesData;
    @track allMoviesData;
    @track query = '';

    connectedCallback() {
        this.fetchAllMovies();
    }

    fetchAllMovies() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=78979c75fb54c40e6eeca19518342eda&language=en-US')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Api Response from tmdb", data);
                this.allMoviesData = data.results.map(movie => ({
                    ...movie,
                    imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }));
                this.moviesData = this.allMoviesData;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    fetchMoviesHandler(event) {
        this.query = event.target.value;
        if (this.allMoviesData) {
            this.moviesData = this.allMoviesData.filter(movie => movie.title.toLowerCase().includes(this.query.toLowerCase()));
        }
    }
}
