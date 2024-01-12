# React Interview Questions and Answer❄️ 
**1.What is React Js?**
- React is an open-source front-end JavaScript library used for building single-page applications and reusable component.
- React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's 

**2.What is the JSX in React?**
- JSX stands for JavaScript XML. It allows us to write directly HTML code in React (within JavaScript xml).

**3.What is props?**
- Props stand for "Properties" They provide a way to pass data from a parent component to its child components. Props are read-only, mean that the child components receiving props cannot modify them directly.

**4.What is component?**
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
**5.Different between Dom and Virtual Dom?**

| DOM  | Virtual DOM |
| ------------- | ------------- |
| Dom is actual respresentation of the webpage  | Virtual Dom is lightweight copy of the dom |
| Re-renders the entire page when updates occur  | Re-renders only the changes parts efficiently |
| Can be slower, especially with frequent updates  | Optimized for faster rendering |
| Suitable for static websites and simple applications | Ideal for dynamic and complex single-page applications with frequent updates |

**6.What is arrow funcion expression in jsx?**
- An arrow function expression is a compact alternative to a traditional function expression

**7.What is fragment in jsx?**
- In react a frament is a way to group multiple children's elements. Using a fragment prevents the addition of unnecessary nodes to the dom.

**8.Different between React and Angular?**
- React and Angular both are used to create single page ui application.
  
| React  | Angular |
| ------------- | ------------- |
| React is a library| Angular is a framework |
| React users a virtual Dom which makes it faster| Angular users a real dom |
| React is smaller and lightweight library | Angular is bigger because it is a complete framework |
| React depends on external libraries for many complex features, so developer has to write many lines of code for complex functionalities| Angular provide built-in support for features like routing, forms, validation, and HTTP requests |
| React is simple to learn and more popular than angular| Angular is slightly difficult to learn it has Typescript, OOPS concept and many more thing |

**9.What is state, stateless, stateful and state managament terms?**
- State refers to the current data of the component.
- Stateful or state managment means, when a user perfroms some actions on the UI, then the react application should be able to update and re-render that data ot state on the ui.

**10.Different between Transpiler and Compiler?**
- A transpiler is a tool that converts source code from one high-level programming language(jsx) to angother high-level programming language(Javaascript)
- A compiler is a tool that converts high-level programming language(java) into a lower-level language(machine code or bytecode)

**What is props drilling in react?**
- Prop drilling is the process of passing down props through multiple layers of components.


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



