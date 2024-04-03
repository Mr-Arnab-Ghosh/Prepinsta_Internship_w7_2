Step 1: We've to install React library by using
                  "npx create-react-app react_file_name"   command.

                                        [ Here, "npx" stands for Node Package Execute
                                            "create-react-app" this is a tool by using this we install React library ]

        BUT,
              When we use "create-react-app" to install React it will install some files which may not be needed. So instead of using the above method we will use "vite" tool:
                      "npm create vite@latest"  - is used when we want to use "Vite" as our build tool.
                                          
                                          then, it will ask "Project name:" - we need to give a folder_name
                                                "Select a framework:" - we've to use keyboard arrow key to select our preferred 
                                                "Select a variant:" - select our preferred variant like TypeScript or JavaScript or TypeScript + SWC or JavaScript + SWC
                                                                        Here, "SWC" - Speedy Web Compiler
                                                                              but already "vite" tool is fast enough so we can simply select normal variant of JavaScript or TypeScript

                                          then, we've to run 3 commands
                                                1. we've to go inside the directory which we give as "Project name:"
                                                      "cd folder_name"

                                                2. we've to install the total configuration of Vite which we created above
                                                      "npm install"

                                                3. we need that url to see the already provided react html and this will be our default url for react html
                                                      "npm run dev"


**NOTE**
After all the above steps  are done, you can see project name(given by us) folder is created, within that folder there is a directory called "src" within that folder we can see there are multiple files like "App.jsx", "main.jsx" etc.
            we can see they've given a react html which we can see from the url we get through "npm run dev"
Now, within this "App.jsx" file, they've written multiple components and each component has its own functionality, all things in-terms of React syntax.
      And this "App.jsx" file is linked with "main.jsx" file which is a simple js file, basically this "main.jsx" file decides where the entire content of "App.jsx" file is going to load. So "main.jsx" file is sending the entire components of "App.jsx" file to the html.

# And we need to follow this entire flow of code to write something in React

"jsx" stands for: JavaScript XML and jsx makes it easier to write and add HTML in React. It's a syntax extension for JavaScript that allows users to create Document Object Model (DOM) trees using an XML-like syntax. "jsx" is basically extended or enhanced version of JavaScript.


**NOTE**
In JS the most of the things are methods but we can also apply class property. As React is library of JavaScript so, here too we have two ways to.

In React syntax our first keyword will be "rfc" which stands for [React Functional Component]. By typing "rfc" we will get basic React snippets.
   Also we've "rfce" stands for [React Functional Component Export].
   Also "rafce" stands for [React Arrow Functional Component Export].

   All provides React code snippets. We can use as per our preference.

React is Declarative Programming Language. It makes building UIs easier and more efficient.

# Important things related to jsx compared to html

- 1. In html there is always 1 parent that is body tag within that we write multiple lines of codes. Just like that jsx syntax also tells that all lines should be under single parent
- 2. In html we're allowed to use "input" file, "hr" tag, "br" tag without closing it. But in jsx, we have to close them by "/".
- 3. In html we write "class" but in jsx we write "className".
- 4. In html when we use "label" tag we write "for" but in jsx we've to write "htmlFor".

# Component:
         In programming, a component is an identifiable part of a larger program that provides a specific function or group of related functions. 
         In other words component refers to a reusable building block that accomplishes a specific function. It's like a mini-program within a larger program.

To use class components we've default code snippets by using keyword "rcc" stands for [React Class Components].



Step 2: After creating "Router" directory
                  "npm install react-router-dom"
                                                  ["router" is going to create a path or route, so that with the help of this we can browse(go) to one page to another page]
                                                  [to use router we need to install it at first]


# After completion of frontend part we've to create backend part
After creating "Server" directory
Step 3: 
          i) At first we've to initialize "npm"
                   "npm init" or "npm init -y"
                   
                        next, it may ask package name: "dineinserver" we should give this name related to our project.

         After that we need to install dependencies -                
         ii) Install express server, mongoose, express-validator bcryptjs using npm
                   "npm install express mongoose express-validator bcryptjs"
                                                                               [ "express-validator": To validate user inputs ]
                                                                               [ "bcryptjs": is a third party module that we installed for password hashing or protecting user password. We use "hash()" method of "bcryptjs" module to do that ]

        We need to install "nodemon" but we've already install "nodemon" globally, so we can directly use that
        iii) We've to run the index file of "Server" directory using "nodemon"
                   "nodemon index" or "nodemon index.js"

# Whenever we've to connect our frontend to backend, so basically we need to share our website resources to the external parties
    - But by default "it has been blocked by CORS(Cross Origin Resource Sharing)" policy so we have to allow "cors" from any origin.

Step 4: At first we need to install "cors" module
            "npm install cors"
