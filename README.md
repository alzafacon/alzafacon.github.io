# DigiLog - The Single Hand Analog Clock with a Digital Enhancement

Im the past single hand clocks and watches were common, but they were difficult to read precisely. Minute hands were added to address the precision problem.

An alternative approach to improving precision with a single hand is to digitally zoom the clock face.
## The Math

Definitions
Viewport: window on circular clock
`R`: viewport radius
Clock face: the number and tick markings as a group
`tau`: angle of hour hand from pole (on a polar graph)

Zooming the clock face means choosing a clock face segment to enlarge. The clock face segment has a chord.
Let `alpha` be half the clock face segment angle.
Zooming is done by scaling the chord to be the viewport diameter.
Let `r` be half the chord length, then `sin(alpha) = r/R`. The scaling factor is `R/r = 1/sin(alpha)`.
Let `d` be the distance from viewport center to chord midpoint before scaling, `d = R * cos(alpha)`.
The translation offset in x- and y-direction before scaling are
  `dx = cos(tau) * d = R * cos(tau) * cos(alpha)`
  `dy = sin(tau) * d = R * sin(tau) * cos(alpha)`

After scaling
  `dx' = R * cos(tau) * cos(alpha) / sin(alpha)`
  `dy' = R * sin(tau) * cos(alpha) / sin(alpha)`

`alpha` has interval `(0, pi/2]`. The left bound is open because `alpha = 0` means infinite zoom which is not useful to display.
To avoid the infinite zoom problem we introduce a zoom variable `z` and a function `f: [0, inf) -> [pi/2, 0)` that approaches 0 asymptotically.
The most obvious such function is `f(z) = 1 / (z + 2/pi)`. An additional advantage of asymptotically approaching 0 is course adjustments at low zoom and fine adjustments at high zoom.

`[0, inf)` is not practical for input because of `inf` so it is best to close the right bound. Naturally, the output interval right bound should also be closed at an arbitrary value. One such choice is `[0, 100] -> [pi/2, pi/6]`. The most obvious such function is `g(z) = 1 / (k*z + 2/pi)` where the reader can find `k` as an exercise.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
