'use strict';

// Make element function
const e = React.createElement;

// EDIT ME TO CHANGE INFORMATION
const user = {
  name: 'Gabriel Mancino-Ball',
  title: 'Mathematics. Development. Design.',
  image: 'images/headshot.png',
  logo: 'images/uplogo.png',
  headerLinks: ['https://github.com/gmancino',
    'https://www.linkedin.com/in/gabriel-mancino-ball/',
    'mailto:mancig@rpi.edu?Subject=Inquiry'
  ]
};

// Make HEADER
const header = e(
  'div',
  null,
  e('h1', {style: {display: "inline"}}, user.name),
  e('ul', null,
    e('li', null,
      e('a', {href: user.headerLinks[0]},
        e('i', {className: "fab fa-github"}))
    ),
    e('li', null,
      e('a', {href: user.headerLinks[1]},
        e('i', {className: "fab fa-linkedin-in"}))
    ),
    e('li', null,
      e('a', {href: user.headerLinks[2], target: '_top'},
        e('i', {className: "fas fa-envelope-open-text"})
      )
    ),
  e('h3', null, user.title,
  e('img', {src: user.image}))
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
  e('img', {src: user.logo, alt: "Logo", align: "top", width: "1.5%"}),
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
