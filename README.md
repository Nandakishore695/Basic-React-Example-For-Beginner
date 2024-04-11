# React Interview Questions and Answer❄️

**Tools**
- React Developer Tools - Chrome
- Thunder Client - VSCode
- Auto Rename - VSCode
- ES7 React - VSCode
- Eslint Code Quality checker - VSCode
- Path Intellisense - VSCode  
- TSLint - VSCode

**Current Version of React - 18.2.0**
- Automatic Batching
- Transitions
- Suspense on the server
- Concurrent react

**Current Version of React-Router-Dom - 6.22.3**

**What is React Js?** 
- React is an open-source front-end JavaScript library used for building single-page applications. 
- React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's

**Why do we use React JS?**
- One of the main benefits of using React JS is its potential to reuse components. It saves time for developers as they don't have to write various codes for the same features. 

**What Type of Export modules?**
- There are two types
  - Name Export
  - Default Export
```
// File: module1.js
const a = 'Nandakishore';
const b = 'Priya';
const c = 'Suppriya'

export default a; //Default Export
export {b,c} // Named Export

// File: module2.js
import dx, {b, c} from './modules/module1'
console.log(dx, b, c)
```
**What are the major features of React?**

The major features of React are:
- Jxs that allows developers to write HTML code in React
- It uses Virtual DOM instead of Real DOM
- Reusable UI components
- Unidirectional Data Flow
- Server-Side Rendering
- React Hooks
  
**What is the JSX in React?**
- JSX stands for JavaScript XML. It allows us to write directly HTML and CSS code in React (within JavaScript XML).
  Advantages:
  - Component-Based
  - Readability and Maintainability

**What are props?**
- Props stand for "Properties" They provide a way to pass data from a parent component to its child components. Props are read-only, meaning that the child components receiving props cannot modify them directly.

**What is prop drilling in react?**
- Prop drilling is the process of passing prop down through multiple layers of components.
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

**How to avoid prop drilling?**
- Prop drilling can make code harder to maintain to avoid prop drilling. We can use useContext hook or redux library

**What is a component?**
-	A component is an independent, reusable bit of code that divides the UI into smaller pieces.	
-	**There are three possible ways to create a component.**
  
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
iii.**Arrow function** is introduce in ES6

```
const loginSave = (x, y) => x + y;
```

**What is the arrow function expression in JSX?**
- An arrow function expression is a compact alternative to a traditional function expression.

**What is a fragment in JSX?**
- In react a fragment is a way to group multiple children's elements. Using a fragment to prevents the addition of unnecessary nodes in the dom like div tags.

**Different between React and Angular?**
- React and Angular both are used to create single-page UI applications.
  
| React  | Angular |
| ------------- | ------------- |
| React is a library| Angular is a framework |
| React users a virtual Dom which makes it faster| Angular users a real dom |
| React is a smaller and lightweight library | Angular is bigger because it is a complete framework |
| React depends on external libraries for many complex features, so the developer has to write many lines of code for complex functionalities| Angular provides built-in features like routing, forms, validation, and HTTP requests |
| React is simple to learn and more popular than angular| Angular is slightly difficult to learn it has Typescript, OOPS concept, and many more things |

**Different between Dom and Virtual Dom?**

| DOM  | Virtual DOM |
| ------------- | ------------- |
| Dom is actual representation of the webpage  | Virtual Dom is lightweight copy of the dom |
| Entire page Re-renders when click occur  | Re-renders only the changes parts efficiently |
| Suitable for static websites and simple applications  | Optimized for faster rendering |

**Difference between state and props?**
- State refers to the internal data of a component that can change over time, while props are used to pass data between components.

**What is Reconciliation?**
- The algorithm react is used to diff one tree with another to determine which parts need to be changed.

**What is a state in react?**
- State refers to the internal data of a component that can change over time.

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
**What is Stateful and Stateless component in react?**
- A 'stateful' component, known as a class component, manages its state.
- A 'stateless' component, known as a functional component, doesn't manage its state.

**What are react hooks?**
- React Hooks are introduced in the 16-version.
- React hooks are inbuilt functions that allow functional components to manage state and lifecycle events.
  
  **Types of Hooks**

  - useState
  - useEffect
  - useContext
  - useReducer
  - useCallback
  - useMemo
  - useRef
  - useLayoutEffect
  - useImperativeHandle
  - useDebugValue
  - useId
    
