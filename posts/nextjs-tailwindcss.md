---
title: 'Building a Responsive Next.js Website Using Tailwind CSS'
date: '2023-12-31'
---

On this webLog, I'll be documenting the steps taken to build a responsive Next.js website using Tailwind CSS.

## Here are the steps taken:

### Creating the Next.js app

1. Using the Terminal app on my Mac, made a new directory:
```bash
mkdir nextjs-tailwindcss
```
2. Navigated into it:
```bash
cd nextjs-tailwindcss
```
3. Installed Node.js using the official Node.js installer from their [downloads page](https://nodejs.org/en/download).

4. Once Node.js was installed, I created a new Next.js boilerplate application:
```bash
npx create-next-app@latest .
```

I answered the following questions as follows when prompted:
```bash
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
```bash
code .
```

### Starting the Next.js app

6. Then, in the Terminal app, I started the Next.js development server:
```bash
npm run dev
```

7. I then accessed the Next.js application via my web browser by navigating to:
```plaintext
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
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet">
```

10. In Visual Studio Code, I opened the entry point of the Next.js application, the index.js file:
```plaintext
/nextjs-tailwindcss/pages/index.js
```

___If the Head Next.js component has already been imported in index.js and being used in the return statement of the Home functional component, then skip to step 13.___

11. At the top of index.js, I imported the Next.js built-in component for appending elements to the head of the page:
```js
import Head from 'next/head';
```

12. Then, in the Home function, within the enclosed opening and closing parenthesis of the return statement, I added the HTML title element, wrapped with the Next.js Head component, as follows:
```js
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
**Note**:
- I had to wrap everything in the return statement with a React fragment <></>

13. Then, I opened _document.js:
```plaintext
/nextjs-tailwindcss/pages/_document.js
```

14. Then, I pasted the Google Font link tags for the Raleway font which I copied in step 9 within the Head tags as shown below:
```js
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
**Note**:
- Originally, the file just had a self closing Head tag
  - Instead, I had to use an opening Head tag and a closing Head tag
    - Then, pasted the Google Font link tags within
- Also, I had to add a forward slash / before the closing bracket > of all three link tags.

15. Then, I went back to index.js:
```plaintext
/nextjs-tailwindcss/pages/index.js
```

16. Then, replaced __Inter__ with __Raleway__ in the import statement:

__Before__:
```js
import { Inter } from 'next/font/google'
```
__After__:
```js
import { Raleway } from 'next/font/google'
```

17. Then, replaced Inter and inter with Raleway and raleway, respectively.

At this point the Raleway font should have loaded anywhere Inter was being used before.

### Installing Tailwind CSS

18. In my web browser, I navigated over to [tailwindcss.com](https://tailwindcss.com/) then clicked [Get started](https://tailwindcss.com/docs/installation) which directed me over to the Installation page.

19. Within the [Installation page](https://tailwindcss.com/docs/installation), I clicked the [Framework Guides](https://tailwindcss.com/docs/installation/framework-guides) and clicked [Next.js](https://tailwindcss.com/docs/guides/nextjs).

20. I skipped down to step 2 of the guide, copied the command, stopped the development server, and installed Tailwind CSS by pasting, and executing the command:
```bash
npm install -D tailwindcss postcss autoprefixer
```

21. Next, I went back to the Tailwind CSS framework guide, copied the next command, and created a Tailwind CSS configuration file by pasting, and executing the command:
```bash
npx tailwindcss init -p
```

22. At this point, the following Tailwind CSS configuration file was now available in the root of the project folder:
```plaintext
nextjs-tailwindcss/tailwind.config.js
```

23. Then, I went to step 3 of the [Tailwind CSS installation guide for Next.js](https://tailwindcss.com/docs/guides/nextjs), copied the elements within the content array and pasted them in the content array found inside of tailwind.config.js:
```js
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
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

25. Then, I went to the following globals.css file, deleted everything within it and pasted the Tailwind directives:
```plaintext
nextjs-tailwindcss/styles/globals.css
```

26. Then, I added the following CSS snippet for styling HTML elements right below the Tailwind directives just pasted in the previous step:
```css
html {
  scroll-behavior: smooth;
  font-family: 'Raleway', sans-serif;
}
```
**Note**:
- **scroll-behavior: smooth;** is a CSS property that controls the smoothness of a scrolling behavior when navigating to an anchor link within the page.
  - When scroll-behavior is set to smooth, the scrolling will be animated and gradual rather than instantaneous.
    - This can enhance the UX, especially when clicking on links that lead to different sections on the same page.
- **font-family: 'Raleway', sans-serif;** is a CSS property that sets the font family for text within the HTML element.
  - It specifies that the preferred font is 'Raleway', and if 'Raleway' is not available, the browser should use a generic sans-serif font.
    - This provides a fallback option in case the specified font is not present on the user's system.

### Clean-up Process
#### (So we can start developing from scratch)

27. Then, I deleted the following CSS module file related to the Home component:
```plaintext
nextjs-tailwindcss/styles/Home.module.css
```

28. Additionally, I deleted the following pages/api folder and anything in there since I'm not creating any API routes for this project:
```plaintext
nextjs-tailwindcss/pages/api
```

29. Then, I started the development server as follows to see if Tailwind CSS was properly set up an running:
```bash
npm run dev
```

30. I received a compilation error on nextjs-tailwindcss/pages/index.js:
```plaintext
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
```js
import styles from '@/styles/Home.module.css'
```

33. Then, I got another compilation error:
```plaintext
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
```js
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
```plaintext
nextjs-tailwindcss/components
```

38. Created a Hero.jsx file within the components folder:
```plaintext
nextjs-tailwindcss/components/Hero.jsx
```

39. Then, I installed a Visual Studio Code extension, [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets), which provides code snippets that'll enhance development, by clicking View in the macOS application specific menu bar for Visual Studio Code, at the top of the screen, then clicking Extensions, at which point I searched for the extension, and clicked Install.

40. I opened nextjs-tailwindcss/components/Hero.js, typed **rafce**, then hit enter, at which point the extension automatically generated a basic template for a functional React component using an import statement, an arrow function, and an export statement as shown below:
```js
import React from 'react'

const Hero = () => {
  return (
    <div>Hero</div>
  )
}

export default Hero
```
**Note**:
- This component will be used on multiple pages and will be dynamic since properties will be passed to it
  - A great thing we can do in React and Next

41. Then, I:
- Changed the arrow function to a named function
- Removed the content, "Hero", within the **div** element
- Added a JSX comment suggesting an Overlay
- Added a self-closing **div** element
  - TailwindCSS will be filled-in here later
- Added an **h2** element with Heading as its content
  - A property will be passed here later
- Added a **p** element with Message as its content
  - A property will be passed here later
- Added a **button** with Book as its content

At this point, the code looked like this:
```js
import React from 'react';

function Hero() {
  return (
    <div>
      {/* Overlay */}
      <div />
      <h2>Heading</h2>
      <p>Message</p>
      <button>Book</button>
    </div>
  );
}

export default Hero;
```
**Note**:
- Even though we have an **h2** element, when rendered, it looks like a normal **p** element

42. Then, I installed a Visual Studio Code extension called [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) to assist with Tailwind CSS in the development process.

43. Then, in the nextjs-tailwindcss/components/Hero.jsx file, in the *outer most* **div** of the *return statement*, I added a React **className** attribute, used to assign one or more CSS classes to an HTML element, and assigned it the following CSS classes:
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

44. Then, I found an image, copied it.

45. Then, at the root of the application directory (nextjs-tailwindcss), I created a public folder, and within, created an images folder and pasted the image in it as such:
```plaintext
/nextjs-tailwindcss/public/images/convictlake.jpg
```

46. Then, I went to the /nextjs-btailwindcsslog/styles/globals.css file and defined the **.custom-img** CSS class selector and now the file looks like this:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
  font-family: 'Raleway', sans-serif;
}

.custom-img {
  background-image: url('/images/convictlake.jpg');
  background-position: left 15% center; /* Adjust the positioning as needed */
}
```
**Note**:
 - When defining the **custom-img** CSS class selector, I had to add **background-position: left 15% center;** because as the screen size (e.g. on my iPhone) became smaller, the center of the background image was being displayed but I wanted to actually show the left side of the background image but clipping the left side of the background image by 15% of the horiziontal screen width.

47. Then, in my /nextjs-tailwindcss/components/Hero.jsx file, I added a className attribute with following values to the **self-closing div** as shown below to create the background overlay.

```js
import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70'/>
      <div>
        <h2>Heading</h2>
        <p>Message</p>
        <button>Book</button>
      </div>
    </div>
  )
}

export default Hero
```
**Note**:
  - **absolute**: Positions the element using absolute positioning.
    - This means the element is positioned relative to its closest positioned ancestor, which could be the nearest parent element with a relative, absolute, fixed, or sticky positioning.

  - **top-0**: Sets the top position of the element to 0.
    - This means the top edge of the element will be aligned with the top edge of its positioned ancestor.

  - **left-0**: Sets the left position of the element to 0.
    - This means the left edge of the element will be aligned with the left edge of its positioned ancestor.

  - **right-0**: Sets the right position of the element to 0.
    - This means the right edge of the element will be aligned with the right edge of its positioned ancestor.

  - **bottom-0**: Sets the bottom position of the element to 0.
    - This means the bottom edge of the element will be aligned with the bottom edge of its positioned ancestor.

  - **bg-black/70**: Applies a black background color to the element with a 70% opacity.
    - The /70 is a shorthand in Tailwind CSS for setting the alpha (transparency) value of the color.

48. Then, 

\
I realized I didn't like using this approach because it wasn't responsive across smaller screens like my iPhone.

Therefore, I ditched the CSS approach to bringing in my background image via the custom-img CSS class selector in step 46, and turned my attention to using the Next.js Image component plus Tailwind CSS as follows to help make my background image respond to various screen sizes. Additionally, I added object destructuring to the Hero component function so I could dynamically render the props being passed from index.js.

```js
import Image from 'next/image'

function Hero({heading, message}) {
  return (
    <div className='relative flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover'>
      <div className="absolute top-0 right-0 bottom-0 left-0 z-[0]">
        <Image
          src="/images/convictlake.jpg"
          fill
          className='object-cover object-left'
          alt=""
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/50 z-[1]" />
    
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 py-2 border">Book</button>
      </div>
    </div>
  );
};

export default Hero;
```
\
49. Then, I deleted the following CSS class selector from my globals.css file:
```css
.custom-img {
  background-image: url('/images/convictlake.jpg');
  background-position: left 15% center; /* Adjust the positioning as needed */
}
```

50. Then, I went to index.js and passed in some props for heading and message as such:
```js
import Head from 'next/head'
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Eugene Kim" message="I think, therefore I am."/>
    </>
  )
}
```
Then voila, a background image of my liking, an overlay, and dynamic content using props that is rendered responsively on my iPhone.

### Building the Navbar Component

51. Next, I created a new Navbar component which looks like this under the components folder:
```js
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>

      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>

        <Link href='/'>
          <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>Eugene Kim</h1>
        </Link>

        <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/work'>Work</Link>
          </li>
          <li className='p-4'>
            <Link href='/#resume'>Resume</Link>
          </li>
          <li className='p-4'>
            <Link href='/about'>About</Link>
          </li>
          <li className='p-4'>
            <Link href='/notes'>Notes</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {
            nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
        </div>

        {/* Mobile Menu */}
        <div className={
          nav
            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white'
            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white'
          }
        >
          <ul>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/work'>Work</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#resume'>Resume</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/about'>About</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/notes'>Notes</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
}
```
Here's the breakdown of what was created in the code for the Navbar component above:
- We first have the following **import statements**:
  ```js
  import Link from 'next/link';
  import { useState, useEffect } from 'react';
  import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
  ```
  - The **Link** component provided by the next/link module
    - Used to enable client-side navigation between pages in a Next.js application without triggering full-page reloads
  - The **useState** hook from the React library
    - Used to allow our functional component to have the following states
      - A boolean which will be used for displaying and hiding the mobile navigation menu and updated when a user clicks the mobile menu button
      - A string which will be used for the background color of the navigation bar when the user scrolls
      - A string which will be used for the text color of the navigation bar when the user scrolls
  - The **useEffect** hook from the React library
    - Used to handle side effects that are triggered from an external system
      - The side effect are the updates to the background color and text color of the navigation bar
      - The external system that triggers the side effects is the scroll event from the browser environment
  - **AiOutlineMenu** (the menu icon) from the AntDesign icon set from the react-icons library
    - Used as the button for displaying the mobile navigation menu
  - **AiOutlineClose** (the close icon) from the AntDesign icon set from the react-icons library
    - Used as the button for hiding the mobile navigation menu
- Then we have the **functional component**:
  ```js
    export default function Navbar() {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    const handleNav = () => {
      setNav(!nav);
    }

    useEffect(() => {
      const changeColor = () => {
        if (window.scrollY >= 90) {
          setColor('#ffffff');
          setTextColor('#000000');
        } else {
          setColor('transparent');
          setTextColor('#ffffff');
        }
      };
      window.addEventListener('scroll', changeColor);
    }, []);

    return (
      <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>

        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>

          <Link href='/'>
            <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>Eugene Kim</h1>
          </Link>

          <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
            <li className='p-4'>
              <Link href='/work'>Work</Link>
            </li>
            <li className='p-4'>
              <Link href='/#resume'>Resume</Link>
            </li>
            <li className='p-4'>
              <Link href='/about'>About</Link>
            </li>
            <li className='p-4'>
              <Link href='/notes'>Notes</Link>
            </li>
            <li className='p-4'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <div onClick={handleNav} className='block sm:hidden z-10'>
            {
              nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
          </div>

          {/* Mobile Menu */}
          <div className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white'
            }
          >
            <ul>
              <li className='p-4 text-4xl hover:text-gray-500'>
                <Link href='/work'>Work</Link>
              </li>
              <li className='p-4 text-4xl hover:text-gray-500'>
                <Link href='/#resume'>Resume</Link>
              </li>
              <li className='p-4 text-4xl hover:text-gray-500'>
                <Link href='/about'>About</Link>
              </li>
              <li className='p-4 text-4xl hover:text-gray-500'>
                <Link href='/notes'>Notes</Link>
              </li>
              <li className='p-4 text-4xl hover:text-gray-500'>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>

        </div>

      </div>
    );
  }
  ```
  - Within the functional component, we have the state variables and their corresponding state updater functions:
    ```js
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
    ```
    - **nav** and **setNav**
      - Used for displaying and hiding the mobile navigation menu
    - **color** and **setColor**
      - Used for the background of the navigation bar
    - **textColor** and **setTextColor**
      - Used for the text color of the navigation bar
  - The event handlers used to update the state variables in response to user actions:
    ```js
    const handleNav = () => {
      setNav(!nav);
    }

    useEffect(() => {
      const changeColor = () => {
        if (window.scrollY >= 90) {
          setColor('#ffffff');
          setTextColor('#000000');
        } else {
          setColor('transparent');
          setTextColor('#ffffff');
        }
      };
      window.addEventListener('scroll', changeColor);
    }, []);
    ```
    - **handleNav**
      - Used to display and hide the mobile navigation menu when the user clicks the menu button or the close menu button
    - **useEffect**
      - Used for handling the background color and text color of the navigation bar when a user scrolls on the browser's window
  - The **return statement** with JSX which defines the structure and appearance of the component in the user interface:
    ```js
    return (
      <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>

        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>

          <Link href='/'>
            <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>Eugene Kim</h1>
          </Link>

          <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
            <li className='p-4'>
              <Link href='/work'>Work</Link>
            </li>
            <li className='p-4'>
              <Link href='/#resume'>Resume</Link>
            </li>
            <li className='p-4'>
              <Link href='/about'>About</Link>
            </li>
            <li className='p-4'>
              <Link href='/notes'>Notes</Link>
            </li>
            <li className='p-4'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <div onClick={handleNav} className='block sm:hidden z-10'>
            {
              nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
          </div>

          {/* Mobile Menu */}
          <div className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white'
            }
          >
            <ul>
              <li className='p-4 text-4xl hover:text-gray-500'>
                <Link href='/work'>Work</Link>
              </li>
              <li className='p-4 text-4xl hover:text-gray-500'>
                <Link href='/#resume'>Resume</Link>
              </li>
              <li className='p-4 text-4xl hover:text-gray-500'>
                <Link href='/about'>About</Link>
              </li>
              <li className='p-4 text-4xl hover:text-gray-500'>
                <Link href='/notes'>Notes</Link>
              </li>
              <li className='p-4 text-4xl hover:text-gray-500'>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>

        </div>

      </div>
    );
    ```
    - In the return statement, in a nutshell (more details explained below), we have an outer div that sets up the navigation bar
      - An inner div that sets up the contents of the navigation bar
        - A logo
        - An unordered list of navigation links
        - A button for opening and closing the mobile menu
        - A mobile menu

  Furthermore, here's the breakdown of what's going on in the JSX in terms of styling:
  ```js
  return (
      <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        // Inner code
      </div>
    );
  ```
  - In the most outer div HTML element's opening tag, the following props (properties) are used:
    - **style={{backgroundColor: `${color}`}}** is a style prop used to apply inline styles to the div. It takes a set of curly braces used to embed a JavaScript expression, and further takes in an object where the key/value pair dynamically sets the background color of the navigation bar based on the value of the *color* state variable which triggers a re-render of the Navbar component when it is updated via the *setColor* state variable updater function within the useEffect event handler function which detects that a user has scrolled down or above 90 pixels of the global window object which represents the browser window

    - **className='fixed left-0 top-0 w-full z-10 ease-in duration-300'** is a prop used to assign CSS class names to an element. It takes in a string containing one or more class names. In this case, it has Tailwind CSS utility classes that positions the div fixed to the very top, left, and across 100% of the viewport width, stacks the div on top of all other elements with a lower stacking order, and a transition effect that starts slow and accelerates over a duration of 300 milliseconds (0.3 seconds) when the Navbar component is re-rendered

  - In the inner div HTML element's opening tag (direct child of the most outer div HTML element), the following prop (property) is used:
    - **className='max-w-[1240px] m-auto flex justify-between items-center p-4'** is a prop used to assign CSS class names to an element. It takes in a string containing one or more class names. In this case, it has Tailwind CSS utility classes that sets a maximum width of 1,240 pixels on this div so it won't exceed this width on larger screens, automatically adjusts the left and right margins to center this element horizontally, establishes a flex container so the child child elements inside this container can be flex items, applies space-between justification to the flex container, which means the child elements will be pushed to the edges of the container, with maximum space between them, aligns the child elements vertically at the center of the flex container, and sets padding of 1 rem (16 pixels) to all sides of the div

  - In the Link component from the next/link module provided by the Next.js framework (the direct child of the inner div), contains an h1 HTML element in which the following props are used:
    - **style={{color: `${textColor}`}}** is a style prop used to apply inline styles to the div. It takes a set of curly braces used to embed a JavaScript expression, and further takes in an object where the key/value pair dynamically sets the text color of the navigation bar based on the value of the *textColor* state variable which triggers a re-render of the Navbar component when it is updated via the *setTextColor* state variable updater function within the useEffect event handler function which detects that a user has scrolled down or above 90 pixels of the global window object which represents the browser window
    - **className='font-bold text-4xl'** uses Tailwind CSS to set the font weight to bold and the text size to extra-large (2.25 rem or 36 pixels) with a line height of 2.5 rem or 40 pixels.

  - In the ul HTML element (the direct child of the inner div), the following props are used:
    - **style={{color: `${textColor}`}}** is a style prop used to apply inline styles to the div. It takes a set of curly braces used to embed a JavaScript expression, and further takes in an object where the key/value pair dynamically sets the text color of the navigation bar based on the value of the *textColor* state variable which triggers a re-render of the Navbar component when it is updated via the *setTextColor* state variable updater function within the useEffect event handler function which detects that a user has scrolled down or above 90 pixels of the global window object which represents the browser window
    - **className='hidden sm:flex'** is used with Tailwind CSS to set the display property of the element to none, making the element hidden, effectively hiding the element on all screen sizes by default, and makes the ul HTML element visible and a flex container for screens of size "sm" (small) and larger

  - In the li HTML elements (direct children of ul HTML element) the following prop is used:
    - **className='p-4'** is used with Tailwind CSS to set the padding of 1 rem or 16 pixels to all four sides of each li HTML element

  - In the div (the direct child of the inner div)

52. Then, I imported the Navbar component into pages/_app.js and integrated it into the return statement using a React fragment (<></>) as such:
```js
import Navbar from "@/components/Navbar"
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
```

I added the Navbar component to _app.js because this is a special file that is used to wrap the entire app. It's purpose is to initialize pages and provide a consistent layout or structure across all pages. This ensures that the navigation bar is rendered consistenly on every page of the app.

I technically could have created a Layout component as a dedicated component for keeping common structure and achieved having the navigation bar rendered consistenly on every page as I would have using _app.js but I didn't want to add another layer since this is a small app.
   
\
\
\
At this point, the app should look [like this](https://nextjs-tailwindcss-gamma.vercel.app/).

## TO BE CONTINUED...