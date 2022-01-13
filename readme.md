# Evaluator

This app let's you evaluate your current internationalization strategy and gives you some simple feedback on it.

It's built on the barebones-react-app project provided by niftymonkey.

It:
- Can transpile
  - Specifically because JSX
  - But also so you can use the latest JavaScript features
- Uses [sourcemaps]
- Uses [Hot Module Replacement][hmr]
- Can build a basic production `dist/` output for easy deployment
- Doesn't have a bunch of unnecessary dependencies

## Required Software

- [npm] version 6.4.1 or above
- [node] version 10.13.0 or above

## Getting Started

1. `npm install` - to install the dependencies
2. `npm run dev` - to run the application in dev mode (using webpack-dev-server)
3. Open up http://localhost:3000 to view the app

## Other useful commands

- `npm run dist` - to generate the production version of the application's script(s)

[sourcemaps]: https://survivejs.com/webpack/building/source-maps/
[hmr]: https://survivejs.com/webpack/appendices/hmr/
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
