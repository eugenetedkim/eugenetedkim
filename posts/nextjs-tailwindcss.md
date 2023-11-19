---
title: 'Building a Responsive Next.js Website Using Tailwind CSS'
date: '2023-11-13'
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

Apparently, when you don't use App Router (recommended), the pages directory isn't included. App Router is new and I'll have to explore using App Router in a future webLog.

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

17. Then, repalced Inter and inter with Raleway and raleway, respectively.

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


> TO BE CONTINUED...