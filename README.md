# 8 COLORS

Color Terminal Console like magic  (Chain-able)



## Installation

```
npm install --save 8colors
```



## Usage

#### Example

```javascript
const c = require('8colors')

var title ='WARNING'

//straight up 
console.log(c.green('color me green'))

console.log(c.red(title))

//chaining
console.log (c.b('color me blue').m(' and I am Magenta').bm(' I am bright Magenta').end())

//background color
console.log(c.R().w(title).end())

console.log(c.R().w(title).by(' You are using and awesome library!').end())
```



## COLORS and Helper functions



### Non Chained -- Straight up output

| method(string)  | TEXT COLOR |
| --------------- | ---------- |
| black(string)   | Black      |
| red(string)     | Red        |
| green(string)   | Green      |
| yellow(string)  | Yellow     |
| blue(string)    | Blue       |
| magenta(string) | Magenta    |
| cyan(string)    | Cyan       |
| white(string)   | White      |



### Chained approached 

#### Foreground Color (Standard)

| Method (string) | Foreground Color |
| --------------- | ---------------- |
| k(string)       | Black            |
| r(string)       | red              |
| g(string)       | Green            |
| b(string)       | Blue             |
| y(string)       | Yellow           |
| m(string)       | Magenta          |
| c(string)       | Cyan             |
| w(string)       | White            |



#### Foreground Color (Bright)

| Method(string) | Foreground Bright Color (Hi intensity) |
| -------------- | -------------------------------------- |
| bk(string)     | Bright Black                           |
| br(string)     | Bright Red                             |
| bg(string)     | Bright Green                           |
| bb(string)     | Bright Blue                            |
| by(string)     | Bright Yellow                          |
| bm(string)     | Bright Magenta                         |
| bc(string)     | Bright Cyan                            |
| bw(string)     | Bright White                           |



#### Background Color (STANDARD)

| Method(string) | Background Bright Color (Standard) |
| -------------- | ---------------------------------- |
| K(string)      | Black                              |
| R(string)      | Red                                |
| G(string)      | Green                              |
| B(string)      | Blue                               |
| Y(string)      | Yellow                             |
| M(string)      | Magenta                            |
| C(string)      | Cyan                               |
| W(string)      | White                              |



#### Background Color (Bright)

| Method(string) | Background Bright Color (Hi intensity) |
| -------------- | -------------------------------------- |
| BK(string)     | Bright Black                           |
| BR(string)     | Bright Red                             |
| BG(string)     | Bright Green                           |
| BB(string)     | Bright Blue                            |
| BY(string)     | Bright Yellow                          |
| BM(string)     | Bright Magenta                         |
| BC(string)     | Bright Cyan                            |
| BW(string)     | Bright White                           |



#### Helper Functions

| method    | Function                                 |
| --------- | ---------------------------------------- |
| end()     | denotes end of the chain and output result |
| V(string) | inverse foreground and background  color (not tested on all terminal) |
| _(string) | Underline (not tested on all terminal)   |
| I(string) | make the text color intense (not tested on all terminal) |
| blk       | make the text slow blink (not tested on all terminal) |
| rblink    | make the text rapid blink (not tested on all terminal) |

## Reference

[ANSI escape code]: https://en.wikipedia.org/wiki/ANSI_escape_code	"ANSI escape code"



## License

MIT &copy; 2018 John Martin R. Disuanco