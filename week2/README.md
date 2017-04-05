# Week 2 - JavaScript in the browser

## DOM API

The best resource for DOM API documentation is the [MDN 
website](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model). If you want to remind yourself how to 
use a particular method, googling `"method name" +MDN` is usually a good strategy.

### Element getters

Element getters live on the global `document` object, that provides an interface to the
DOM tree.

- `document.getElementById(id)`: Returns a reference to the element by its ID
- `document.getElementsByTagName(tagName)`: Returns an array-like structure containing elements of the passed tag name
- `document.getElementsByClassName(className)`: Returns an array-like structure containing elements that match the
passed class name 

### Selection

You can use a CSS-like syntax to access elements. Examples of CSS selectors:

- `li`: matches `li` elements
- `#my-id`: matches elements with the ID `my-id`
- `.my-class`: matches elements with the class `my-class`
- `.my-class .my-subclass`: matches elements with the class `my-subclass` that have an ancestor with the class 
`my-class`

- `document.querySelector(selector)`: Returns the first element that matches the passed selector
- `element.querySelectorAll(selector)`: Returns an array-like structure containing elements that match the passed 
selector. This method lives on an element not the document, so it returns elements that are children of this element.

## Exercises

- Open `index.html` from the directory in your favourite browser
- Open the developer tools and navigate to the Console tab
- In the console, write JavaScript that performs the following...

1) Get an element with an ID of "element-getters"
2) Get a list of elements with tag of "li"
3) Get a list of elements that have the class of "heading"
4) Get a list of elements that have the class "item" and are children of an element with an ID of "selection"
