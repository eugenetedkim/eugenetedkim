---
title: 'First dive into JavaScript closures'
date: '2023-11-08'
---

A JavaScript **closure** is formed when you define a function within a function. The inner function "closes over", "captures", or "remembers" the variables of the outer function even though it finished executing.

Here's an example:
```
function parent() {
	const lastName = "Kim";
  function child() {
  	console.log(`Hi, I have the same last name as my dad. It's ${lastName}!`);
  }
  child();
}
parent();
```
Output:
```
Hi, I have the same last name as my dad. It's Kim!
```

Apparently, there's many usecases for closures which we'll get into next.

Some use cases for closures to explore on our next dive into JavaScript closures can include:

- Data Encapsulation and Privacy
- Function Factories
- Callback Functions
- Event Handlers
- Memoization
- Partial Application and Currying
- Module Pattern
- Timeouts and Intervals
- Asynchronous Programming
- Emulating Private Methods
- Managing State in Iterators
- Event Handling in React or UI Frameworks
- Creating Memoized Functions
- Handling Asynchronous Flows with Promises
- Singleton Pattern
- Dynamic Function Generation
- Custom Callback and Filters
- Debouncing and Throttling

See you next time!