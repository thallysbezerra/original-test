# Development Stack

-  **Assets extraction**: Figma

-  **Code editor**: Visual Studio Code

      <details>
      <summary>Important extensions</summary>

      -  Auto Rename Tag
      -  Auto-Open Markdown Preview
      -  Brackt Pair Colorizer
      -  VS Code ES7 React/Redux/React-Native/JS snippets
      -  ESLint
      -  GitLens
      -  JavaScript (ES6) code snippets
      -  Prettier - Code formatter
      -  SCSS formatter

      </details>

-  **CSS preprocessor**: SASS/SCSS
-  **Hosting**: Firebase
-  **Lib/Framework**: React.js using create-react-app
-  **Package manager**: NPM/Yarn

      <details>
      <summary>Dependencies</summary>

      -  chai
      -  node-sass
      -  react-responsive
      -  react-router-dom
      -  react-slick
      -  react-test-renderer
      -  slick-carousel

      </details>

-  **Server**: Node.js

## API

-  Rest API manually created using https://www.mocky.io/.
-  API call using `fetch`, without external dependencies.
-  API link: http://www.mocky.io/v2/5d5b259e2f00002c0036fa0b
-  Backup of API mocked on direcory `/api`.
-  Images (normal and thumbnails) edited on Photoshop CC and hosted on https://imgur.com/.
-  Success, requesting and error feedback combining `fetch` and `catch` with conditional structure using `switch`.

## CSS

-  All CSS/SCSS theme files are imported on `Theme.scss`.
-  Animations on `:hover` in buttons to give feedback of interaction to user.
-  B.E.M. (Block Element Modifier) class naming methodology.
-  Breakpoints as mixin, included inside own selector in order to facilitate maintenance.
-  CSS Grid and CSS Flexbox to define layout structures.
-  Disabled links are using `pointer-events: none` to prevent possibilities of click and wrong navigation;
-  Each component have your own SCSS file.
-  Font-family using Google Fonts.
-  Font-weight variables are declared on `Fonts.scss`.
-  Icons using Font Awesome as @font-face imported from CDN.
-  `@keyframes` animations are imported from `Animations.scss`.
-  Mobile first with four breakpoints using: - Only on mobile: Screen resolution <= 767px. - Tablet portrait mode: Screen resolution >= 768px. - Tablet landscape mode: Screen resolution >= 1024px. - Desktop: Screen resolution >= 1280px.
-  Some animations combining `@keyframes` with `transitions`.
-  Some animations using `transform` property, focused on device/web performance.
-  Using SASS/SCSS.

## HTML

-  HTML5 following W3C Standards recommendations.
-  Favicon generated on https://www.favicon-generator.org/.

## Javascript

-  Arrow functions instead of `bind.this`, simplifying code.
-  Behavior of responsive menu based on state, with click interaction.
-  Component `<TextField />` with animations and interactions simular to Material Design component.
-  Components with multi functionalities are located on directory `/widgets`.
-  Destructuring of states and props to keep a clean code and declarative.
-  `.map` to list items from API.
-  `PropTypes` to better component maintenance and understanding.
-  Reusable components are located on directory `/components`.
-  Pages are located on directory `/pages`;
-  Pages without layout is in blank, have only your own title as text, simulating routes.
-  `react-responsive` to show same component with different behaviour depending on device.
-  `react-router-dom` to create routes without refresh browser.
-  `react-slick` and `slick-carousel` was used to create a slider on mobile devices.
-  Some buttons with `alert()` telling what the user can expect of them.
-  Some components are stateless, focused on performance.

## Tests

-  Jest as test runner inside create-react-app.
-  In specific situations was applied TDD (Test Driven Development) concepts.
-  Simple tests to verify if application is rendering without crashing and initial states are initializing correctly.
-  Statics components with snapshots tests to avoid components changes.
-  Testing if data as number, is entering and returning correctly on `monetaryMask()` function.

# Instructions to run tests

-  `npm test`, or `yarn test` on root directory to run application tests.

# Instructions to run locally

-  `npm install`, or `yarn` on root directory to install dependencies.
-  `npm start` or `yarn start` to run the project locally.

# Instructions to run online

-  Access https://original-io-test.firebaseapp.com/.
