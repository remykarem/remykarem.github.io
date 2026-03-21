# Browser

The browser is an HTTP client.

~~~admonish note title="Assets"
(eg. documents, CSS, JavaScript)
~~~

~~~admonish note title="Frame"
???
~~~

~~~admonish note title="MIME-sniffing"
MIME-sniffing happens (for some web browsers) to determine the content of an asset. Specific to IE and Chrome. With clever naming, a resource can be determined to be an HTML document which has malicious script.
~~~

## DOM API

Document Object Model

![https://gabrieltanner.org/blog/javascript-dom-introduction](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7d722410-6eb6-4685-98d9-99425c509bc2/Untitled.png)

https://gabrieltanner.org/blog/javascript-dom-introduction

```jsx
document.getElementById("header-title");
document.getElementsByClassName("list-items");
document.getElementsByTagName("li");

document.querySelector("#header-title");
document.querySelector(".list-items");
document.querySelector("li");
```

```jsx
document.createElement("div");
var newContent = document.createTextNode("Hello World!"); 
div.appendChild(newContent);
document.body.insertBefore(div, currentDiv);
```

**`Element`**

(html attributes)

- `innerHtml`
- `innerText`
- `src`
- `style`
- `tagName` (in caps)

(accessing nodes)

- `parentNode`
- `childNodes`
- `firstChild`
- `lastChild`
- `nextSibling`

(add nodes)

- `insertBefore`

(remove)

- `remove` (this)
- `removeChild`

(event listeners)

- `addEventListener`

    ```jsx
    htmlElement.addEventListener('click', () => { console.log('sdfv) })
    ```

  events:

  - click
  - dblclick
- `removeEventListener`

## IndexedDB

## Web Speech API

https://www.google.com/intl/en/chrome/demos/speech.html
