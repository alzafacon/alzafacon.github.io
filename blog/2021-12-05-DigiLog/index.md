# DigiLog - Digital re-imagining of a Single Hand Analog Timepiece

Clocks and watches originally had a single hand, but the minutes were hard to read. Thus the minute hand was introduced.

Another way to read the minutes with a single hand is by zooming into the section of the clock where the hour hand points to the time. For example, at 6:30 the tick marks will show the hour hand to be half way between 6 and 7. While at 7:05 you can zoom in to see the tick marks showing 5 minutes past 7.

<!--truncate-->

## The Math

| | Definitions |
| - | - |
| Viewport   | window on circular clock |
| `R`        | viewport radius |
| Clock face | the numbers and tick markings as a group |
| `tau`      | angle of hour hand from pole (3 o'clock) |
| `alpha`    | half the clock face segment angle to be enlarged |

Zooming the clock face means choosing a clock face segment to enlarge. The clock face segment has a chord.

Let `alpha` be half the clock face segment angle.

Zooming is done by dilating and translating the chord to be the viewport diameter.

Let `r` be half the chord length. Therefore `r` must be dilated by a factor of `R/r` to become `R` (i.e. `r` * `R/r` = `R`).

Since `sin(alpha) = r/R`. The scaling factor is `R/r = 1/sin(alpha)`.

Let `d` be the distance from viewport center to chord midpoint before scaling, `d = R * cos(alpha)`.

The translation offsets the in x- and y-direction before scaling are
  - `dx = cos(tau) * d = R * cos(tau) * cos(alpha)`
  - `dy = sin(tau) * d = R * sin(tau) * cos(alpha)`

After scaling
  - `dx' = R * cos(tau) * cos(alpha) / sin(alpha)`
  - `dy' = R * sin(tau) * cos(alpha) / sin(alpha)`

`alpha` has interval `(0, pi/2]`. The left bound is open because `alpha = 0` means infinite zoom which is not useful to display.

To avoid the infinite zoom problem we introduce a zoom variable `z` and a function `f(z) = alpha` where `f: [0, inf) -> [pi/2, 0)`. Notice `f(z)` approaches 0 asymptotically. 

The most obvious such function is `f(z) = 1 / (z + 2/pi)`. An additional advantage of asymptotically approaching 0 is course adjustments at low zoom and fine adjustments at high zoom (i.e. the rate of change is greater near `z = 0` and less as `z` approaches `inf`).

`[0, inf)` is not practical as an input range because of `inf`. So it is best to close the right bound at an arbitrary value. Naturally, the output interval right bound should also be closed at the desired maximum zoom. One such choice is `[0, 100] -> [pi/2, pi/6]`. The most obvious such function is `g(z) = 1 / (k*z + 2/pi)` where the reader can find `k` as an exercise.