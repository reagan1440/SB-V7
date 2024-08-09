# SB-V7

This is a repo for solutionbuilt site rebuild with SSR using Next.js, React, and Typescript.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Running the Project](#running-the-project)
    - [Production Mode](#production-mode)
    - [Development Mode](#development-mode)
5. [Development Practices](#development-practices)
    - [TypeScript Integration](#typescript-integration)
    - [Component Design](#component-design)
    - [Coding Standards](#coding-standards)
    - [Scripts and Commands](#scripts-and-commands)
6. [Deployment](#deployment)
7. [Additional Resources](#additional-resources)
8. [Contributing](#contributing)
9. [License](#license)

## Project Overview

SB-V7 is a modern, responsive website designed to showcase SolutionBuilt's capabilities. The project integrates cutting-edge web technologies to provide fast load times and efficient rendering, leveraging SSR with Next.js for improved SEO. The emphasis is on maintainability, scalability, and performance through the use of TypeScript for type safety and React for a component-based architecture.

## Features

- **Next.js with SSR:** Utilizes server-side rendering for improved SEO and faster page loads.
- **React Components:** Modular, reusable components enhance development efficiency and maintainability.
- **TypeScript Support:** Ensures type-safe code with autocompletion to help with reducing errors.
- **Responsive Design:** Optimized for all devices and screen sizes.
- **Integrated Development Environment:** Offers a fast edit-refresh workflow for real-time feedback during development.
- **Build and Deployment:** Streamlined build process with commands for easy setup and deployment.

## Installation

To set up SB-V7 locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone "repo"
   cd SB-V7

2. **Install Dependicies**

    npm install or npm i

    This command installs all necessary packages, including Next.js, React, and TypeScript, along with other dependencies listed in the package.json file.

3. **Running the Project**

    build the project
    - npm run build
    This command compiles the TypeScript and JavaScript files, optimizing them for production use.

    Start the production server
    - npm run start
    Access the site on http://localhost:3000 to view the live production version.

    Run the development server
    - npm run dev
    The development server will start, and any code changes will be automatically reflected, allowing for a quick edit-refresh workflow. This mode is ideal for active development and testing.
    This site will also be accessed on http://localhost:3000

    ctrl+c and then "y" to kill the server running so you can switch between prod and dev servers as well as running build

    to clear cache (this isnt commonly needed but can help to debug if nessecary)

    npm cache clean --force
    or &
    npm cachce verify

4. **Development Practices** 

    Setup: TypeScript is supported by default in Next.js. All .ts and .tsx files are automatically detected.

    Type Declarations: Install type declarations for React and Node for accurate type definitions
    - npm install --save-dev @types/react @types/react-dom @types/node

    Automatic tsconfig.json Creation: Running next dev for the first time will generate a tsconfig.json file with recommended settings for Next.js.

5. **Component Design** 

    The project employs a component-based built, to promote reusability and consistency:

    Reusable Components: UI elements are encapsulated as React components, ensuring a consistent look and feel across the site.

    Separation of Components: Each component handles a specific piece of functionality, making the codebase easier to understand and maintain.

    Styling with CSS Modules: CSS Modules are used to scope styles locally to components, preventing conflicts and ensuring maintainability.

    CSS globals: There is a global css file with h1 h2 * etc but CSS modules does not support "pure" (pure selectors must contain at least one local class or id)

6. **Coding Standards**

    The project adheres to industry-standard coding practices:

    Linting and Formatting: ESLint and Prettier are used to enforce consistent code style and formatting.
    Strict Typing: TypeScript is used to catch potential errors at compile time, leading to more robust and error-free code.

    Version Control: Git is used for version control, with a branching strategy that supports collaborative development.

7. **Type Checking & Linting** 

    Runs TypeScript's tsc CLI in noEmit mode to check for type errors without generating output files.
    - npm run type-check

    Runs ESLint to check for code style issues and enforce coding standards.
    - npm run lint

8. **Additional Resources** 

    Next.js Documentation: https://nextjs.org/docs
    React Documentation: https://legacy.reactjs.org/docs/getting-started.html
    TypeScript Documentation: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
    ESLint Documentation: https://eslint.org/docs/latest/rules/
    Prettier Documentation: https://prettier.io/docs/en/options.html

9. **Tips from Developer**

------images

     using components and calling them into your page will allow for cleaner code and easier editing since each section will be specific to that component with a module.css attached to it

     The easiest way to REPLACE an image would be to rename your image file to name currently being called, drop that into the images folder, and select "override image"
     React and Next.js will automatically update an imports needed

     to add an image with next.js optimaztion, start with building your image component then placing your image in components/images folder

     on the page or file you will be using this image on, on the top with all other imports, import it following this logic 

     import yourimage from '../components/images/mynewimage.png'

        <div className={styles.yourimage}>
        <Image
          src={yourimage}
          alt="My new Image"
          width={1000}
          height={1000}
          layout="responsive"
        />

        using the above layout for calling your import is standard with next.js image optimizing to help improve compability and lighthouse scores

------new pages


        creating a new page is as simple as right clicking the pages folder, new file, name it yournewpage.tsx, throw in a temporary import/export statement ex.

``````````````````````````````````````````````````````
        import React from 'react';
        import styles from '../components/NewPage.module.css';
        const NewPage = () => {
             return (
             <div className={styles.container}>
                <header className={styles.header}>
                <h1>New Page</h1>
                </header>
             </div>
          );
        };

            export default NewPage;
``````````````````````````````````````````````````````

            you can also go ahead and create your new css module since you have already created classNames

            modules and components ARE case sensitve so it will look something like NewPage.module.css 

            you can copy over this css 

``````````````````````````````````````````````````````

            .container {
                margin: 0 22%;
            }

            .header {
                color: pink;
                font-size: 24px;
            }

``````````````````````````````````````````````````````

    now run - npm run build 
    your static pages should now be one number higher then the last time you ran it ex.
        Generating static pages (10/10) should now be 
        Generating static pages (11/11) 
        all of this depending on the number of pages at the time you are working in this

    run your development server and you should find your new page under localhost:3000/yournewpage

------- API folder 

the Api folder is built and set up in case for some reason later on we decide to track webdata or allow users to sign in? idk it was simple just incase its later on needed

the interfaces and utils folder holds some example data 

-------- Public folder

this folder as of making this READ.md only holds the header video for our home page


--------- Module.css benefits and differences

### What are CSS Modules?

CSS Modules are a popular way to write modular and reusable CSS in web development. They offer a solution to the problem of CSS class name collisions by automatically scoping class names locally by default. This is particularly useful when working with component-based frameworks like React and Next.js.

### Key Features

- **Locally Scoped Styles**: Unlike global CSS, where class names can accidentally override each other, CSS Modules ensure that styles are scoped locally to the component by generating unique class names at build time.
  
  .button {
      background-color: blue;
      color: white;
  }

  This .button class will be compiled into something like .Example_button__1a2b3 to prevent conflicts with similarly named classes elsewhere.

    Dynamic Class Names: CSS Modules automatically create a unique hash for each class, allowing developers to use the same class names in different files without worrying about style conflicts.

    Cleaner Code: By scoping styles to specific components, CSS Modules help in maintaining cleaner code and reducing the risk of unintentional style leaks across the application.

    Maintainability: With the scope contained, developers can manage styles at the component level, which simplifies maintenance and enhances readability, especially in larger codebases.

    Key thing to remember is you must import the style sheet on the page you want it used on follow this logic 

   ----- import styles from '../components/MyCSSFile.Module.css'

## Why I choose to use Modules

### Comparison with Global CSS

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#f4a261', 'edgeLabelBackground':'#fefae0'}}}%%
graph TD
    A[Comparison with Global CSS]
    A -->|Feature| B[Scope]
    A -->|Feature| C[Class Name Conflicts]
    A -->|Feature| D[Maintainability]
    A -->|Feature| E[Usability]

    B -->|Global CSS| F(Global, affecting all elements)
    B -->|CSS Modules| G(Local, affecting only the module)

    C -->|Global CSS| H(Common and problematic)
    C -->|CSS Modules| I(Virtually non-existent)

    D -->|Global CSS| J(Can become complex)
    D -->|CSS Modules| K(Cleaner, component-based)

    E -->|Global CSS| L(Requires careful management)
    E -->|CSS Modules| M(Simple and straightforward)



when creating a new className to use in your module css (remember everything in react is case sensitive-----except pages for some reason?)

it will look like this
<header className={styles.aboutHeader}> Hi this is my page header </header>

you will then go to your css file that is imported on the file you are creating the name for and simply call

.aboutHeader {
     background-color: #FFF;
     border-radius: 5px;
     cursor: pointer;
}

when using inline css it will look like 

const headerStyle{
    backgroundColor: '#FFF',
    borderRadius: '5px',
    cursor: 'pointer'
}

the main differences are **case sensitivity**, using **''** and **,**

compare to regular inline css which uses **-** and **;**

you can look at this example and see the difference even more 

<p style="background-color: #FFF; border-radius: 5px; cursor: pointer;"> Hi this is my page header</p>


## Notes

This site shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React and Node.

```
npm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in the project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.

```markdown
# License

## Proprietary License

Copyright (c) 2024 Solutionbuilt and Searched Marketing

All rights reserved. 

Permission to use, copy, modify, and distribute this software for non-commercial purposes is hereby granted, provided that the above copyright notice and this permission notice are included in all copies or substantial portions of the Software.

**Commercial use** of this software requires a separate commercial license agreement. For more information on commercial licensing, please contact [Your Company/Name] at [Your Contact Information].

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

For any questions or to request commercial licensing, please contact [Your Company/Name] at [Your Contact Information].