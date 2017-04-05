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

- `document.querySelectorAll(selector)`: Returns an array-like structure containing elements that match the passed 
selector
- `element.querySelectorAll(selector)`: Returns an array-like structure containing elements that match the passed 
selector. This method lives on an element not the document, so it returns elements that are children of this element.

### Exercise 1

- Open `index.html` from the directory in your favourite browser
- Open the developer tools and navigate to the Console tab
- In the console, write JavaScript that performs the following...

1) Get an element with an ID of "element-getters"
2) Get a list of elements with tag of "li"
3) Get a list of elements that have the class of "heading"
4) Get a list of elements that have the class "item" and are children of an element with an ID of "selection"

### "Array-like structures"?

What is the deal with these array-like structures that these methods return? Although you can access specific elements
in these lists using the `list[0]` syntax, they are not proper JavaScript arrays and therefore do not have methods like
`map` and `reduce`.

The [structure that is returned by `querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) is 
different to that [returned by `getElementsByTagName` and 
`getElementsByClassName`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection), and implements a `forEach` 
method.

### Modifying elements

- `element.innerHTML = "<h1>hello</h1>"`: overwrite the HTML content of an element
- `element.style.color = "#ff0000"`: update the style of an element
- `element.setAttribute(attributeName, value)`: update an attribute on an element

