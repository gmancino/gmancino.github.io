'use strict';

// Make element function
const e = React.createElement;

// EDIT ME TO CHANGE INFORMATION
const yourInfo = {
  first: 'Gabriel',
  last: 'Mancino-Ball',
  title: 'Mathematics. Development. Design.'
};

// Function for returning your information in the appropriate spot
function info(command, user) {
  if (command == 'name') {
    return user.first + ' ' + user.last;
  }
  else if (command == 'title') {
    return user.title
  }
  return 'This will be your name and title.'
}

// Make HEADER
const header = e(
  'div',
  null,
  e('h1', {style: {display: "inline"}}, info('name', yourInfo)),
  e('ul', null,
    e('li', null,
      e('a', {href: 'https://github.com/gmancino'},
        e('i', {className: "fab fa-github"}))
    ),
    e('li', null,
      e('a', {href: 'https://www.linkedin.com/in/gabriel-mancino-ball/'},
        e('i', {className: "fab fa-linkedin-in"}))
    ),
    e('li', null,
      e('a', {href: 'mailto:mancig@rpi.edu?Subject=Inquiry', target: '_top'},
        e('i', {className: "fas fa-envelope-open-text"})
      )
    ),
  e('h3', null, info('title', yourInfo),
  e('img', {src: "images/headshot.png"}))
  )
);

ReactDOM.render(
  header,
  document.getElementById('header')
);

// Make FOOTER
const footer = e(
  'footer',
  null,
  'Updated on 08-12-2019  ',
  e('img', {src: "images/uplogo.png", alt: "Logo", align: "top", width: "1.5%"}),
  '  Hosted on GitHub',
  e('br', null),
  'This website uses the following resources',
  e('ul', null,
    e('li', null,
      e('a', {href: "https://fontawesome.com/?from=io"},
        e('i', {className: "fab fa-font-awesome"}))
    ),
    e('li', null,
      e('a', {href: "https://reactjs.org"}, e('i', {className: "fab fa-react"}))
    ),
    e('li', null,
      e('a', {href: "https://github.com"}, e('i', {className: "fab fa-github"}))
    ),
    e('li', null,
      e('a', {href: "https://digitalsynopsis.com/design/minimal-web-color-palettes-combination-hex-code/"},
       e('i', {className: "fas fa-palette"}))
    )
  )
);

ReactDOM.render(
  footer,
  document.getElementById('footer')
);
