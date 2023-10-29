// `pages/_app.js`

/*
_app.js is a top-level React component that wraps all the pages in your application. You can use this component to keep state when navigating between pages, or to add global styles as we're doing here.

Custom App
Next.js uses the App component to initialize pages. You can override it and control the page initialization and:
- Create a shared layout between page changes
- Inject additional data into pages
- Add global CSS

Global Styles

CSS Moduels are useful for component-level styles. But if you want some CSS to be loaded by every page, Next.js has support for that as well.

To load global CSS to your application, create a file called pages/_app.js with the following content:

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

The default export of_app.js is a top-level React component that wraps all the pages in your application. You can use this component to keep state when navigating between pages, or to add global styles as we're doing here.

Restart the Development Server
Important: You need to restart the development server when you add pages/_app.js. Press Ctrl + c to stop the server and run:

npm run dev

Adding Global CSS
In Next.js you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.

The reason that global CSS can't be imported outsie of page/_app.js is that global CSS affects all elements on the page.

If you were to nagivate from the homepage to the /posts/first-post page, global styles from the homepage would affect /posts/first-post unintentionally.

You can place the global CSS file anywhere and use any name. So let's do the following:
- Create a top-level styles directory and a global.css file
- Add the following CSS inside styles/global.css. This code resets some styles and changes the color of the a tag:

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.6;
  font-size: 18px;
}

* (
  box-sizing: border-box;
)

a {
  color: #0070f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}

Finally, import the CSS file inside the /pages/_app.js file you've created earlier on:

// `pages/_app.js`
import '../styles/global.css';

export default funciton App({ Component, pageProps }) {
  return <Component {...pageProps} />>;
}

Now, if you access http://localhost:3000/posts/first-post, you'll see that the styles are applied. Any styles imported in _app.js will be applied globally, to all pages of the application.
*/

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}