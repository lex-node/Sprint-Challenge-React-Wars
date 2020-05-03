# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a javascript library that minimizes updating the DOM by placing a 'virtual DOM' between the DOM and your code and only updating the DOM to the extent necessary.

It enables a style of website development that leans into reusable 'components' which maintain their own 'state'; 
 
1. Describe component state.

State is the data held in the app or a component of the app at a given time. It is the information available to determine the app's behavior at a given time.

1. Describe props.

Props are "properties" that live in an object. React is set up to easily pass certain props (from state) to a component when it is called. This enables dynamic rendering..

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects occur when different parts of the React lifecycle (component mounting, unmounting, etc.) are completed. For example, one might call an API upon mounting to set the initial state. 
