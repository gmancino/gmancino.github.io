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
  var x = x.valueOf();
  var y = y.valueOf();

  return(
    Math.round(-(y + 47) * Math.sin(Math.pow(Math.abs( (x / 2) + (y + 47)), 1 / 2)) - x * Math.sin(Math.pow(Math.abs(x - (y + 47)), 1 /2)))
  )
};

// Make function for turning output value into Hex
function numToColor(x) {
  // Stolen from stack exchange
  if (x < 0) {
    var x = Math.pow(x, 2);
  }

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
        {onMouseMove: this._onMouseMove.bind(this), style: {border: "3px solid", padding: "5px"}},
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

    var vis = {display: this.state.isHidden ? "none" : "block"};

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

// Create functions for rendering different things in body of page

// Custom 3M technology used
function threeMTech() {
  return(
  e('div', null,
  e('h5', null, 'Technologies used:'),
  e('ul', null,
    e('li', null, e('i', {className: "fab fa-python"})),
    e('li', null, e('i', {className: "fab fa-react"})),
    e('li', null, e('i', {className: "fab fa-aws"})),
    e('li', null, e('i', {className: "fab fa-docker"})),
    e('li', null, e('i', {className: "fab fab fa-css3-alt"})),
    e('li', null, e('i', {className: "fab fa-html5"}))
  ),
  e('br', null))
)};

function threeMDetails() {
  return(
    e('div', null,
      e('h5', null, 'I worked in the Software Research Lab. It was an awesome learning experience.' +
      ' We were able to solve an interesting computer vision problem involving finding the distance between two objects in an image (provided we made certain assumptions).'),
      e('br', null),
      e('h5', null, 'In addition to solving this problem locally, we used AWS to automate solving this vision problem.'),
      e('br', null),
      threeMTech(),
      e('br', null),
      e('h5', {display: "inline"}, 'They liked me enough to invite me back. See you in 2020, ', attention('Artificial Intelligence Lab!', highlightColor))
    )
)};

// Custom RPI details
function rpiDetails() {
  return(
    e('div', null,
      e('h5', null, 'I did regular TA things here. Grading homework, quizzes, and exams. Hosting office hours to give students extra help. I made all of my own quizzes, which is pretty cool.'),
      e('br', null),
      e('h5', {display: "inline"}, 'My average overall student approval rating is ', attention('4.55/5.0!', highlightColor), e('h6', null, ' I\'m pretty proud of this!'))
    )
)};

// Custom Logistic Regression details
function logRegDetails() {
  return(
    e('div', null,
      e('h5', {display: "inline"}, 'This was the final project for my graduate level theoretical optimization course. If you\'d like to view the full project, click ', e('a', {href: "docs/OptimizationProject.pdf"}, ' here.')),
      e('br', null),
      e('h5', null, 'All machine learning algorithms are solving some sort of optimization problem; in this particular project we wanted to create our own classification algorithm using a logistic regression model.'),
      e('br', null),
      e('h5', null, 'It was pretty amazing to see this thing work and gain a better understanding of the inner workings of \'machine learning!\'')
    )
)};

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

// Image interest grid
// This is gross, I am so sorry :'(
const interestGrid = e('div', {className: "row"},
  e('div', {className: "column"}, e('div', {className: "image-container"}, e('img', {src: "images/shows/marvel.jpg", alt: 'Marvel'}), e('div', {className: "image-text"}, 'I <3 Iron Man')),
    e('div', {className: "image-container"}, e('img', {src: "images/music/joyner.jpg", alt: 'Joyner Lucas'}), e('div', {className: "image-text"}, 'Unparalleled flow')),
    e('div', {className: "image-container"}, e('img', {src: "images/other/boxing.png", alt: 'Boxing'}), e('div', {className: "image-text"}, 'Chess, but with your body')),
    e('div', {className: "image-container"}, e('img', {src: "images/shows/office.jpg", alt: 'The Office'}), e('div', {className: "image-text"}, 'Jim is my spirit animal')),
    e('div', {className: "image-container"}, e('img', {src: "images/music/quinn.jpg", alt: 'Quinn XCII'}), e('div', {className: "image-text"}, 'On a beach, in a car, wherever')),
    e('div', {className: "image-container"}, e('img', {src: "images/other/stack.png", alt: 'Stack Exchange'}), e('div', {className: "image-text"}, 'Omnipresent in my life'))),
  e('div', {className: "column"}, e('div', {className: "image-container"}, e('img', {src: "images/music/lildicky.jpg", alt: 'Lil\' Dicky'}), e('div', {className: "image-text"}, 'Hopefully you know something other than \'Freaky Friday\'')),
    e('div', {className: "image-container"}, e('img', {src: "images/shows/johnwick.jpg", alt: 'John Wick'}), e('div', {className: "image-text"}, 'Don\'t steal cars, kids')),
    e('div', {className: "image-container"}, e('img', {src: "images/music/griz.jpg", alt: 'GRiZ'}), e('div', {className: "image-text"}, 'Dude puts on AMAZING shows')),
    e('div', {className: "image-container"}, e('img', {src: "images/other/alphago.png", alt: 'AlphaGo'}), e('div', {className: "image-text"}, 'Such an impressive feat')),
    e('div', {className: "image-container"}, e('img', {src: "images/music/buble.jpg", alt: 'Michael Buble'}), e('div', {className: "image-text"}, 'Serenade me'))),
  e('div', {className: "column"}, e('div', {className: "image-container"}, e('img', {src: "images/other/nature.jpeg", alt: 'Nature'}), e('div', {className: "image-text"}, 'Nature is first love')),
    e('div', {className: "image-container"}, e('img', {src: "images/shows/strangerthings.jpg", alt: 'Stranger Things'}), e('div', {className: "image-text"}, 'Binged this whole show in two weeks')),
    e('div', {className: "image-container"}, e('img', {src: "images/other/food.jpeg", alt: 'Food'}), e('div', {className: "image-text"}, 'FEED ME')),
    e('div', {className: "image-container"}, e('img', {src: "images/music/ed.jpg", alt: 'Ed Sheeran'}), e('div', {className: "image-text"}, 'Lullabies and bangers')),
    e('div', {className: "image-container"}, e('img', {src: "images/shows/ldr.jpg", alt: 'LDR'}), e('div', {className: "image-text"}, 'The Secret War')))
);

// Create about me
const aboutInfo = e('h5', null, 'Hello! My name is Gabriel, but you can call me Gabe.' +
 ' I currently study mathematics at Rensselaer Polytechnic Institute in Troy, New York.' +
 ' My research interests lie in the applications of optimization and probability theory to solve machine learning problems.',
 e('br', null));

// Render about me
ReactDOM.render(
  e(Parent, {title: 'Greetings', info: [aboutInfo, e('br', null)]}),
  document.getElementById('about')
);

// Render current endeavors
ReactDOM.render(
  e(Parent, {title: 'Things I\'m doing',
  info: [e('h5', null, 'Try finding the ', attention('smallest', highlightColor), ' objective value in the box below.'),
    e(Func, null),
    e('br', null),
    e('h5', null, 'Pretty hard right? This is called ', attention('derivative-free optimization', highlightColor),
    ' and I think it is very interesting! This is what I study at Rensselaer Polytechnic Institute.')]}),
  document.getElementById('current')
);

// Render things I've done
ReactDOM.render(
  e(Parent, {title: 'Things I\'ve done',
  info: [e('h5', null, 'If you\'d like an objectively boring version of this information, click ', e('a', {href: "docs/Mancino-Ball_Resume.pdf"}, 'here.'), e('br', null)),
    e('br', null),
    job('R&D Data Scientist', '3M - Corporate Research Systems Lab', 'images/jobs/3m.png', 'https://www.3m.com/3M/en_US/company-us/about-3m/research-development/', threeMDetails()),
    e('br', null),
    job('Teaching Assistant', 'Rensselaer Polytechnic Institute', 'images/jobs/rpi.png', 'https://science.rpi.edu/mathematical-sciences', rpiDetails()),
    e('br', null),
    job('Logistic Regression Classification', 'MATH 6600', 'images/other/math.png', "docs/OptimizationProject.pdf", logRegDetails()),
    e('br', null)]}),
  document.getElementById('past')
);

// Render interests
ReactDOM.render(
  e(Parent, {title: 'Things I like', info: interestGrid}),
  document.getElementById('interests')
);
