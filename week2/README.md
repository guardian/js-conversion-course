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

You can use a CSS-like syntax to access elements

- `document.querySelector(selector)`: Returns the first element that matches the passed selector
- `element.querySelectorAll(selector)`: Returns an array-like structure containing elements that match the passed 
selector. This method lives on an element not the document, so it returns elements that are children of this element.