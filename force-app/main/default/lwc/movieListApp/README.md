# Movie Search API

- Working with external Api to create a movie search component using the [TMDB Movie Api](https://developers.themoviedb.org/3/movies/get-movie-details)

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/100381663/236634351-8664e603-db3c-404c-b1a2-801c41e88c65.gif)

## To get this API to work in Salesforce
- Search for CSP trusted sites
- Give it any name
- Add this to the url field (*.themoviedb.org)
- make it active and tick all the available boxes
- Save and wait a few minutes before refreshing, the error should be gone
- If it remains, create a second trusted site with the same process but add (*.api.themoviedb.org) to the url field, wait and refresh, done!

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

