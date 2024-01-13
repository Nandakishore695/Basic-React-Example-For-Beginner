# React Interview Questions and Answer❄️ 
**1.What is React Js?**
- React is an open-source front-end JavaScript library used for building single-page applications and reusable component. 
- React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's 

**2.What is the JSX in React?**
- JSX stands for JavaScript XML. It allows us to write directly HTML code in React (within JavaScript xml).

**3.What is props?**
- Props stand for "Properties" They provide a way to pass data from a parent component to its child components. Props are read-only, mean that the child components receiving props cannot modify them directly.

**4.What is prop drilling in react?**
- Prop drilling is the process of passing down prop through multiple layers of components.
```
function ParentComponent() { 
    return <>
      <div>
        <ChildComponent message={"Data"}/>
      </div>
    </>
}
function ChildComponent({message}) { 
    return <>
      <div>
        <GrandChildComponent message={message}/>
      </div>
    </>
}
function GrandChildComponent({message}) { 
    return <>
      <div>
        <h1>{message}</h1>
      </div>
    </>
}
```

**5.What the way to avoid prop drilling?**
- Prop drilling can make code harder and to maintain to avoid prop drilling. we can use using context api or redux

**6.What is component?**
-	A component is an independent, reusable bit of code which divides the UI into smaller pieces.
-	**There are two possible ways to create a component.**
  
  i.**Function Components:** is the simplest way to create a component. Those are pure JavaScript functions that accept props as a parameter.
  ```
  function Greeting() { 
    return <h1>Hello</h1>;
}
```
  ii.**Class Components:** is introduce in ES6
```
  class Greeting extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
 }
```

**7.What is arrow funcion expression in jsx?**
- An arrow function expression is a compact alternative to a traditional function expression

**8.What is fragment in jsx?**
- In react a frament is a way to group multiple children's elements. Using a fragment prevents the addition of unnecessary nodes to the dom.

**9.Different between React and Angular?**
- React and Angular both are used to create single page ui application.
  
| React  | Angular |
| ------------- | ------------- |
| React is a library| Angular is a framework |
| React users a virtual Dom which makes it faster| Angular users a real dom |
| React is smaller and lightweight library | Angular is bigger because it is a complete framework |
| React depends on external libraries for many complex features, so developer has to write many lines of code for complex functionalities| Angular provide built-in features like routing, forms, validation, and HTTP requests |
| React is simple to learn and more popular than angular| Angular is slightly difficult to learn it has Typescript, OOPS concept and many more thing |

**10.Different between Dom and Virtual Dom?**

| DOM  | Virtual DOM |
| ------------- | ------------- |
| Dom is actual respresentation of the webpage  | Virtual Dom is lightweight copy of the dom |
| Entire page Re-renders when click occur  | Re-renders only the changes parts efficiently |
| Suitable for static websites and simple applications  | Optimized for faster rendering |

**11.What is state in react?**
- In React, 'state' refers to the data that a component keeps track of and can change during its lifecycle. Whenever the state object changes, the component re-renders to reflect the updated state in the user interface.
- In contrast, a 'stateless' component, also known as a functional component, doesn't manage its own state. On the other hand, a 'stateful' component, often a class component, manages its own state
```
import React, { useState } from "react";

function User() {
  const [message, setMessage] = useState("Welcome to React world");

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
```
```
import React from 'react';
class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome to React world",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
```
**12.What is react hooks and what are the top react hooks?**
- React Hooks are introduced in version 16.
- React hooks are inbuilt functions that allows functional components to manage state and lifecycle events.
  
  **Types of Hooks**

  - useState
  - useEffect
  - useContext
  - useReducer
  - useCallback
  - useMemo
  - useRef
  - useLayoutEffect
    





# Npm vs Yarn different between

**1.What is NPM?**
- NPM known for Node Package Manager. NPM is the popular JavaScript package manager It is installed automatically whenever we install Node.js on our system. 
- It was created in 2009 by Isaac Schlueter. NPM uses a file called package.json to store the metadata of your project, such as name, version, dependencies, scripts, etc. It also creates a folder called node_modules where it stores the installed packages.
- so, you must have an internet connection to install packages. So, the versions of packages installed on different machines may vary.

**What is Yarn?**
- Yarn is package manager developed by Facebook in 2016. It is another package manager for the JavaScript developer. Yarn provides speed, consistency, stability, and security as an alternative to NPM.
- It also uses the same package.json file as NPM, but it adds another file called yarn.lock
- Yarn uses a lockfile to ensure that all packages are installed in the same versions across different machines, and it also uses checksums to verify the integrity of packages. It also has an offline mode, which allows you to install packages without an internet connection.

**What is Pnpm?**
- PNPM stands for Performant Node Package Manager. It is another alternative package manager it was created in 2016 by Zoltan Kochan. It was designed to be faster, lighter, and more secure than both NPM and YARN.
- It also uses the same package.json file as NPM and YARN, but it adds another file called pnpm-lock.yaml



