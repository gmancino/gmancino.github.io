/*
 * A simple React component
 */
class Mouse extends React.Component {
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
      React.createElement(
        'div',
        {onMouseMove: this._onMouseMove.bind(this)},
        React.createElement(
          'h1',
          null,
          'This is a test : ' + x.toString() + ', ' + y.toString()
        )
      )
    )
  }
}

/*
 * Render the above component into the div#app
 */

ReactDOM.render(React.createElement(Mouse, null), document.getElementById('mouse'));
