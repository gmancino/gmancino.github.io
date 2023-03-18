# I updated my website!
---

**Go visit it:** [https://gmancino.dev](https://gmancino.dev)

Here is my old site: [https://gmancino.dev/old-website/index.html](https://gmancino.dev/old-website/index.html), in case you want to see the changes!

## What's new

I made the switch from just using `CSS` and `HTML` to incorporating `Javascript` with **React**. This allowed me to consolidate the html code (which I think is ugly) and focus more on creating things with React (which is also still ugly, but not as bad in my opinion).

### Necessary HTML imports

We have to have the following lines in the `<body>` section of the \'index.html\' file:

```
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
```

Following these lines, you can import custom `.js` files using something like:

```
<script src="PATH_TO_YOUR_JAVASCRIPT"></script>
```

### Some technical notes on React

(This is mostly for my benefit)

React works by doing all of the processing on the _users'_ computer; this eliminates the need to do backend communication with normal Javascript. That being said, here are some important functions/concepts that I found confusing and wanted to make clear (at least for myself)

##### Summary

Here is a summary example of how React, HTML, and CSS work together

```
## React
# Create something
const header = React.createElement('h1', null, 'Here is a header');
# Render that something
ReactDOM.render (header, document.getElementById('whatever_div_id_is_used_in_html'));

## HTML
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  </body>
    <div id="whatever_div_id_is_used_in_html"></div>
  </body>
</html>

## CSS
:root {
  --my-color: #000000;
}
h1 {
  display: inline:;
  color: var(--my-color);
}
```

**Note:** Since I _refuse_ to use JSX (basically more HTML syntax); I stuck with built in React syntax. This has ups and downs, but I'll summarize below the \"important\" things to take away


##### Creating things

The general syntax for creating things is given below (with its HTML equivalent)

```
React.createElement('HTML_NAME_OF_ELEMENT', {ELEMENT_PROPERTIES}, 'WHAT_IS_DISPLAYED');

<HTML_NAME_OF_ELEMENT properties="ELEMENT_PROPERTIES">
    WHAT_IS_DISPLAYED
</HTML_NAME_OF_ELEMENT>
```

An example that makes this more clear would be creating some simple paragraph text

```
# React
React.createElement('p', {style: {display: "inline"}}, 'Here is some text');

# Same concept but using HTML and CSS

# HTML
<p>
  Here is some text
</p>

# CSS
p {
  display: inline;
}
```

This really allows us to free up space since we turned 6 lines of code into one!

**Caveat:** I do actually like CSS, so almost all of the formatting is done in CSS by adding tags to different `<div>` environments that refer to styles within `layout.css`

**In general:** I used `const e = React.createElement;` to make a function that can be called in one character (the `const` just refers to making a constant; think variable-esque)

##### Using functions

We can use normal Javascript functions to pass values to different to different things; here is an example

```
function funcName(params) {
  if (params == something) {
    return ('Maybe we return a string');
  }
  // Maybe we want to make a component to be rendered later
  return React.createElement('p', null, 'Or maybe we return a React element');
};
```

This aided in making certain things reproducible (i.e. resume entries, or project descriptions, etc.)

##### Rendering what you create

This one is pretty straight forward; just include this at the end of your `.js` files

```
# React
ReactDOM.render(ELEMENT_TO_BE_RENDERED, document.getElementById('html_link'));

# HTML
...
<body>
    <div id="html_link"></div>
</body>
...
```

##### Creating classes

This is the big one (not sure if I fully understand this concept yet, but here is at least a _functional_ summary of what I learned)

```
# React
// Class name MUST be capitalized

class ClassName extends React.Component {

  // Pass in parent properties to this class (i.e. parameters we want to change)

  constructor (props) {
    super(props);

    // Set initial state of something to be specified
    // Can set other states too!

    this.state = {someValue: yourValue};
  }

  // Make function to change that value (can have multiple functions)

  yourFunction () {
    this.setState({
      someValue: newValue
    });
  }

  // Render what ever it is you want rendered

  render () {

    // Return function spits out what is to be rendered

    return (

      // Good practice to surround things in their own div

      React.createElement('div', null,
        React.createElement('h1', null, this.props.param1)
      )

    )
  }
};

ReactDOM.render(
  React.createElement(ClassName, {param1: "Your first parameter"}),
  document.getElementById('html_link')
  );

# HTML
...
<body>
    <div id="html_link"></div>
</body>
...
```

Basically, the above class allows us to define class specific functions, render different things based on parameters, and interact with the user (that's my very non-technical understanding)

## Notes for changing things

#### Experience

Let's say you want to add a new work experience. In the `js/Main.js` file create the following code:

```
...

// Did you use any technology?
function yourTech() {
  return(
  e('div', {className: "tech"},
  e('ul', null,
    e('li', null, e('i', {className: "FONTAWESOME_CODE_1"})),
    e('li', null, e('i', {className: "FONTAWESOME_CODE_2"})),
    e('li', null, e('i', {className: "FONTAWESOME_CODE_3"}))
  ))
)};

// Add details here
function jobDetails() {
  return(
    e('div', null,
      yourTech(),
      e('ul', null,
        e('li', null, 'Here's something I did'),
        e('li', null, 'Another fun fact.'),
      ),
      e('br', null),
      e('h5', null, 'Any footnotes?')
    )
)};

// Add list with important job details
const job = {
  title: 'YOUR_TITLE',
  location: 'JOB_LOCATION',
  image: 'images/jobs/JOB_IMAGE',
  link: 'URL_LINK_TO_JOB'
  details: jobDetails()
}

...

// Add this to the ReactDOM.render() 'past' piece
...
job(job.title, job.location, job.image, job.link, job.details),
e('br', null),
...
```

And _boom_, you've added something else you've done. If you want to add \'tech\' you can change the CSS animation in the `layout.css` file as follows

```
...

/* Add hover animation for new icon */
#past .FONT_AWESOME_ICON {
  border: 3px solid var(--header-bg-color);
  border-radius: 50%;
  padding: 10px;
  transition: color, border;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}

#past .FONT_AWESOME_ICON:hover {
  color: <HEX_COLOR_CODE>;
  border: 3px solid <OTHER_HEX_COLOR_CODE>
}

...
```

#### Likes

If you want to add something to the likes section, look for the `imageList` constant in the `js/Main.js` file and append the following:

```
// Find 'imageList'
...

{
  name: 'NEW_LIKE',
  src: 'images/PATH_TO_IMAGES',
  text: 'CLEVER_CAPTION_RELATED_TO_PICTURE',
  tag: 'TAG_FOR_THIS_PICTURE'
}

...

// Find 'interestGrid' and append the image where you want it with the following command

interestElement(imageList, NEW_ENTRY_LOCATION)
```

Keep in mind, Javascript starts counting at 0. Currently there are 0-23 entries in the `imageList`
