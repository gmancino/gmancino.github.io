/*
* Define all custom functions used throughout
*/
const highlightColor = '#FF847C'

// Make alert block for highlighting text
function attention(args, color) {
  if (typeof args == 'string') {
    return e('h6', {style: {color: color}}, args);
  }
  return e('h6', {style: {color: color}}, 'CHANGE YOUR INPUT TYPE TO STRING!!');
};

// Make eggholder function
function eggholder(x, y) {
  // Turn object to float
  var x = x.valueOf();
  var y = y.valueOf();
  return(
    Math.round(-(y + 47) * Math.sin(Math.pow(Math.abs( (x / 2) + (y + 47)), 1 / 2)) - x * Math.sin(Math.pow(Math.abs(x - (y + 47)), 1 /2)))
  )
};

// Make function for turning output value into Hex
function numToColor(x) {
  if (x < 0) {
    var x = Math.pow(x, 2);
  }

  // Stolen from stack exchange
  var r = x / Math.pow(256, 2);
  var g = (x / 256) % 256;
  var b = x % 256;

  return 'rgb(' + r.toString() + ',' + g.toString() + ',' + b.toString() + ')';
};

// Make class for displaying Branin-Hoo
class Func extends React.Component {
  constructor(props) {
    super(props);

    this.state = { x: 0, y: 0 };
  }

  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }

  render() {
    const { x, y } = this.state;
    return (
      e(
        'div',
        {onClick: this._onMouseMove.bind(this), style: {border: "3px solid", padding: "5px"}},
        e('h4', null, 'Input values : (' + x.toString() + ', ' + y.toString() + ')'),
        e('h4', null, 'Objective value : ', attention(eggholder(x, y).toString(), numToColor(eggholder(x, y)) ))
      )
    )
  }
};

// Define main class for making toggle blocks
class Parent extends React.Component {
  constructor (props) {
    super(props);

    // Set initial state to hidden
    this.state = {isHidden: true};
  }

  // Make function to toggle between hidden and visible
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  render () {

    // Create different states
    var hidden = {display: this.state.isHidden ? "block" : "none"};

    var vis = {className: "test", display: this.state.isHidden ? "none" : "block"};

    // Return button with options
    return (
      e('div', null,
      e('button', {onClick: this.toggleHidden.bind(this)}, this.props.title),
      e('br', null),
      e('h4', {style: hidden}),
      e('br', null),
      e('h4', {style: vis}, e('br', null), this.props.info),
      e('br', null))
    )
  }
};

//
// JOB SECTION!!
//

// Custom 3M technology used
function mmmTech() {
  return(
  e('div', {className: "tech"},
  e('ul', null,
    e('li', null, e('i', {className: "fab fa-python"})),
    e('li', null, e('i', {className: "fab fa-aws"})),
    e('li', null, e('i', {className: "fab fa-docker"}))
  ))
)};

function mmmDetails() {
  return(
    e('div', null,
      mmmTech(),
      e('ul', null,
        e('li', null, 'I worked in the Software Research Lab. It was an awesome learning experience.'),
        e('li', null, 'We were able to solve an interesting computer vision problem that involved finding the distance between two objects in an image (provided we made certain assumptions).'),
        e('li', null, 'In addition to solving this problem locally, we used AWS to automate solving this vision problem by linking a Lambda function with a custom IOS application.')
      ),
      e('br', null),
      e('h5', {display: "inline"}, 'They liked me enough to invite me back. See you in 2020, ', attention('Artificial Intelligence Lab!', highlightColor))
    )
)};

const mmm = {
  title: 'R&D Data Scientist',
  location: '3M - Corporate Research Systems Lab',
  image: 'images/jobs/3m.png',
  link: 'https://www.3m.com/3M/en_US/company-us/about-3m/research-development/',
  details: mmmDetails()
};

// Custom Website details
function webTech() {
  return(
  e('div', {className: "tech"},
  e('ul', null,
    e('li', null, e('i', {className: "fab fa-react"})),
    e('li', null, e('i', {className: "fab fab fa-css3-alt"})),
    e('li', null, e('i', {className: "fab fa-html5"}))
  ))
)};

function websiteDetails() {
  return(
    e('div', null,
      webTech(),
      e('ul', null,
        e('li', null, 'I wanted to build my own website using React! And here we are.'),
        e('li', null, 'My old website can be found ', e('a', {href: "https://gmancino.dev/old-website/index.html"}, 'here.'), ' This was before I knew any Javascript.'),
        e('li', null, 'If you\'d like to view the source code, check out my ', e('a', {href: "https://github.com/gmancino/gmancino.github.io"}, 'github'),' page.')
      )
    )
)};

