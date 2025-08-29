Question Answer:

1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById searches by only unique id, getElementsByClassName gives the elements with the same class name and return arraylike object, querySelector searches using css selector and returns first matching element, querySelectorAll also searches using css selector and returns all the matching elements as a nodelist.



2.How do you create and insert a new element into the DOM?

Ans: I will create the element using document.createElement("tagName"). Then I will set element as innerHTML or innerText. Then I will insert the element into DOM using appendChild(). 


3.What is Event Bubbling and how does it work?

Ans: When an event triggered on a child element it propagates upward through its parent elements, it is called Event Bubbling. When an event occurs on an element, it first executes the event listener on that element, and then it moves up to the parent, then the parent’s parent, and thus to the root of the document.


4.What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation in JavaScript is a technique of attaching a single event listener to a common parent element without attaching event listeners to multiple child elements individually. Event Delegation is useful because it reduces memory usage by minimizing the number of event listeners, and it also handle events for newly added elements by the parent elements.



5.What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() method prevents the browser’s default action for a particular event and stopPropagation() method stops the event from bubbling in the DOM.