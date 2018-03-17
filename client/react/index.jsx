import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      rows: []
    }
  }
  reload () {
    this.date = new Date();
    this.setState({
      rows: this.buildData()
    })
  }
  buildData () {
    return buildData().map(item =>
      <div className="row-item react" key={item.id}>{item.label}</div>
    );
  }
  componentDidUpdate() {
    document.getElementById('react-load-time').innerHTML = (new Date() - this.date + ' ms');
  }
  render () {
    return (
      <div>
        <h4>
          React <span className="load" onClick={() => this.reload()}>[load]</span>
          <span id="react-load-time" className="load-time" />
        </h4>
        {this.state.rows}
      </div>
    )
  }
}

render(<App/>, document.getElementById('react-root'));