const web = {
  title: 'Front End Devleopment',
  location: 'Personal Project',
  image: 'images/uplogo.png',
  link: 'https://gmancino.dev',
  details: websiteDetails()
};

// Custom Logistic Regression details
function logregTech() {
  return(
  e('div', {className: "tech"},
  e('ul', null,
    e('li', null, e('i', {className: "fas fa-brain"})),
    e('li', null, e('i', {className: "fas fa-laptop-code"}))
  ))
)};

function logRegDetails() {
  return(
    e('div', null,
    logregTech(),
      e('ul', null,
        e('li', null, 'This was the final project for my graduate level theoretical optimization course.'),
        e('li', null, 'All machine learning algorithms are solving some sort of optimization problem; in this particular project we wanted to create our own classification algorithm using a logistic regression model.'),
        e('li', null, 'It was pretty amazing to see this thing work and gain a better understanding of the inner workings of \'machine learning!\'')
      ),
      e('br', null),
      e('h5', {display: "inline"}, 'If you\'d like to view the full project, click ', e('a', {href: "docs/OptimizationProject.pdf"}, ' here.'))
    )
)};

const logreg = {
  title: 'Logistic Regression Classification',
  location: 'RPI - MATH 6600',
  image: 'images/other/math.png',
  link: 'docs/OptimizationProject.pdf',
  details: logRegDetails()
}

// Function for rendering specifics about jobs
function job(title, location, image_path, link, details) {
  return e('div', null,
    e('h3', null, title),
    e('a', {href: link}, e('img', {src: image_path, alt: image_path})),
    e('h5', {style: {fontStyle: "italic"}}, location),
    e('br', null),
    details,
    e('br', null)
  )
};

// Render things I've done
ReactDOM.render(
  e(Parent, {title: 'Things I\'ve done',
  info: [e('h5', null, 'If you\'d like an objectively boring version of this information, click ', e('a', {href: "docs/Mancino-Ball_Resume.pdf"}, 'here.'), e('br', null)),
    e('br', null),
    job(mmm.title, mmm.location, mmm.image, mmm.link, mmm.details),
    e('br', null),
    job(web.title, web.location, web.image, web.link, web.details),
    e('br', null),
    job(logreg.title, logreg.location, logreg.image, logreg.link, logreg.details)]}),
  document.getElementById('past')
);

//
// INTEREST SECTION!!!!
//

// This is gross, I am so sorry :'(
const imageList = [
  {
    name: 'Marvel',
    src: "images/shows/marvel.jpg",
    text: 'I <3 Iron Man',
    tag: 'Movies'
  },
  {
    name: 'Joyner Lucas',
    src: "images/music/joyner.jpg",
    text: 'Unparalleled flow',
    tag: 'Music'
  },
  {
    name: 'Boxing',
    src: "images/other/boxing.png",
    text: 'Chess, but with your body',
    tag: 'Other'
  },
  {
    name: 'The Office',
    src: "images/shows/office.jpg",
    text: 'Jim is my spirit animal',
    tag: 'Shows'
  },
  {
    name: 'Quinn XCII',
    src: "images/music/quinn.jpg",
    text: 'On a beach, in a car, wherever',
    tag: 'Music'
  },
  {
    name: 'Stack Exchange',
    src: "images/other/stack.png",
    text: 'Omnipresent in my life',
    tag: 'Other'
  },
  {
    name: 'Lil\' Dicky',
    src: "images/music/lildicky.jpg",
    text: 'Hopefully you know something other than \'Freaky Friday\'',
    tag: 'Music'
  },
  {
    name: 'John Wick',
    src: "images/shows/johnwick.jpg",
    text: 'Don\'t steal cars, kids',
    tag: 'Movies'
  },
  {
    name: 'GRiZ',
    src: "images/music/griz.jpg",
    text: 'Dude puts on AMAZING shows',
    tag: 'Music'
  },
  {
    name: 'AlphaGo',
    src: "images/other/alphago.png",
    text: 'Such an impressive feat',
    tag: 'Other'
  },
  {
    name: 'Michael Buble',
    src: "images/music/buble.jpg",
    text: 'Frank Sinatra?',
    tag: 'Music'
  },
  {
    name: 'Nature',
    src: "images/other/nature.jpeg",
    text: 'Nature is my first love',
    tag: 'Other'
  },
  {
    name: 'Stranger Things',
    src: "images/shows/strangerthings.jpg",
    text: 'Binged this whole show in two weeks',
    tag: 'Shows'
  },
  {
    name: 'Food',
    src: "images/other/food.jpeg",
    text: 'FEED ME',
    tag: 'Other'
  },
  {
    name: 'Ed Sheeran',
    src: "images/music/ed.jpg",
    text: 'Lullabies and bangers',
    tag: 'Music'
  },
  {
    name: 'Love, Death, and Robots',
    src: "images/shows/ldr.jpg",
    text: 'The Secret War',
    tag: 'Shows'
  },
  {
    name: 'Halsey',
    src: "images/music/halsey.png",
    text: 'Vibe with me',
    tag: 'Music'
  },
  {
    name: 'Billie Eilish',
    src: "images/music/billie.jpg",
    text: 'Straight fire',
    tag: 'Music'
  },
  {
    name: 'Sushi',
    src: "images/other/sushi.jpg",
    text: 'Sushi is my fav',
    tag: 'Other'
  },
  {
    name: 'Colorado',
    src: "images/other/colorado.jpg",
    text: 'Colorado is magical in every way',
    tag: 'Other'
  },
  {
    name: 'Travel',
    src: "images/other/italy.jpg",
    text: 'Can\'t wait to return to Europe!',
    tag: 'Other'
  },
  {
    name: 'Rock Climbing',
    src: "images/other/climbing.jpg",
    text: 'Not very good, but I sure do like it!',
    tag: 'Other'
  },
  {
    name: 'Vanessa Kirby',
    src: "images/shows/kirby.jpg",
    text: 'Absolute badass!',
    tag: 'Movies'
  },
  {
    name: 'Joi Ito Philosophies',
    src: "images/other/ito.jpg",
    text: 'I strive to live by these philosophies',
    tag: 'Other'
  }
];

