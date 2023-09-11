# React Weather APII
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Test Coverage

### `yarn test --coverage`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### Approach

Since we have a list of cities, by default it will show the weather of first city in this list. You can search cities by typing in input box and it will list all the cities that included the keyword type. click on any city from the list and it will show the weather of that particular city.

### Why this approach
I have chosen this approach (search cities) since we have large number of cites and putting them in an dropdown as option will cause memory leak issue as well as it will be bad hard for users to go through the large number of options.


### Possible optimizations
1 - We can have dropdown with searchbox in it, infinite scroll and using windowing to show certain number of cities at once.
2 - We can use service worker to cache the weather response for cities and if they are requested again in less than defined time (say 1hr), we well serve the response from the cache.
