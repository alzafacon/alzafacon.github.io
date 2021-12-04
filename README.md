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

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.