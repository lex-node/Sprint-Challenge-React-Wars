- [X] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a javascript library that helps build interfaces by enabling dynamic state-setting with UI components made out of javascript and JSX. State is set via "hooks" (pairings of a setter function and data) at the app level 
(or parent component level) and passed down to components (or child components) via props (objects). 


- [X] What does it mean to _think_ in react?

React is an implicit philosophy of app-building that involves breaking the app's code into components that exist and update hierarchically. 

- [X] Describe state.

State is the data held in the app or a component of the app at a given time. It is the information available to determine the app's behavior at a given time. 

- [X] Describe props.

Props are "properties" that live in an object. React is set up to easily pass certain props (from state) to a component when it is called. This enables dynamic rendering..

- [X] What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is a collateral effect of executing a function--for example, data received back from an external API. 