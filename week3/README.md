# Week 3 - JavaScript in the browser

## Setup

To help with the exercises in this course, please run the following:

```bash
$ npm install
$ npm start
```

Navigate to [`http://localhost:8080`](http://localhost:8080) in your favourite browser.

## DOM API

The best resource for DOM API documentation is the [MDN 
website](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model). If you want to remind yourself how to 
use a particular method, googling `"method name" +MDN` is usually a good strategy.

### Element getters

[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) getters live on the global `document` object, that 
provides an interface to the DOM tree.

- `document.getElementById(id)`: Returns a reference to the element by its ID
- `document.getElementsByTagName(tagName)`: Returns an array-like structure containing elements of the passed tag name
- `document.getElementsByClassName(className)`: Returns an array-like structure containing elements that match the
passed class name 

### Selection

You can use a CSS-like syntax to access elements. Examples of CSS selectors:

- `li`: matches `<li>` elements
- `#my-id`: matches elements with the ID `my-id`
- `.my-class`: matches elements with the class `my-class`
- `.my-class .my-subclass`: matches elements with the class `my-subclass` that have an ancestor with the class 
`my-class`

- `document.querySelectorAll(selector)`: Returns an array-like structure containing elements that match the passed 
selector
- `element.querySelectorAll(selector)`: Returns an array-like structure containing elements that match the passed 
selector. This method lives on an element not the document, so it returns elements that are children of this element.

### Exercise 1

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
- `element.setAttribute(attributeName, value)`: update an attribute on an element. Note you can retrieve the value of an
attribute on an element using `element.getAttribute(attributeName)`.
- `document.createElement("div")`: create a div element. This is not automatically appended to the DOM.
- `element.appendChild(childElement)`: append a child element to this element
- `element.value = "hello"`: set the value of an input field such as a text field
- `element.checked = true`: update the state of a checkable element (i.e. a checkbox or radio button)
- `element.selected = true`: set the `selected` attribute of an `<option>` element to `true`, to make it appear as the
currently selected option in its parent `<select>` element.

You can find the documentation for a bunch more [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) 
methods (and the [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface which Element implements) on 
the MDN website.

### Exercise 2

Open `index.js`. Add code that performs the following:

1) Create an `<li>` element with the class `item`. Set the inner HTML to be "My new element". Append it as a child of the 
list with the ID `modifiers`.
2) Select elements with the class `item`. They should be children of the element with the ID `modifier`. Loop through
the elements, setting their `backgroundColor` to `hotpink`
3) Create an `input` element with a `type` attribute of `checkbox`. Insert it before the text of the final element in 
the `modifiers` list. Set the state of the element to `checked`.
4) Select the `<option>` with the value `javascript` in the `<select>` element with the ID `language`

### `classList`

The [`classList` API](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) makes updating classes on DOM
elements much easier. You can `add`, `remove` or `toggle` classes on an element by calling methods of the same name.
You can also check whether the `classList` on an element `contains` a particular class.

### Exercise 3

Open `index.js`. Add code that modifies child elements of the element with the ID "classlist":

1) Add the class "classlist-item" to each child
2) Remove the "classlist-item" class from the first element with the "item" class
3) Toggle the "classlist-item" on each child
4) Loop through the elements under the element with the ID "classlist". For each element that has the "classlist-item" 
class, set the `fontWeight` of the element to `bold`

### Fetch

The [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) allows us to make AJAX calls to 
fetch resources natively in JavaScript. It is a relatively new addition to JavaScript so it is [not yet supported by all 
browsers](http://caniuse.com/#search=fetch).

```js
var options = {
    method: 'GET',

};

fetch('some.json', options)
    .then(resp => {
        return resp.json();
    })
    .then(body => {
        console.log(body);
    });
```

### Exercise 4

Open `index.js`. Add code that performs the following:

1) Fetch data from `data.json`. Populate the vaue of the text field with the ID "year" with the contents of the `year` 
property in the fetched JSON.
2) Also add an `<option>` element to the `<select>` element with the ID "country" for each entry in the `countries` 
property of the same fetched JSON.
