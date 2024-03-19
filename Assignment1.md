<!-- # Shudhanshu
## Arya
### 3
-
> blilck

```js
const val = 2;
```

- points

`const val`

as;lkfjalfjk

<em>shubham</em>
<i>singh</i> -->

# ASSIGNMENT-1

<h3> Question1 - What is Emmet?</h3>

   <h3> Answer- </h3>Emmet allows developers to type abbreviations and then expand them into complete HTML or CSS code snippets. In the context of React, Emmet can be particularly useful for writing JSX, which is a syntax extension for JavaScript often used in React applications to describe the structure of user interfaces.

<h3> Question2 - Difference between "LIBRARY" and "FRAMEWORK" ? </h3>

<h3> Answer- Library :- </h3>

- A library is a collection of reusable code modules or functions that can be directly called by an application to perform specific tasks.
- Libraries typically consist of a set of functions, classes, or routines organized in a way that developers can use them to extend the functionality of their own applications.

<h3> Framework :- </h3>

- A framework is a pre-built architecture or platform that provides a foundation for developing software applications.
- Frameworks typically include libraries, along with conventions, patterns, and guidelines for how to use them to build applications.

<h3> Question3 - What is CDN? Why do we use it. </h3>

<h3> Answer- </h3> A CDN, or Content Delivery Network, is a network of servers distributed geographically around the world. Its purpose is to deliver web content (such as images, videos, CSS files, JavaScript files, and other static assets) to users more efficiently and reliably.

Reasons why CDN's are used:-

- Improved Performance: CDNs cache content on servers located closer to the user's geographical location. When a user requests content, the CDN serves it from the nearest server, reducing latency and improving load times. This results in faster page load times and a better user experience.
- Global Reach: CDNs have a distributed network of servers located in multiple regions and countries around the world. This enables websites and applications to deliver content quickly to users regardless of their geographic location
- Scalability: CDNs can handle large amounts of traffic and distribute it across multiple servers. This helps websites and applications maintain performance during periods of high traffic or sudden traffic spikes.

<h3> Question4 - Why is react known as a react ?</h3>
<h3> Answer - </h3>

- React, the JavaScript library for building user interfaces, is named as such because of its core concept: reacting to changes in data. The fundamental principle behind React is the idea of building UI components that react to changes in application state or data, updating the user interface dynamically without the need for manual DOM manipulation.
- When data changes, React calculates the difference between the virtual DOM and the real DOM and applies only the necessary updates to the actual DOM, minimizing performance overhead.

<h3>Question5 - What is crossorigin in script tag?</h3>
<h3> Answer -</h3>

- The crossorigin attribute is used in the <script> tag to specify how the browser should handle loading of the script when it is fetched from a different domain (origin). It is primarily used for security purposes to prevent Cross-Origin Resource Sharing (CORS) issues.
- When you include a <script> tag to load a JavaScript file from a different origin (i.e., a domain, protocol, or port different from the current page), the browser may enforce CORS policies, which can restrict access to the fetched resource based on the origin of the requesting document.

<h3>Question6 - What is diference between React and ReactDOM</h3>
<h3> Answer -</h3>

- React is a JavaScript library for building user interfaces. It provides a declarative and component-based approach to building UIs, allowing developers to create reusable UI components and manage the state of those components efficiently.
  React focuses on the core functionality of defining components, handling state and props, and rendering the UI based on changes to the application state.

- ReactDOM is a package that provides DOM-specific methods that are used to interact with the Document Object Model (DOM) in the context of React applications.
  ReactDOM is responsible for rendering React components to the DOM, updating them when the application state changes, and handling events and user interactions.

<h3>Question7 -  What is async and defer?</h3>
<h3>Answer -</h3>
- Async:
Downloads script asynchronously.
Executes as soon as it's available.
May execute out of order.
Defer:
Downloads script asynchronously.
Executes in order after document parsing.
In summary, async is used when you want the script to load and execute as soon as possible, even if it means potentially out-of-order execution. defer is used when you want the script to wait until the HTML document has been fully parsed before executing, while still ensuring deterministic execution order. Both attributes can be useful depending on the specific requirements of your web application.
