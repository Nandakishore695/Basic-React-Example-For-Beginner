# React Interview Questions and Answer❄️

**Tools**
- React Developer Tools - Chrome
- Thunder Client - VSCode
- Auto Rename - VSCode
- ES7 React - VSCode
- Eslint Code Quality checker - VSCode
- Path Intellisense - VSCode  
- TSLint - VSCode
**1.Why we use react js?**
-One of the main benefits of using React JS is its potential to reuse components. It saves time for developers as they don't have to write various codes for the same features.

**2.What is React.Js?** 
- React is an open-source front-end JavaScript library used for building single-page applications. 
- React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's 

**3.What Type of Export modules?**
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
**4.What are the major features of React?**

The major features of React are:
- Jxs that allows developers to write HTML code in React
- It uses Virtual DOM instead of Real DOM manipulations
- Reusable UI components
- useful for Seo
  
**5.What is the JSX in React?**
- JSX stands for JavaScript XML. It allows us to write directly HTML and css code in React (within JavaScript xml).
  Advantages:
  - Component-Based
  - Readability and Maintainability

**6.What is props?**
- Props stand for "Properties" They provide a way to pass data from a parent component to its child components. Props are read-only, mean that the child components receiving props cannot modify them directly.

**7.What is prop drilling in react?**
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

**8.How to avoid prop drilling?**
- Prop drilling can make code harder and to maintain to avoid prop drilling. We can use using context api or redux

**9.What is component?**
-	A component is an independent, reusable bit of code which divides the UI into smaller pieces.	
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

**10.What is arrow funcion expression in jsx?**
- An arrow function expression is a compact alternative to a traditional function expression.

**11.What is fragment in jsx?**
- In react a frament is a way to group multiple children's elements. Using a fragment to prevents the addition of unnecessary nodes in the dom like div tags.

**12.Different between React and Angular?**
- React and Angular both are used to create single page ui application.
  
| React  | Angular |
| ------------- | ------------- |
| React is a library| Angular is a framework |
| React users a virtual Dom which makes it faster| Angular users a real dom |
| React is smaller and lightweight library | Angular is bigger because it is a complete framework |
| React depends on external libraries for many complex features, so developer has to write many lines of code for complex functionalities| Angular provide built-in features like routing, forms, validation, and HTTP requests |
| React is simple to learn and more popular than angular| Angular is slightly difficult to learn it has Typescript, OOPS concept and many more thing |

**13.Different between Dom and Virtual Dom?**

| DOM  | Virtual DOM |
| ------------- | ------------- |
| Dom is actual representation of the webpage  | Virtual Dom is lightweight copy of the dom |
| Entire page Re-renders when click occur  | Re-renders only the changes parts efficiently |
| Suitable for static websites and simple applications  | Optimized for faster rendering |

**14.What is state in react?**
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
**15.What is react hooks and what are the top react hooks?**
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
  - useImperativeHandle
  - useDebugValue
  - useId
    
**16.What is useState() and how its works?**
- useState hook enables for function component to manage state
- useState function accept the initial state value as a parameter and returns in an array with two elements. The first element is the current state value and second element is the function that is used to update the state.
- useState will re-render when the content change and update the ui.
```
const [state, setState] = useState(initialValue);
```
**17.What is useEffect and how its works?**
- useEffect hook is used to perform side effects in function component.
- For example, data fetching from api or any other operation that needs to be performed after the component has been rendered.
- useEffect function will accept two parameter(effect function,dependency array)
```
import React, { useEffect } from 'react';
function GrandChildComponent({message}) { 
    return <>
      <div>
        <h1>{message}</h1>
      </div>
    </>
}
```

**18.What is useContext hook and how it's works?**
- useContext hook is a way to pass data between nested components without passing them as "props". no matter how deeply nested component

**19.What is the useReducer() hook and how is it used?**
- useReducer() hook is used for managing complex state logic.It is an alternative to the useState() hook
-  It accepts a reducer function and an initial state, and returns the current state and a dispatch function to update the state. The reducer function takes the current state and an action object as arguments and returns a new state.

**20.What is useRef in react hook?**
- It's commonly used for direct manipulation of the DOM, like focusing on input elements.
- useRef doesn't re-render when its content changes.
```
import React, { useRef, useEffect } from 'react';

const MyComponent = () => {
  // Creating a ref
  const myRef = useRef();

  useEffect(() => {
    // Using the ref to manipulate the DOM directly
    // For example, focusing on an input element
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

**21.What is useCallback hook in react?**
- useCallback is a hook that will return a memoized the callback function that only changes if one of the dependencies has changed.
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
**22.What is useMemo hook in react?**
- 
**23.What is HOC in react?**
- A higher-order component is an advanced technique in React for reusing component logic it takes a component as a input and returns a new component.

**24.What are life cycle method in react?**
- **i. class components have lifecycle methods that are invoked at different stages of a component:**
  - componentDidMount() Invoked after the component is render to the DOM.
  - componentDidUpdate(): Invoked after the component is re-rendered.
  - componentWillUnmount(): Invoked immediately before a component is unmounted and destroyed.

- **ii. Functional Component with Hooks:**
  - useEffect(() => {}, [])
  - useEffect(() => {})
  - useEffect(() => { return () => {} }, [])

**25.What does mean super keyword in React?**
- Super keyword is used to call the constructor of its parent class to access the parent's properties and methods in child class(inheritance concept).

**26.What is Redux in React?**
- Redux is JavaScript library for managing and centralizing application the state. It is most commonly used with libraries such as React or Angular for building user interfaces.


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



