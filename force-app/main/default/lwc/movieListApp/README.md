# Movie Search

- Working with external Api to create a movie search component using the [TMDB Movie Api](https://developers.themoviedb.org/3/movies/get-movie-details)



<!-- ![memorygame](https://user-images.githubusercontent.com/100381663/234882144-706e52fa-bf19-4fe3-bc85-d2fd11dd26f4.gif) -->

## Tech used

- SalesforceDX 
- Lightning Web Components framework
- Javascript
- Salesforce Lightning Design Systems
- CSS custom properties
- Salesforce CLI
- Html

## Optimizations

- Allow guest user access
- Get more details such as trailer on click of a movie

## Lesson learned
- Working with an external Api within Salesforce as well as the security measures to put in place
- process.env does not work in Salesforce LWC, a workaround to hide keys was to create a config file in the same LWC directory, then import to main JS and add the file to .gitignore