function interestElement(listItem, i) {
  // listItem must have the following attributes: 'name', 'src', 'text', 'tag'
  // i is an int
  return(
    e('div', {className: "image-container"},
    e('img', {src: listItem[i].src, alt: listItem[i].name}),
    e('div', {className: "image-text"}, listItem[i].text))
  )
};

// If you want to add more, just append items to the 'imageList' and then place them in here
const interestGrid = e('div', {className: "row"},
  e('div', {className: "column"},
    interestElement(imageList, 0),
    interestElement(imageList, 1),
    interestElement(imageList, 18),
    interestElement(imageList, 2),
    interestElement(imageList, 3),
    interestElement(imageList, 5),
    interestElement(imageList, 19),
    interestElement(imageList, 10)
  ),
  e('div', {className: "column"},
    interestElement(imageList, 6),
    interestElement(imageList, 17),
    interestElement(imageList, 7),
    interestElement(imageList, 21),
    interestElement(imageList, 8),
    interestElement(imageList, 14),
    interestElement(imageList, 9)
  ),
  e('div', {className: "column"},
    interestElement(imageList, 22),
    interestElement(imageList, 11),
    interestElement(imageList, 12),
    interestElement(imageList, 23),
    interestElement(imageList, 4),
    interestElement(imageList, 13),
    interestElement(imageList, 15),
    interestElement(imageList, 16),
    interestElement(imageList, 20)
  )
);

//
// About me
//
const aboutInfo = e('div', null,
  e('h5', null, 'Hello! My name is Gabriel, but you can call me Gabe.' +
 ' I currently study mathematics at Rensselaer Polytechnic Institute in Troy, New York.' +
 ' My research interests lie in the applications of optimization and probability theory to solve machine learning problems.'));

// Render about me
ReactDOM.render(
  e(Parent, {title: 'Greetings', info: [aboutInfo, e('br', null)]}),
  document.getElementById('intro')
);

//
// Render current endeavors
//

function whatIDo() {
  return(
  e('div', null,
    e('h5', null, 'Distributed optimization frameworks that are able to fully utilize edge computing have gained interest in the last few years. I am interested in providing theoretical convergence guarantees for algorithms ran on such frameworks.'),
    e('h5', null, 'Papers I\'m reading/have read recently:'),
    e('div', {className: "papers"},
      e('ul', null,
        e('li', null, e('a', {href: "https://epubs.siam.org/doi/abs/10.1137/14096668X"}, 'EXTRA: An Exact First-Order Algorithm for Decentralized Consensus Optimization'), ' by Shi et. al.'),
        e('li', null, e('a', {href: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=4749425"}, 'Distributed Subgradient Methods for Multi-Agent Optimization'), ' by Nedic\u0301 et. al.'),
        e('li', null, e('a', {href: "https://arxiv.org/abs/1907.02189"}, 'On the Convergence of FedAvg on Non-IID Data'), ' by Li et. al.')
      )
    )
  )
)};

ReactDOM.render(
  e(Parent, {title: 'Things I\'m doing',
  info: whatIDo()}),
  document.getElementById('current')
);

// Render interests
ReactDOM.render(
  e(Parent, {title: 'Things I like', info: interestGrid}),
  document.getElementById('interests')
);
