---
title: 'Building a Responsive Next.js Website Using Tailwind CSS'
date: '2023-12-09'
---

On this webLog, I'll be documenting the steps taken to build a responsive Next.js website using Tailwind CSS.

## Here are the steps taken:

### Creating the Next.js app

1. Using the Terminal app on my Macintosh, made a new directory:
```
    mkdir nextjs-tailwindcss
```
2. Navigated into it:
```
    cd nextjs-tailwindcss
```
3. Installed Node.js using the official Node.js installer from their [downloads page](https://nodejs.org/en/download).

4. Once Node.js was installed, I created a new Next.js boilerplate application:
```
    npx create-next-app@latest .
```

I answered the following questions as follows when prompted:
```
  Need to install the following packages:
  create-next-app@14.0.2
  Ok to proceed? (y) y
  ✔ Would you like to use TypeScript? … No
  ✔ Would you like to use ESLint? … No
  ✔ Would you like to use Tailwind CSS? … No
  ✔ Would you like to use `src/` directory? … No
  ✔ Would you like to use App Router? (recommended) … No
  ✔ Would you like to customize the default import alias (@/*)? … No
```

Apparently, when you _don't_ use App Router (recommended), the pages directory _is available_ and on the contrary, when using App Router, the pages directory _isn't available_.

The App Router is _new_ and I'll have to explore using App Router in a future webLog without the pages directory, out the box, and see how things work alternatively.

For now, I just answered "... No" to any of the "Would you like to..." questions.

5. After the new Next.js application was created, I opened the current directory using Visual Studio Code:
```
    code .
```

### Starting the Next.js app

6. Then, in the Terminal app, I started the Next.js development server:
```
    npm run dev
```

7. I then accessed the Next.js application via my web browser by navigating to:
```
    http://localhost:3000
```

### Getting & Loading a Google Font into the Next.js app

8. I then, went to [Google Fonts](https://fonts.google.com/), searched for the Raleway font, selected it, and clicked the following to add the styles:

    - Select Thin 100
    - Select ExtraLight 200
    - Select Light 300
    - Select Regular 400
    - Select Medium 500
    - Select SemiBold 600
    - Select Bold 700
    - Select ExtraBold 800

9. Once done adding the styles, I copied the Google Fonts link tags that were generated as such:
```
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet">
```

10. In Visual Studio Code, I opened the entry point of the Next.js application, the index.js file:
```
    /Users/eugene/Desktop/nextjs-tailwindcss/pages/index.js
```

___If the Head Next.js component has already been imported in index.js and being used in the return statement of the Home functional component, then skip to step 13.___

11. At the top of index.js, I imported the Next.js built-in component for appending elements to the head of the page:
```
    import Head from 'next/head';
```

12. Then, in the Home function, within the enclosed opening and closing parenthesis of the return statement, I added the HTML title element, wrapped with the Next.js Head component, as follows:
```
    export default function Home() {
      return (
        <>
          <Head>
            <title>Next.js TailwindCSS Website</title>
          <Head />
          .
          .
          .
        </>
      )
    }
```
__Note__:
- I had to wrap everything in the return statement with a React fragment <></>

13. Then, I opened _document.js:
```
    /Users/eugene/Desktop/nextjs-tailwindcss/pages/_document.js
```

14. Then, I pasted the Google Font link tags for the Raleway font which I copied in step 9 within the Head tags as shown below:
```
    import { Html, Head, Main, NextScript } from 'next/document'
    
    export default function Document() {
      return (
        <Html lang="en">
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
```
Note:
- Originally, the file just had a self closing Head tag
  - Instead, I had to use an opening Head tag and a closing Head tag
    - Then, pasted the Google Font link tags within
- Also, I had to add a forward slash / before the closing bracket > of all three link tags.

15. Then, I went back to index.js:
```
    /Users/eugene/Desktop/nextjs-tailwindcss/pages/index.js
```

16. Then, replaced __Inter__ with __Raleway__ in the import statement:

__Before__:
```
    import { Inter } from 'next/font/google'
```
__After__:
```
    import { Raleway } from 'next/font/google'
```

17. Then, replaced Inter and inter with Raleway and raleway, respectively.

At this point the Raleway font should have loaded anywhere Inter was being used before.

### Installing Tailwind CSS

18. In my web browser, I navigated over to [tailwindcss.com](https://tailwindcss.com/) then clicked [Get started](https://tailwindcss.com/docs/installation) which directed me over to the Installation page.

19. Within the [Installation page](https://tailwindcss.com/docs/installation), I clicked the [Framework Guides](https://tailwindcss.com/docs/installation/framework-guides) and clicked [Next.js](https://tailwindcss.com/docs/guides/nextjs).

20. I skipped down to step 2 of the guide, copied the command, stopped the development server, and installed Tailwind CSS by pasting, and executing the command:
```
    npm install -D tailwindcss postcss autoprefixer
```

21. Next, I went back to the Tailwind CSS framework guide, copied the next command, and created a Tailwind CSS configuration file by pasting, and executing the command:
```
    npx tailwindcss init -p
```

22. At this point, the following Tailwind CSS configuration file was now available in the root of the project folder:
```
    nextjs-tailwindcss/tailwind.config.js
```

23. Then, I went to step 3 of the [Tailwind CSS installation guide for Next.js](https://tailwindcss.com/docs/guides/nextjs), copied the elements within the content array and pasted them in the content array found inside of tailwind.config.js:
```
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
       "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
     
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
```

24. Then, I went to step 4 of the [Tailwind CSS installation guide for Next.js](https://tailwindcss.com/docs/guides/nextjs), and copied the following Tailwind directives:
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

25. Then, I went to the following globals.css file, deleted everything within it and pasted the Tailwind directives:
```
    nextjs-tailwindcss/styles/globals.css
```

26. Then, I added the following CSS snippet for styling HTML elements right below the Tailwind directives just pasted in the previous step:
```
    html {
      scroll-behavior: smooth;
      font-family: 'Raleway', sans-serif;
    }
```
Note:
- **scroll-behavior: smooth;** is a CSS property that controls the smoothness of a scrolling behavior when navigating to an anchor link within the page.
  - When scroll-behavior is set to smooth, the scrolling will be animated and gradual rather than instantaneous.
    - This can enhance the UX, especially when clicking on links that lead to different sections on the same page.
- **font-family: 'Raleway', sans-serif;** is a CSS property that sets the font family for text within the HTML element.
  - It specifies that the preferred font is 'Raleway', and if 'Raleway' is not available, the browser should use a generic sans-serif font.
    - This provides a fallback option in case the specified font is not present on the user's system.

### Clean-up Process
#### (So we can start developing from scratch)

27. Then, I deleted the following CSS module file related to the Home component:
```
    nextjs-tailwindcss/styles/Home.module.css
```

28. Additionally, I deleted the following pages/api folder and anything in there since I'm not creating any API routes for this project:
```
    nextjs-blog/pages/api
```

29. Then, I started the development server as follows to see if Tailwind CSS was properly set up an running:
```
    npm run dev
```

30. I received a compilation error on nextjs-tailwindcss/pages/index.js:
```
    Failed to compile
        ./pages/index.js:4:0
        Module not found: Can't resolve '@/styles/Home.module.css'
          2 | import Image from 'next/image'
          3 | import { Raleway } from 'next/font/google'
        > 4 | import styles from '@/styles/Home.module.css'
          5 |
          6 | const raleway = Raleway({ subsets: ['latin'] })
          7 |

        https://nextjs.org/docs/messages/module-not-found
    This error occurred during the build process and can only be dismissed by fixing the error.
```

31. Since, I deleted the CSS module for the Home component in step 27, nextjs-tailwindcss/pages/index.js is not able to point to it when the import statement is executed:

32. Therefore, I deleted the import statment:
```
    import styles from '@/styles/Home.module.css'
```

33. Then, I got another compilation error:
```
    Server Error
    ReferenceError: styles is not defined
    This error happened while generating the page. Any console logs will be displayed in the terminal window.
    Source
        pages/index.js (16:26) @ styles
          14 |   <link rel="icon" href="/favicon.ico" />
          15 | </Head>
        > 16 | <main className={`${styles.main} ${raleway.className}`}>
             |                    ^
          17 |   <div className={styles.description}>
          18 |     <p>
          19 |       Get started by editing&nbsp;
    Show collapsed frames
```

34. Therefore, I deleted the entire main element

35. Now, the nextjs-tailwindcss/pages/index.js only contained the following code and no more compilation errors were present:
```
    import Head from 'next/head'
    import Image from 'next/image'
    import { Raleway } from 'next/font/google'
      
    const raleway = Raleway({ subsets: ['latin'] })
      
    export default function Home() {
      return (
        <>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </>
      )
    }
```

36. Now, if we go back to our browser at http://localhost:3000, we have a blank application where we can start from scratch.

### Building the Hero Component

37. Created a components folder at the root of the project directory:
```
    nextjs-tailwindcss/components
```

38. Created a Hero.jsx file within the components folder:
```
    nextjs-tailwindcss/components/Hero.jsx
```

39. Then, I installed a Visual Studio Code extension, [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets), which provides code snippets that'll enhance development, by clicking View in the macOS application specific menu bar for Visual Studio Code, at the top of the screen, then clicking Extensions, at which point I searched for the extension, and clicked Install.

40. I opened nextjs-tailwindcss/components/Hero.js, typed **rafce** then enter, at which point the extension, automatically generated a basic template for a functional React component using an import statement, an arrow function, and an export statement.
```
    import React from 'react'

    const Hero = () => {
      return (
        <div>Hero</div>
      )
    }

    export default Hero
```
Note:
- This component will be used on multiple pages and will be dynamic since properties will be passed to it
  - A great thing we can do in React and Next

41. Then, within the return statement of the Hero component, I:
- Removed the content, "Hero", within the **div** element
- Added a JSX comment suggesting an Overlay
- Added a self-closing **div** element
  - TailwindCSS will be filled-in here later
- Added an **h2** element with Heading as its content
  - A property will be passed here later
- Added a **p** element with Message as its content
  - A property will be passed here later
- Added a **button** with Book as its content
```
    import React from 'react'
    
    const Hero = () => {
      return (
        <div>
          {/* Overlay */}
          <div />
          <h2>Heading</h2>
          <p>Message</p>
          <button>Book</button>
        </div>
      )
    }
    
    export default Hero
```
Note:
- Even though we have an **h2** element, when rendered, it looks like a normal **p** element

42. Then, I installed a Visual Studio Code extension called [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) to assist with Tailwind CSS in the development process.

43. Then, in the nextjs-tailwindcss/components/Hero.jsx file, in the *outer most* **div** of the *return statment*, I added a React **className** attribute used to assign one or more CSS classes to an HTML element, and assigned it the following Tailwind CSS utility classes:
- flex
  - Applies **`display: flex;`** to the element, making it a flex container.
    - Flexible Box Layout is a layout model in CSS that allows you to design a layout structure in a more efficient and predictable way.
      - It is particulary useful for designing complex layouts and aligning items within a container, solving many common layout problems that developers often face.
- items-center
  - Applies **`align-items: center;`** to a flex container, vertically aligning its children in the center along the cross-axis.
- justify-center
  - Applies **`justify-content: center;`** to a flex container, horizontally aligning its children in the center along the main axis.
- h-screen
  - Sets the height of the element to **`100vh`**, which means it takes up the full height of the viewport. This is often used to create full-height sections.
- mb-12
  - Sets a margin-bottom of **`3rem`** (12 units). The unit used in Tailwind CSS is based on the default spacing scale.
- bg-fixed
  - Applies **`background-attachment: fixed;`** to the element. It fixes the background image in place, so it doesn't scroll with the content.
- bg-center
  - Applies **`background-position: center;`** to the element. It centers the background image.
- bg-cover
  - Applies **`background-size: cover;`** to the element. It ensures that the background image covers the entire container, potentially cropping parts of the image.
- custom-img
  - This is a custom CSS class that is going to be defined later.
```




```
At this point, the app should look [like this](https://nextjs-tailwindcss-gamma.vercel.app/).
```




```
> ## TO BE CONTINUED...