**What is useState hook?**
- useState hook is a function that accepts the initial state value as a parameter and returns in an array with two elements. The first element is the current state value and the second element is used to update the state.
- useState will re-render when the content changes and update the UI.
```
const [state, setState] = useState(initialValue);
```
**What is useEffect hook?**
- useEffect hook is used to perform side effects.
- For example, data fetching from API or Dom manipulation.
- useEffect function will accept two parameters (effect function, dependency array)
```
import React, { useEffect } from 'react';
function GrandChildComponent({message}) {
    useEffect(() => {
    };
  }, []);
    return <>
      <div>
        <h1>{message}</h1>
      </div>
    </>
}
```

**What is useContext hook?**
- useContext hook provides a way to pass data between nested components without having to pass props down manually at every level.

**What is the useReducer hook and how is it used?**
- useReducer hook is used for managing complex state logic. It is an alternative to the useState hook
-  It accepts a reducer function and an initial state and returns the current state and a dispatch function to update the state. The reducer function takes the current state and an action object as arguments and returns a new state.

**What is useRef in react hook?**
- It's commonly used for direct manipulation of the DOM, like focusing on input elements.
- useRef doesn't re-render when its content changes.
```
import React, { useRef, useEffect } from 'react';

const MyComponent = () => {
  // Creating a ref
  const myRef = useRef();

  useEffect(() => {
    myRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={myRef} type="text" />
    </div>
  );
};
export default MyComponent;
```

**What is useCallback hook in react?**
- useCallback is a hook that will return a memorized callback function that only changes if one of the dependencies has changed.
```
import React, {useState, useCallback} from 'react';
function App() {
const [age, setAge] = useState(0);
const [count, setCount] = useState(0);
const incrementSalary = useCallback( () => {
       
    },[count])
  return (
    <div className="App">
      <ParentComponent learning={incrementSalary} count={count} />
      <h2> useCallBack hook</h2>
      {age}
      <button onClick = {()=>setAge(age + 1)>Click count </button>
      {count}
      <button onClick = {()=>setCount(count + 1)>Click count </button>
    </div>
  );
}
export default App;

import React, {useState, useMemo} from 'react';
function ParentComponent({learning,count}) {
  console.log("Hello callback")
  return (
    <div className="App">
    
    </div>
  );
}
export default memo(ParentComponent);

```
**What is the useMemo hook?**
 
**What is HOC in react?**
- A higher-order component is an advanced technique in React for reusing component logic it takes a component as an input and returns a new component.

**What are the life cycle methods in react?**
- **i. class components have lifecycle methods that are invoked at different stages of a component:**
  - componentDidMount() Invoked after the component is render to the DOM.
  - componentDidUpdate(): Invoked after the component is re-rendered.
  - componentWillUnmount(): Invoked immediately before a component is unmounted and destroyed.

- **ii. Functional Component with Hooks:**
  - useEffect(() => {}, [])
  - useEffect(() => {})
  - useEffect(() => { return () => {} }, [])

**What does mean super keyword in React?**
- The super keyword is used to call the constructor of its parent class to access the parent's properties and methods in the child class(inheritance concept).


**What is React Fiber?**

**Current Version of Redux - 5.0.1**

**What is Redux?**
- Redux is a JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.

# Npm vs Yarn different between

**What is NPM?**
- NPM is known for Node Package Manager. NPM is the popular JavaScript package manager It is installed automatically whenever we install Node.js on our system. 
- It was created in 2009 by Isaac Schlueter. NPM uses a file called package.json to store the metadata of your project, such as name, version, dependencies, scripts, etc. It also creates a folder called node_modules where it stores the installed packages.
- so, you must have an internet connection to install packages. So, the versions of packages installed on different machines may vary.

**What is Yarn?**
- Yarn is a package manager developed by Facebook in 2016. It is another package manager for the JavaScript developer. Yarn provides speed, consistency, stability, and security as an alternative to NPM.
- It also uses the same package.json file as NPM, but it adds another file called yarn. lock
- Yarn uses a lockfile to ensure that all packages are installed in the same versions across different machines, and it also uses checksums to verify the integrity of packages. It also has an offline mode, which allows you to install packages without an internet connection.

**What is Pnpm?**
- PNPM stands for Performant Node Package Manager. It is another alternative package manager that was created in 2016 by Zoltan Kochan. It was designed to be faster, lighter, and more secure than both NPM and YARN.
- It also uses the same package.json file as NPM and YARN, but it adds another file called pnpm-lock. yaml



