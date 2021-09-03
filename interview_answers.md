# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

A functional Component is a stateless component and doesn't play with any lifecycle methods of React while a stateful Component is initialized in a constructor and can only be changed bt setState.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount method is called when a component is being removed from the DOM. componentWillUnmount is invoked immediately before a component is unmounted and destroyed. ComponentWillUpdate is invoked just before rendering when new props or state are being received. Use this as an opportunity to perform preparation before an update occurs.

3. Define stateful logic.

Stateful logic is logic that is built into a component. It can be a function that handles a click event or maybe a function that sets toggle state, or even a function that formats data before it gets displayed. Usually, this kind of logic deals with state in the component. 

4. What are the three step of creating a successful test? What is done in each phase?

Arrange: Recalling our definition of "arrange", this is basically the part where we set ourselves up for success.
Act: Something Happens (click event , scroll event, input etc.)
Assert: make a presumption of the new state of your app. tests will pass if the assumption is correct and fail if it wrong.  
